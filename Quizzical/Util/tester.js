// const selectAnswerChoice = (id, parentId) => {

import { useEffect } from "react";

//   const quizDataClone = structuredClone(quizData);
//   const question = quizDataClone.find((item) => item.id === parentId);
//   const newAnswers = question.answers.map((item) => {
//     if (item.id === id) {
//       if (item.selected) {
//         alreadySelected = true;
//       }
//       return { ...item, selected: true };
//     } else {
//       return { ...item, selected: false };
//     }
//   });
//   question.answers = newAnswers;
//   setQuizData(quizDataClone);
//   setAnsweredQuestions((prev) => prev.add(parentId));
//   if (!alreadySelected) {
//     setSubmitError(false);
//   }
// };


// const fetcher = async (callBack, signal) => {
//   try {
//     let info = [];
//     let quizInfo = [];
//     const res = await fetch(
//       "https://opentdb.com/api.php?amount=5&type=multiple",
//       { signal }
//     );
//     const data = res.json();
//     info = await data.results;
//     for (let i of info) {
//       quizInfo.push({ id: nanoid(), question: i.question, answers: [] });
//       let quizInfoLength = quizInfo.length - 1;
//       for (let j of i.incorrect_answers) {
//         quizInfo[quizInfoLength].answers.push(answerSetter(j, false));
//       }
//       let placer = Math.random() * i.incorrect_answers.length;
//       quizInfo[quizInfoLength].answers.splice(
//         placer,
//         0,
//         answerSetter(i.correct_answer, true)
//       );
//     }
//     callBack(quizInfo);
//   } catch (error) {
//     if (error.name === "AbortError") {
//       console.log("Clean up function ran");
//     } else {
//       console.error("Fetch error", error);
//     }
//   }
// };




const fetchData = async () => {
  console.count("called");
  try {
    console.log(signal);
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&type=multiple",
      { signal }
    );
    const data = await res.json();
    const transformedData = transformData(data.results);
    setQuizData(transformedData);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request was aborted:", signal.aborted); // This should log true if the request was aborted
    }
    throw error;
  }
};
fetchData()

useEffect(()=>{
  const controller = new AbortController();
  const signal = controller.signal;
  fetch("https://opentdb.com/api.php?amount=5&type=multiple", { signal }).then(res=>res.json())
  .then(data=>{
    setQuizData(data.results)
  }).catch(err=>{
    if (err.name === "AbortError") {
      console.log("Request was aborted:", signal.aborted); // This should log true if the request was aborted
    }
    throw err;
  })

  return()=>{
    controller.abort
    console.log("cancelled")
    
  }
},[startGame])