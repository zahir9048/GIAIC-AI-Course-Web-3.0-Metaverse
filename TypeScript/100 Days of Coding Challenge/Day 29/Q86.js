function isPresent(sentence) {
    var present = sentence.indexOf("code") !== -1;
    return present;
}
var sentence2 = "i love to code";
console.log(isPresent(sentence2));
