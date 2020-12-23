import readlineSync from 'readline-sync';

export default function gameCore({ generateTask, gameRule }) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');

  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  function runGameStep(correctAnswerCnt = 0) {
    if (correctAnswerCnt === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const task = generateTask();

    console.log(task.question);
    const answer = readlineSync.question('Your answer:');

    if (answer !== task.correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    runGameStep(correctAnswerCnt + 1);
  }

  runGameStep();
}
