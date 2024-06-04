let populations = [1441, 220, 500, 250];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let percentages2 = new Array();
for (let i = 0; i < populations.length; i++){
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
