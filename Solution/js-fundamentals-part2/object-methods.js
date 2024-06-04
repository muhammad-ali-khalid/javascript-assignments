const myCountry = {
  country: "Pakistan",
  capital: "Islamabad",
  language: "urdu",
  population: 200,
  neighbours: ["China", "India", "Iran", "Afghanistan"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsIsland: function () {
    if (this.neighbours.length == 0) return true;
    else return false;
  },
};
myCountry.describe();
console.log(myCountry.checkIsIsland());
