
// function func1(a:number, b:number){
//     console.log(a+b);
// }

// func1(1, 2); //3

// class house{ //blueprint of creating objects
//     ownerName:string; //properties = state
//     readonly houseNumber:number;
//     rooms!:number;
//     method1(){  //method 1  -> behavior
//         console.log(`owner name: ${this.ownerName}`);
//     }
//     method2(){ //method 2 
//         console.log("inside method2");
//     }

//     constructor(name:string, hNumber:number, rooms:number){
//         this.ownerName = name; //kamran
//         this.houseNumber = hNumber; 
        
//     }

// }

// let h1 = new house("kamran", 12345, 3);


// // h1.houseNumber = 54441;
// console.log(h1.ownerName)


// h2.method1();

// console.log(h1.ownerName);
// console.log(h1.houseNumber);
// console.log(h1.rooms);

// console.log(h2);


// h1.ownerName

// let h2 = new house();


// h1.method1();

// console.log(h1.ownerName);
// console.log(h2.rooms);


//inheritence

// class Animal { //parent class
//     name:string; // 2 properties
//     color:string;
//     eat(){  // 2 methods
//         console.log(this.name, "eating");
//         console.log("color:", this.color);
//     }
//     sleep(){
//         console.log(this.name, "sleeping");
//     }

//     constructor(name2:string, color2:string){
//         this.name = name2;
//         this.color = color2;
//     }
// }
// jab bhi hum inheritence krte hain to data pass krne ke liye super use krte hain 
// class cat extends Animal{ //child class
//     milk:number;
//     meow(){
//         console.log(this.name, "moewing")
//     }

//     constructor(name:string, color:string, milk:number){
//         super(name, color); // super() parent class ka contsructor call krrha hai
//         this.milk = milk;
//     }
// }

// class dog extends Animal{ //child class
    
//     wafadari:boolean = true;
    
//     bark(){
//         console.log("barking..")
//     }
// }


//                name    color
// let c1 = new cat("spiky","black",2);
// let d1 = new dog("spike", "grey");

// d1.bark();
// d1.eat();
// d1.sleep()
// console.log(d1.wafadari);