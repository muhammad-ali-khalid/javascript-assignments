let populations = [1441, 220, 500, 250];
if (populations.length == 4) console.log(true);
else console.log(false);
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let percentages = new Array();
percentages.push(percentageOfWorld1(populations[0]));
percentages.push(percentageOfWorld1(populations[1]));
percentages.push(percentageOfWorld1(populations[2]));
percentages.push(percentageOfWorld1(populations[3]));
console.log(percentages);
