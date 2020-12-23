import readlineSync from 'readline-sync';

export default function gameCore({ generateTask, explanationMsg }) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');

  console.log(`Hello, ${userName}!`);
  console.log(explanationMsg);

  function defineNextStep(correctAnswerCnt = 0) {
    if (correctAnswerCnt === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const task = generateTask();

    console.log(task.question);
    const answer = readlineSync.question('Your answer:');

    if (answer === task.correctAnswer) {
      console.log('Correct!');
      defineNextStep(correctAnswerCnt + 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task.correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }

  defineNextStep();
}
