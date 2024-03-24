


function findRemainderAndQuotient(values: { dividend: number; divisor : number }) : { quotient: number; remainder: number } {
    let remainder = values.dividend % values.divisor;    


    let quotient = Math.floor(values.dividend / values.divisor);
    return { quotient, remainder };  
}

let dividend:number = 5;
let divisor:number = 2;

console.log("Dividend: "+ dividend + " Divisor: "+ divisor);
console.log(findRemainderAndQuotient({ dividend, divisor }));
