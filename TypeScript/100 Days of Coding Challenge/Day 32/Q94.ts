

function returnLengthOfWords(arr:string[]){
    let newArr:number[] = arr.map((word) => word.length);
    return newArr;
}


let arr:string[] = ["Hello", "World", "TypeScript", "JavaScript"];

let lengthOfWords:number[] = returnLengthOfWords(arr);
console.log(lengthOfWords);