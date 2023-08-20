import { nanoid } from "nanoid";
const answerSetter = (val, correct) => {
  return { id: nanoid(), val: val, correct: correct, selected: false };
};
const transformData = (data) => {
  return data.map((item) => {
    const answers = item.incorrect_answers.map((answer) =>
      answerSetter(answer, false)
    );
    const correctAnswerIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(
      correctAnswerIndex,
      0,
      answerSetter(item.correct_answer, true)
    );
    return {
      id: nanoid(),
      question: item.question,
      answers: answers,
    };
  });
};

export {  transformData };
