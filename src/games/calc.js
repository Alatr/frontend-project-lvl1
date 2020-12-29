import runGame from '../index.js';
import getRandomNum from '../get-random-num.js';

const gameRule = 'What is the result of the expression?';

const operations = [
  {
    operator: '+',
    operation: (a, b) => a + b,
  },
  {
    operator: '-',
    operation: (a, b) => a - b,
  },
  {
    operator: '*',
    operation: (a, b) => a * b,
  },
];

function generateGameTask() {
  const randomIntOperationIndex = getRandomNum(0, operations.length - 1);
  const randomOperand1 = getRandomNum(0, 10);
  const randomOperand2 = getRandomNum(0, 10);
  const operation = operations[randomIntOperationIndex];

  return {
    question: `${randomOperand1} ${operation.operator} ${randomOperand2}`,
    correctAnswer: `${operation.operation(randomOperand1, randomOperand2)}`,
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
