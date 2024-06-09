// function func1(a:number, b:number){
//     console.log(a+b);
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(name2, color2) {
        this.name = name2;
        this.color = color2;
    }
    Animal.prototype.eat = function () {
        console.log(this.name, "eating");
        console.log("color:", this.color);
    };
    Animal.prototype.sleep = function () {
        console.log(this.name, "sleeping");
    };
    return Animal;
}());
// jab bhi hum inheritence krte hain to data pass krne ke liye super use krte hain 
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name, color, milk) {
        var _this = _super.call(this, name, color) || this; // super() parent class ka contsructor call krrha hai
        _this.milk = milk;
        return _this;
    }
    cat.prototype.meow = function () {
        console.log(this.name, "moewing");
    };
    return cat;
}(Animal));
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wafadari = true;
        return _this;
    }
    dog.prototype.bark = function () {
        console.log("barking..");
    };
    return dog;
}(Animal));
//                name    color
var c1 = new cat("spiky", "black", 2);
var d1 = new dog("spike", "grey");
d1.bark();
d1.eat();
d1.sleep();
console.log(d1.wafadari);
