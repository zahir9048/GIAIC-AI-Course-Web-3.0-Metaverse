function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Alice");
greetUser();
