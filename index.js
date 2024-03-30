// const square = {
//   area: (a) => a * a,
//   perimeter: (a) => 4 * a,
// };
const square = require("./square");
const calsquare = (a) => {
  console.log(`square of ${a} is ` + square.area(a));
};

calsquare(5);
