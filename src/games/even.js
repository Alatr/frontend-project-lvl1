import gameCore from '../index.js';
import getRandomInt from '../helpers.js';

export const isEven = (number) => (number % 2 === 0);

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateTask() {
  const randomNumber = getRandomInt(0, 100);
  const newTask = {
    question: `Question: ${randomNumber}`,
    correctAnswer: (isEven(randomNumber)) ? 'yes' : 'no',
  };
  return newTask;
}

export default () => {
  gameCore({ generateTask, gameRule });
};
