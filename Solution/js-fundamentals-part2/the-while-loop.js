let populations = [1441, 220, 500, 250];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let percentages3 = new Array();
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
