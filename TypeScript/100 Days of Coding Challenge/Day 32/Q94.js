function returnLengthOfWords(arr) {
    var newArr = arr.map(function (word) { return word.length; });
    return newArr;
}
var arr = ["Hello", "World", "TypeScript", "JavaScript"];
var lengthOfWords = returnLengthOfWords(arr);
console.log(lengthOfWords);
