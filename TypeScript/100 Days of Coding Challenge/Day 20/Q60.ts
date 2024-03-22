
let userProfile = (function() {

    let name = "John";
    let age = 30;

   
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();


userProfile.displayInfo(); 