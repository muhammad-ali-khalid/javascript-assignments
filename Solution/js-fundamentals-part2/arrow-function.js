// function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let percentage1 = percentageOfWorld1(1441);
let percentage2 = percentageOfWorld1(500);
let percentage3 = percentageOfWorld1(440);
console.log(percentage1, percentage2, percentage3);
// Arrow function 
const percentageOfWorld3 = (population) => (population / 7900) * 100;
percentage1 = percentageOfWorld3(1441);
percentage2 = percentageOfWorld3(500);
percentage3 = percentageOfWorld3(440);
console.log(percentage1, percentage2, percentage3);
