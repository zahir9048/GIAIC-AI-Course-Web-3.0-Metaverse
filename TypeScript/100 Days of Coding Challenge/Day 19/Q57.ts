
let grades: number [] = [45, 65, 78, 23, 90];

let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(averageGrade);
