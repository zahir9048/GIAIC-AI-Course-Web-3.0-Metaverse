

// nested object
// let student = {
//     name: 'John',
//     age: 30,
//     teacher: {
//         name: "xyz",
//         age: 30
//     }
// }


// console.log(student.name); // John
// console.log(student.teacher.age); //30


// type alias
type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author; //nesting
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}