

function positionOfString(sentence:string) : number{
    let position = sentence.indexOf("code");
    return position;
}


let  sentence = "i love to code";

console.log(positionOfString(sentence));