import runGame from '../index.js';
import getRandomNum from '../get-random-num.js';

const getProgression = (length, step) => {
  const progression = [];
  for (let i = step; i <= step * length; i += step) {
    progression.push(i);
  }
  return progression;
};

const gameRule = 'What number is missing in the progression?';

function generateGameTask() {
  const progressionLength = getRandomNum(5, 10);
  const hiddenIndex = getRandomNum(0, progressionLength - 1);
  const progressionStep = getRandomNum(1, 15);
  const progression = getProgression(progressionLength, progressionStep);

  return {
    question: progression.map((el, i) => (hiddenIndex === i ? '..' : el)).join(' '),
    correctAnswer: `${progression[hiddenIndex]}`,
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
