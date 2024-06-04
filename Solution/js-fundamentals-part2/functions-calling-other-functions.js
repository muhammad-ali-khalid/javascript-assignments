function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world.`;
}
console.log(describePopulation("Pakistan", 220));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Palestine", 100));
