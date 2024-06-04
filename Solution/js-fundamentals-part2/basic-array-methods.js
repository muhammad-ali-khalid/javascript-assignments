let neighbours = ["China", "India", "Iran", "Afghanistan"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country :D");
else console.log("A central European country");
neighbours[0] = "Palestine";
console.log(neighbours);
