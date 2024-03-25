


let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26

// Trying to reassign a `const`-declared variable
const Name = "Alice";
try {
    Name = "Bob"; // This line will cause an error becuase const does not allow reassigning of the variable
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}