import gameCore from '../../index.js';
import { getRandomIntInclusive, isEven } from '../../helpers.js';

export const stateApp = {
  count: 0,
  name: null,
  historyAnswers: [],
  historyQuestion: [],
  state: null, // 'wrongAnswer', 'corectAnswer', 'askAgain', 'greetings',

};

function isEvenStrFormat(number) {
  return (isEven(number)) ? 'yes' : 'no';
}

function generateTask() {
  const randomInt = getRandomIntInclusive(0, 100);
  const newTask = {
    question: randomInt,
    correctAnswer: isEvenStrFormat(randomInt),
  };
  return newTask;
}

export default () => {
  gameCore(stateApp, generateTask);
};
