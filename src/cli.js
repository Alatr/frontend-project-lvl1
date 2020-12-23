import readlineSync from 'readline-sync';

export const log = (msg) => console.log(msg);
export const getAnswer = (msg) => readlineSync.question(msg);
