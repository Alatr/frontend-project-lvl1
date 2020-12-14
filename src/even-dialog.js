import readlineSync from 'readline-sync';

const state = {
  count: 0,
  name: null,
  historyAnswers: [],
  historyNumbers: [],
  state: null, // 'yes' 'no' 'greetings'
};
const watchedState = observable(state);

function getRandomIntInclusive(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  const range = (maxFloor - minCeil + 1);
  return Math.floor(Math.random() * range) + minCeil; // Максимум и минимум включаются
}

/*  */
function getName() {
  return watchedState.name;
}
function setAnswer(value) {
  watchedState.historyAnswers.push(value);
}

function getLastRandomNumberFromState() {
  const { length } = watchedState.historyNumbers;
  return watchedState.historyNumbers[length - 1];
}
function getCntAnswer() {
  return watchedState.count;
}
function getAnswer() {
  const { length } = watchedState.historyAnswers;
  return watchedState.historyAnswers[length - 1];
}
function printResultMessage(statusApp) {
  const lastAnswer = getAnswer();
  const name = getName();
  const correctAnswer = isEvenStrFormat(lastAnswer);

  switch (statusApp) {
    case 'wrongAnswer':
      console.log(`'${lastAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    case 'corectAnswer':
      console.log('Correct!');
      break;
    case 'askAgain':
      askUser();
      defineNewState();
      break;
    case 'greetings':
      console.log(`Congratulations, ${name}!`);
      break;

    default:
      throw new Error(`Unknown message ${statusApp}`);
  }
}

function observable(obj) {
  return new Proxy(obj, {
    set(target, name, value) {
      const key = name;
      const targetObj = target;
      const defiendedVal = value;

      targetObj[key] = defiendedVal;
      if (key === 'state') {
        printResultMessage(defiendedVal);
      }
      return true;
    },
  });
}

function setNumber(value) {
  watchedState.historyNumbers.push(value);
}

function askUser() {
  const randomInt = getRandomIntInclusive(0, 100);
  setNumber(randomInt);

  console.log(`Question: ${randomInt}`);

  const answer = readlineSync.question('Your answer:');

  setAnswer(answer);
}

function incCntAnswer() {
  watchedState.count = getCntAnswer() + 1;
}

function setStatusApp(newStatus) {
  watchedState.state = newStatus;
}
/*  */
function isEven(number) {
  return (+number % 2 === 0);
}

function isEvenStrFormat(number) {
  return (isEven(number)) ? 'yes' : 'no';
}

function defineNewState() {
  const answer = getAnswer();
  /*  */
  const evenStrFormatGenerateNum = isEvenStrFormat(getLastRandomNumberFromState());
  if (answer === undefined) {
    askUser();

    if (getAnswer() === isEvenStrFormat(getLastRandomNumberFromState())) {
      incCntAnswer();
      setStatusApp('corectAnswer');
      setStatusApp('askAgain');
      return;
    }
    setStatusApp('wrongAnswer');
    return;
  }

  if (answer !== evenStrFormatGenerateNum) {
    setStatusApp('wrongAnswer');
    return;
  }

  if (answer === evenStrFormatGenerateNum) {
    incCntAnswer();
    setStatusApp('corectAnswer');

    if (getCntAnswer() === 3) {
      setStatusApp('greetings');
      return;
    }
    setStatusApp('askAgain');
  }
}

export default function dialog() {
  const userName = readlineSync.question('May I have your name?');
  watchedState.name = userName;

  console.log(`Hello, ${watchedState.name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  defineNewState();
}
