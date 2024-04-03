let laptop = {
  make: "HP",
  model: "Core i-5th Gen",
  year: 2016,
};

for (let property in laptop) {
  console.log(`${property}: ${laptop[property]}`);
}
