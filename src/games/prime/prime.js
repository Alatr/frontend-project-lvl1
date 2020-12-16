import gameCore from '../../index.js';
import { getRandomIntInclusive, isPrime } from '../../helpers.js';

const stateApp = {
  count: 0,
  name: null,
  historyAnswers: [],
  historyQuestion: [],
  state: null, // 'wrongAnswer', 'corectAnswer', 'askAgain', 'greetings',

};

const explanationMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrimeStrFormat(number) {
  return (isPrime(number)) ? 'yes' : 'no';
}

function generateTask() {
  const randomInt = getRandomIntInclusive(0, 100);
  const newTask = {
    question: randomInt,
    correctAnswer: isPrimeStrFormat(randomInt),
  };
  return newTask;
}

export default () => {
  gameCore(stateApp, { generateTask, explanationMsg });
};
