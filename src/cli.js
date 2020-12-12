import readlineSync from 'readline-sync';

export default function dialog() {
// Wait for user's response.
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
}
