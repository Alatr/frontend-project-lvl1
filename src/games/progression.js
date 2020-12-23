import runGame from '../index.js';
import { getRandomInt } from '../helpers.js';

const getProgression = (length, startProgression) => {
  const res = [];
  for (let i = startProgression; i <= startProgression * length; i += startProgression) {
    res.push(i);
  }
  return res;
};

const gameRule = 'What number is missing in the progression?';

function generateProgressionStringWithHiddenNumber(list, hiddenIndex) {
  const listWithHideElem = list.map((el, i) => (hiddenIndex === i ? '..' : el));
  const strWithHideElem = listWithHideElem.join(' ');

  return strWithHideElem;
}

function generateGameTask() {
  const lengthProgression = getRandomInt(5, 10);
  const hiddenIndex = getRandomInt(0, lengthProgression - 1);
  const randomStepProgression = getRandomInt(1, 15);
  const progressionList = getProgression(lengthProgression, randomStepProgression);

  return {
    question: `Question: ${generateProgressionStringWithHiddenNumber(progressionList, hiddenIndex)}`,
    correctAnswer: `${progressionList[hiddenIndex]}`,
  };
}

export default () => {
  runGame({ generateGameTask, gameRule });
};
