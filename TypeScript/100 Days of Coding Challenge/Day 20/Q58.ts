

function averageGrade (...scores: number[]): number{

    let total = scores.reduce((sum, score) => sum + score, 0);

    return total / scores.length;
}

console.log(averageGrade(34, 55, 89.6, 23));