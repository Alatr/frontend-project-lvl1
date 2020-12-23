import readlineSync from 'readline-sync';

let correctAnswerCnt = 0;

function defineNextStep(generateTaskFn, userName) {
  if (correctAnswerCnt === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const task = generateTaskFn();

  console.log(task.question);
  const answer = readlineSync.question('Your answer:');

  if (answer === task.correctAnswer) {
    correctAnswerCnt += 1;
    console.log('Correct!');
    defineNextStep(generateTaskFn, userName);
    return;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task.correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
}

export default function gameCore({ generateTask, explanationMsg }) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');

  console.log(`Hello, ${userName}!`);
  console.log(explanationMsg);

  defineNextStep(generateTask, userName);
}
