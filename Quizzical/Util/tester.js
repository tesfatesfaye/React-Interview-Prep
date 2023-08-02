// const selectAnswerChoice = (id, parentId) => {

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
