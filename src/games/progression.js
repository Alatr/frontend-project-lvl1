import runGame from '../index.js';
import getRandomInt from '../get-random-num.js';

const getProgression = (length, step) => {
  const res = [];
  for (let i = step; i <= step * length; i += step) {
    res.push(i);
  }
  return res;
};

const gameRule = 'What number is missing in the progression?';

function generateProgressionStringWithHiddenNumber(list, hiddenIndex) {
  const listWithHideElem = list.map((el, i) => (hiddenIndex === i ? '..' : el));
  return listWithHideElem.join(' ');
}

function generateGameTask() {
  const progressionLength = getRandomInt(5, 10);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const progressionStep = getRandomInt(1, 15);
  const progressionList = getProgression(progressionLength, progressionStep);

  return {
    question: `Question: ${generateProgressionStringWithHiddenNumber(progressionList, hiddenIndex)}`,
    correctAnswer: `${progressionList[hiddenIndex]}`,
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
