import readlineSync from 'readline-sync';
import { observable, getRandomIntInclusive, isEven } from '../../helpers.js';
import {
  stateApp as state,
  getName,
  getCntAnswer,
  incCntAnswer,
  setStatusApp,
  isEmptyHistoryAnswers,
  printResultMessage,
  getCorrectAnswer,
  getLastAnswer,
  getHistoryAnswers,
  askUser,
  setNewAnswerInHistoryAnswers,
  getHistoryQuestions,
  getLastQuestionTask,
  getQuestion,
  setNewTaskInHistoryQuestions,
} from '../../index.js';

const watchedState = observable(state, observableCallback);
const historyQuestions = getHistoryQuestions(watchedState);
const historyAnswers = getHistoryAnswers(watchedState);

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
function generateTask() {
  const randomInt = getRandomIntInclusive(0, 100);
  const newTask = {
    question: randomInt,
    correctAnswer: isEvenStrFormat(randomInt),
  };
  setNewTaskInHistoryQuestions(newTask, historyQuestions);
}

function askUserAndSaveAnswer() {
  generateTask();
  const lastQuestionTask = getLastQuestionTask(historyQuestions);
  const question = getQuestion(lastQuestionTask);

  askUser(question);

  const answer = readlineSync.question('Your answer:');
  setNewAnswerInHistoryAnswers(answer, historyAnswers);
}

function isEvenStrFormat(number) {
  return (isEven(number)) ? 'yes' : 'no';
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

export default function dialog() {
  const userName = readlineSync.question('May I have your name?');
  watchedState.name = userName;

  console.log(`Hello, ${watchedState.name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  defineNewState();
}
