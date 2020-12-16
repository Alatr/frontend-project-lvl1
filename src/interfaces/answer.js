import {
  getLastItem, addItemInList, returnList, isEmptyList,
} from './collections.js';

export const setNewAnswerInHistoryAnswers = (answer, hisoryAnswers) => {
  addItemInList(answer, hisoryAnswers);
};

export const getHistoryAnswers = (state) => returnList(state, 'historyAnswers');

export const isEmptyHistoryAnswers = (historyAnswers) => isEmptyList(historyAnswers);

export const getLastAnswer = (historyAnswers) => getLastItem(historyAnswers);
