import gameCore from '../index.js';
import getRandomInt from '../helpers.js';

const progression = (length, progressionNum) => {
  const res = [];
  for (let i = progressionNum; i <= progressionNum * length; i += progressionNum) {
    res.push(i);
  }
  return res;
};

const gameRule = 'What number is missing in the progression?';

function progressionListWithHideNum(list, hideInx) {
  const listWithHideElem = list.map((el, i) => (hideInx === i ? '..' : el));
  const strWithHideElem = listWithHideElem.join(' ');

  return strWithHideElem;
}

function generateTask() {
  const sizeProgression = getRandomInt(5, 10);
  const hideInx = getRandomInt(0, sizeProgression - 1);
  const randomNumberProgression = getRandomInt(1, 15);
  const progressionList = progression(sizeProgression, randomNumberProgression);

  const newTask = {
    question: `Question: ${progressionListWithHideNum(progressionList, hideInx)}`,
    correctAnswer: `${progressionList[hideInx]}`,
  };
  return newTask;
}

export default () => {
  gameCore({ generateTask, gameRule });
};
