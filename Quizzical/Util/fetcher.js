import { nanoid } from "nanoid";
const answerSetter = (val, correct) => {
  return { id: nanoid(), val: val, correct: correct, selected: false };
};
const fetcher = async (fun) => {
  let info = [];
  let quizInfo = [];
  const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
  const data = await res.json();
  info = await data.results;
  for (let i of info) {
    quizInfo.push({ id: nanoid(), question: i.question, answers: [] });
    let quizInfoLength = quizInfo.length - 1;
    for (let j of i.incorrect_answers) {
      quizInfo[quizInfoLength].answers.push(answerSetter(j, false));
    }
    let placer = Math.random() * i.incorrect_answers.length;
    quizInfo[quizInfoLength].answers.splice(
      placer,
      0,
      answerSetter(i.correct_answer, true)
    );
  }
  fun(quizInfo)
};

export default fetcher;
