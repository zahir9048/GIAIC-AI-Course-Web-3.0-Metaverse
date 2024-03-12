//Exercise 18
console.log("\nExercise 18");
let travelarray: string[] = ["Mecca", "Paris", "Germany", "London"];

// Print the original order
console.log("\nOriginal Array:");
console.log(travelarray);

console.log("\nImplementing Ascending and Descending operations without changing the original Array...");
// Print the array in alphabetical order (without changing the original array)
console.log("\nArray in Alphabetical Order (Copy):");
console.log(travelarray.slice().sort());

// Verify original array remains unchanged
console.log("\nOriginal array (Unmodified):");
console.log(travelarray);

// Print the array in descending order (without changing the original array)
console.log("\nDescending Order (Copy):");
console.log(travelarray.slice().sort((a, b) => b.localeCompare(a)););

// Verify original array remains unchanged
console.log("\nOriginal array (Unmodified):");
console.log(travelarray);

console.log("\nNow Implementing Ascending and Descending operations by changing the original Array...");
// Changing the array itself in ascending order
travelarray.sort(); // Ascending order
console.log("\nPerforming Ascending Order Operation (Original Array Modified):");
console.log(travelarray);

// Changing the array itself in descending order
console.log("\nOriginal array is modified now:");
console.log(travelarray);
travelarray.sort((a, b) => b.localeCompare(a));
console.log("\nPerforming Descending Order Operation (Original Array Modified):");
console.log(travelarray);
console.log("\nOriginal array is modified now:");
console.log(travelarray);

