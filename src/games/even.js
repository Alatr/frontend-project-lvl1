import runGame from '../index.js';
import getRandomNum from '../get-random-num.js';

export const isEven = (number) => (number % 2 === 0);

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateGameTask() {
  const randomNumber = getRandomNum(0, 100);
  return {
    question: randomNumber,
    correctAnswer: isEven(randomNumber) ? 'yes' : 'no',
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
