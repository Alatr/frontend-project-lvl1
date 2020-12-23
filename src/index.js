import { log, getAnswer } from './cli.js';

export default function runGame({ generateGameTask, gameRule }) {
  log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name?');

  log(`Hello, ${userName}!`);
  log(gameRule);

  function runGameStep(correctAnswersCount = 0) {
    if (correctAnswersCount === 3) {
      log(`Congratulations, ${userName}!`);
      return;
    }

    const task = generateGameTask();

    log(`Question: ${task.question}`);
    const answer = getAnswer('Your answer:');

    if (answer !== task.correctAnswer) {
      log(`'${answer}' is wrong answer ;(. Correct answer was '${task.correctAnswer}'.`);
      log(`Let's try again, ${userName}!`);
      return;
    }
    log('Correct!');
    runGameStep(correctAnswersCount + 1);
  }

  runGameStep();
}
