// function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let percentage1 = percentageOfWorld1(1441);
let percentage2 = percentageOfWorld1(500);
let percentage3 = percentageOfWorld1(440);
console.log(percentage1, percentage2, percentage3);
// function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
percentage1 = percentageOfWorld2(1441);
percentage2 = percentageOfWorld2(500);
percentage3 = percentageOfWorld2(440);
console.log(percentage1, percentage2, percentage3);
