import runGame from '../index.js';
import { getRandomInt } from '../helper.js';

export const isEven = (number) => (number % 2 === 0);

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateGameTask() {
  const randomNumber = getRandomInt(0, 100);
  return {
    question: `Question: ${randomNumber}`,
    correctAnswer: (isEven(randomNumber)) ? 'yes' : 'no',
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
