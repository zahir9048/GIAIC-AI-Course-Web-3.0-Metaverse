//overloads give us type-checked calls
//this is not part of the overload list, 
//so it has only three overloads
function add(arg1, arg2, arg3) {
    if (typeof arg1 == "number" && typeof arg2 == "number") {
        return arg1 + arg2;
    }
    else if (typeof arg1 == "string" && typeof arg2 == "string" && typeof arg3 == "string") {
        return arg1 + arg2 + arg3;
    }
    else if (typeof arg1 == "boolean" && typeof arg2 == "boolean") {
        return arg1;
    }
}
//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", " World", " hi"));
console.log(add(true, false));
