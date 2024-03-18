
function hobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}

hobbies("Fitness", "Cooking"); // returns "Hello Steve, Bill!"
hobbies("Swimming");
