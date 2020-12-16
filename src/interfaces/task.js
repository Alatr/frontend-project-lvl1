import {
  getLastItem, addItemInList, returnList, isEmptyList,
} from './collections.js';

export const setNewTaskInHistoryQuestions = (task, hisoryQuestions) => {
  addItemInList(task, hisoryQuestions);
};

export const getHistoryQuestions = (state) => returnList(state, 'historyQuestion');
export const isEmptyHistoryQuestions = (hisoryQuestions) => isEmptyList(hisoryQuestions);
export const getLastQuestionTask = (hisoryQuestions) => getLastItem(hisoryQuestions);
export const getQuestion = (questionTask) => questionTask.question;
export const getCorrectAnswer = (questionTask) => questionTask.correctAnswer;
