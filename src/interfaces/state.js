export const stateApp = {
  count: 0,
  name: null,
  historyAnswers: [],
  historyQuestion: [],
  state: null, // 'wrongAnswer', 'corectAnswer', 'askAgain', 'greetings',

};

export const getName = (state) => state.name;
/*  */

export const askUser = (question) => console.log(`Question: ${question}`);

export const printResultMessage = ({
  statusApp, lastAnswer, correctAnswer, name,
}) => {
  switch (statusApp) {
    case 'wrongAnswer':
      console.log(`'${lastAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    case 'corectAnswer':
      console.log('Correct!');
      break;
    case 'greetings':
      console.log(`Congratulations, ${name}!`);
      break;
    default:
      throw new Error(`Unknown message ${statusApp}`);
  }
};

export const getStatusApp = (obj) => obj.state;
export const setStatusApp = (obj, newState) => {
  const stateObj = obj;
  stateObj.state = newState;
};

export const getCntAnswer = (obj) => obj.count;
export const incCntAnswer = (state) => {
  const stateObj = state;
  stateObj.count = getCntAnswer(state) + 1;
};
