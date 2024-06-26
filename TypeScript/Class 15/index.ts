


//Abstraction using Abstract Class

// abstract class Animal { //base class or parent class
//     abstract makeSound(); // ke method ka name aayega or implementation nhi aayegi 
//     abstract speed();
//     abstract color:string;
//     isEat:boolean=true;
//     breath(){ //method
//         console.log("this animal is breathing");
//     }
    
// }

// // Inheritance 
// class Lion extends Animal{ //child class
//     color:string;
//     speed(){
//         console.log("speed 100");
//     }

//     makeSound(){ // yaha pe iski body ya implementaion dedi
//         console.log("roar !!!!");
//     }
//     constructor(color:string){
//        super(); 
//         this.color = color;
//     }
// }

// class Cat extends Animal{ //child class
//     color:string = "black";
//     speed(){
//         console.log("speed 20");
//     }

//     makeSound(){ // yaha pe iski body ya implementaion dedi
//         console.log("roar !!!!");
//     }
// }

// let cat1 = new Cat();
// cat1.breath();
// cat1.speed();

// let lion1 = new Lion("orange");
// lion1.makeSound();
// lion1.speed();
// console.log(lion1.color);



//Abstraction using Interface

interface Animal { //100% abstraction
    eat():void; 
    sleep():void;
    walk():void;
    color:string;
}

class Dog implements Animal{
    color:string;
    eat(){
        console.log("dog is eating");
    }
    sleep(){
        console.log("dog is sleeping")
    }
    walk(){
        console.log("dog is walking")
    }
    constructor(color:string){
        this.color = color;
    }
}

let obj1:Dog = new Dog("black");
obj1.sleep();
console.log(obj1.color);
