
// Method overloading
class Example{

    add(num1:number, num2:number):number; //signatures
    add(val:string, val2:string):string;
    add(number1:number, number2:number, number3:number):number;
    
    add(num1:number | string, num2: number | string, num3?:number):any{ //implmentation

        if(typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number"){
            return num1 + num2 + num3; //add 3 numbers
        }
        else if(typeof num1 === "string" && typeof num2 === "string"){
            return num1 + num2; //concatenation
        }
        else if(typeof num1 === "number" && typeof num2 === "number"){
            return num1 + num2; //add 2 numbers
        }
    }
    
}

let obj = new Example;
let result = obj.add(4, 6);
console.log(result);

let result2 = obj.add(4, 6, 10);
console.log(result2);

let result3 = obj.add("hello", "world");
console.log(result3);
