//Abstraction using Abstract Class
var Dog = /** @class */ (function () {
    function Dog(color) {
        this.color = color;
    }
    Dog.prototype.eat = function () {
        console.log("dog is eating");
    };
    Dog.prototype.sleep = function () {
        console.log("dog is sleeping");
    };
    Dog.prototype.walk = function () {
        console.log("dog is walking");
    };
    return Dog;
}());
var obj1 = new Dog("black");
obj1.sleep();
console.log(obj1.color);
