import readlineSync from 'readline-sync';
import { observable } from './helpers.js';
import {
  getName, getCntAnswer, incCntAnswer, setStatusApp, printResultMessage, askUser,
} from './interfaces/state.js';
import {
  isEmptyHistoryAnswers, getHistoryAnswers, getLastAnswer, setNewAnswerInHistoryAnswers,
} from './interfaces/answer.js';
import {
  getCorrectAnswer,
  getHistoryQuestions,
  getLastQuestionTask,
  getQuestion,
  setNewTaskInHistoryQuestions,
} from './interfaces/task.js';

let watchedState = null;
let historyQuestions = null;
let historyAnswers = null;
let generateTaskFn = null;

function observableCallback(statusApp) {
  const lastAnswer = getLastAnswer(historyAnswers);
  /*  */
  const lastQuestionTask = getLastQuestionTask(historyQuestions);
  const correctAnswer = getCorrectAnswer(lastQuestionTask);
  /*  */
  const name = getName(watchedState);

  if (statusApp === 'askAgain') {
    askUserAndSaveAnswer();
    defineNewState();
    return;
  }
  printResultMessage({
    statusApp, lastAnswer, correctAnswer, name,
  });
}

/* abstraction task */
function generateTaskAndSaveInHistory(createTaskFn) {
  const newTask = createTaskFn();
  setNewTaskInHistoryQuestions(newTask, historyQuestions);
}

function askUserAndSaveAnswer() {
  generateTaskAndSaveInHistory(generateTaskFn);
  const lastQuestionTask = getLastQuestionTask(historyQuestions);
  const question = getQuestion(lastQuestionTask);

  askUser(question);

  const answer = readlineSync.question('Your answer:');
  setNewAnswerInHistoryAnswers(answer, historyAnswers);
}

function firstLaunch() {
  askUserAndSaveAnswer();

  const lastAnswer = getLastAnswer(historyAnswers);
  /*  */
  const lastQuestionTask = getLastQuestionTask(historyQuestions);
  const correctAnswer = getCorrectAnswer(lastQuestionTask);
  /*  */

  if (lastAnswer === correctAnswer) {
    incCntAnswer(watchedState);
    setStatusApp(watchedState, 'corectAnswer');
    setStatusApp(watchedState, 'askAgain');
    return;
  }
  setStatusApp(watchedState, 'wrongAnswer');
}

function defineNewState() {
  /*  */
  if (isEmptyHistoryAnswers(historyAnswers)) {
    firstLaunch();
    return;
  }
  /*  */
  const lastAnswer = getLastAnswer(historyAnswers);
  const lastQuestionTask = getLastQuestionTask(historyQuestions);
  const correctAnswer = getCorrectAnswer(lastQuestionTask);

  if (lastAnswer !== correctAnswer) {
    setStatusApp(watchedState, 'wrongAnswer');
    return;
  }

  if (lastAnswer === correctAnswer) {
    incCntAnswer(watchedState);
    setStatusApp(watchedState, 'corectAnswer');

    if (getCntAnswer(watchedState) === 3) {
      setStatusApp(watchedState, 'greetings');
      return;
    }
    setStatusApp(watchedState, 'askAgain');
  }
}

export default function gameCore(state, makeTaskFn) {
  watchedState = observable(state, observableCallback);
  historyQuestions = getHistoryQuestions(watchedState);
  historyAnswers = getHistoryAnswers(watchedState);
  generateTaskFn = makeTaskFn;

  const userName = readlineSync.question('May I have your name?');
  watchedState.name = userName;

  console.log(`Hello, ${watchedState.name}!`);

  console.log('What is the result of the expression?');

  defineNewState();
}
