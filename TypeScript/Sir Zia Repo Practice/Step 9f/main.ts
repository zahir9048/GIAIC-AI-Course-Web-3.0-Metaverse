//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific

//overloading signatures
function add(arg1: string, arg2: string, arg3?: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3


//this is not part of the overload list, 
//so it has only three overloads


function add(arg1: any, arg2: any, arg3?: string): any {
    if(typeof arg1 == "number" && typeof arg2 == "number"){
        return arg1 + arg2;
    }
    else if(typeof arg1 == "string" && typeof arg2 == "string" && typeof arg3 == "string"){
        return arg1 + arg2 + arg3;
    }
    else if(typeof arg1 == "boolean" && typeof arg2 == "boolean"){
        return arg1;
    }
}




//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", " World", " hi"));
console.log(add(true, false));