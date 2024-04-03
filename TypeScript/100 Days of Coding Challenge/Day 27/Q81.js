var laptop = {
    make: "HP",
    model: "Core i-5th Gen",
    year: 2016,
};
for (var property in laptop) {
    console.log("".concat(property, ": ").concat(laptop[property]));
}
