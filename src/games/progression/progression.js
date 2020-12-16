import gameCore from '../../index.js';
import { getRandomIntInclusive, progression } from '../../helpers.js';

const stateApp = {
  count: 0,
  name: null,
  historyAnswers: [],
  historyQuestion: [],
  state: null, // 'wrongAnswer', 'corectAnswer', 'askAgain', 'greetings',

};

const explanationMsg = 'What number is missing in the progression?';

function progressionListWithHideNum(list, hideInx) {
  const res = list.reduce((acc, el, i) => {
    const tempAcc = acc;
    if (hideInx === i) {
      const newAcc = `${tempAcc}.. `;
      return newAcc;
    }
    const newAcc = `${tempAcc}${el} `;
    return newAcc;
  }, '');

  return res;
}

function generateTask() {
  const sizeProgression = getRandomIntInclusive(5, 10);
  const hideInx = getRandomIntInclusive(0, sizeProgression - 1);
  const randomIntProgression = getRandomIntInclusive(1, 15);
  const progressionList = progression(sizeProgression, randomIntProgression);

  const newTask = {
    question: progressionListWithHideNum(progressionList, hideInx),
    correctAnswer: `${progressionList[hideInx]}`,
  };
  return newTask;
}

export default () => {
  gameCore(stateApp, { generateTask, explanationMsg });
};
