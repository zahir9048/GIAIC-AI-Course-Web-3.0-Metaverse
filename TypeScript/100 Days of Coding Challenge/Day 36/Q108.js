function checkIdenticalString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(checkIdenticalString("Hello", "hello"));
console.log(checkIdenticalString("hello", "hello"));
console.log(checkIdenticalString("Help", "hello"));
