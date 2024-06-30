
// Method overloading-> same name method, params different (count, data type of params different)
// Method Overriding -> Same name of method and same params with same count
class Animal { //parent class
    eat(param:string){
        console.log("animal is "+ param);
    }
}

class Dog extends Animal{ //child classes (subclasses)
    eat(param:string){
        console.log("dog is eating "+ param);
    }
}

class Cat extends Animal{ //child classes (subclasses)
    eat(param:string){
        console.log("cat is eating "+ param);
    }
} 

let animal1 = new Animal();
animal1.eat("eating");

let d1 = new Dog();
d1.eat("bones");

let c1 = new Cat();
c1.eat("chicken");

