const describeCountry = (country, population, capitalCity) =>
  `${country} has ${population} million people and its capital city is ${capitalCity}`;

const country1 = describeCountry("Pakistan", 22, "Islamabad");
const country2 = describeCountry("India", 150, "Delhi");
const country3 = describeCountry("Saudi Arabia", 15, "Riyadh");
console.log(`${country1}\n${country2}\n${country3}`);
