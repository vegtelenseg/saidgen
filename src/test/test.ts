import  { generateIdNumber } from '../lib/id-generator';

/* 
    TODO:
    Find out why ES6 import errors with
    TypeError: randomDate_1.default is not a function
*/
const randomDate = require('random-date-generator');


let i = -1;
while(++i < 1000) {
  const startDate = new Date(1999, 0, 1);
  const endDate = new Date(2019, 11, 31);
  const bday: Date = randomDate.getRandomDateInRange(startDate, endDate);
  const result = generateIdNumber(bday);

  console.log("ID NUMBER: %s\n", result);
}