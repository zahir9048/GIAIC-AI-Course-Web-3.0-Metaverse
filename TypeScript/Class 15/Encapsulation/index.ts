
// // Encapsulation
// class Animal { // base class or parent class
//     //Access Modifiers
//     protected name:string; // data properties
//     age:number;
//     private _color:string;
//     constructor(name:string, age: number, color: string){
//         this.name = name;
//         this.age = age;
//         this._color = color;
//     }
//     displayInfo(){ // methods (by default public)
//         console.log("Animal Name: " + this.name);
//         console.log("Animal age: " + this.age);
//         console.log("Animal color: " + this._color);
//     }   

//     //getter methods
//     get Name(){
//         return this.name;
//     }
//     get Age(){
//         return this.age;
//     }
//     get Color(){
//         return this._color;
//     }

//     //setter methods
//     set setName(name:string){
//         this.name = name;
//     }

//     set setAge(age:number){
//         this.age = age;
//     }

//     set setColor(color:string){
//         this._color = color;
//     }

// }
// // Inheritance
// class Cat extends Animal{ // child class or subclass
//     displayName(){ 
//         console.log("Animal Name: " + this.name);
//     }
//     constructor(name:string, age:number, color:string){
//         super(name, age, color);
//     }
// }


// let obj = new Animal("dog", 10, "white");
// // obj.displayInfo();
// obj.age = 9;

// //getter methods call
// console.log(obj.Name);
// console.log(obj.Age);
// console.log(obj.Color);


// //setter methods call
// obj.setName = "cat";
// obj.setAge = 5;
// obj.setColor = "orange";

// //getter methods call
// console.log(obj.Name);
// console.log(obj.Age);
// console.log(obj.Color);


class Car{
    private _fuel:number
    private _engineStart:boolean

    constructor(fuel:number, engineStart:boolean)
    {
        this._fuel = fuel
        this._engineStart = engineStart
    }

    get fuel():number{
        return this._fuel
    }

    /**
     * The `startEngine` function checks if there is enough fuel to start the engine and logs a message
     * accordingly.
     */
    startEngine(){
        if(this._fuel>0)
        {
            this._engineStart = true
            console.log("Engine started")
        }
        else
        {
            console.log("Can not start engine, no fuel")
        }
    }

    /**
     * The `drive` function in TypeScript decreases fuel by 10 units if the engine is started and there
     * is fuel, otherwise it prompts to start the engine.
     */
    drive(){
        if(this._engineStart && this._fuel>0)
        {
            this._fuel=this._fuel-10;
            console.log("Car is running")
        }
        else
        {
            console.log("Start the engine first")
        }
    }

    /**
     * The `stopEngine` function checks if the engine is running and stops it if it is, displaying the
     * current fuel level in the tank.
     */
    stopEngine()
    {
        if(this._engineStart)
        {
            this._engineStart = false
            console.log("engine stopped")
            console.log("current fuel in tank is",this._fuel)
        }
        else
            console.log("engine is already stopped")
    }
}

let car:Car = new Car(100, false)
car.startEngine()
car.drive()
car.drive()
car.drive()
car.stopEngine()