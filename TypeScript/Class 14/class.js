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
var House = /** @class */ (function () {
    function House(name, doors, number, NIC) {
        this.ownerName = name;
        this.numberOfDoors = doors;
        this.houseNumber = number;
        this.ownerCNIC = NIC;
    }
    return House;
}());
// let h1 = new House("Zahir", 5, 3,  56546546);
// let h2 = new House("Ramish", 6, 4, 56565656);
// // let h2 = new House("");
// // Date is a class
// h2.houseNumber = 54321;
// // h2.ownerCNIC = 54321; //cannot change NIC number
// console.log(h1);
// console.log(h2.ownerCNIC);
// console.log(h2);
// console.log(this);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log("walking");
    };
    Animal.prototype.eat = function () {
        console.log("eating");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // name: string;
    // constructor(name:string){
    //     this.name = name
    // }
    Dog.prototype.woof = function () {
        console.log("woof woof");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        console.log("meow meow");
    };
    return Cat;
}(Animal));
// let d1 = new Dog("tommy");
// let d2 = new Dog("spike");
var c1 = new Cat();
var d3 = new Dog();
d3.eat();
