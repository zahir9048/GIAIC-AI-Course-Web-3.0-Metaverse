

class Person{
   name:string; //properties
   age:number;
   
   getName(){

   }
   
   constructor(personName:string, personAge:number){
    this.name = personName;
    this.age = personAge;
   }

}

// Inheritance
class Student extends Person{ // student ka parent person hua
    rollNumber:string; //property
    courses:Course[]=[];
    
    registerForCourses(){ //method
        
    }

    constructor(rNum:string,course:Course){  //student constructor
        super("zahir",23); //super function parent class ka cons call krta hai
        this.rollNumber = rNum;
    }
}


class Instructor extends Person{
    salary:number;
    courses:Course[]=[];

    assignCourse(){

    }

    constructor(sal:number, course:Course){
        super("zahir",23);
        this.salary = sal;
    }
}

class Course{
    id:number;
    name:string;
    students:Student[]=[];
    instructors:Instructor[]=[];
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    addStudent(){

    }
    setInstructor(){

    }
}
let c1 = new Course(1, "Blockchain");
let c2 = new Course(2, "TypeScript");
// console.log(c1);
// console.log(c2.name);


let std1 = new Student("121", c1);
let std2 = new Student("122", c2);
console.log(std1);
console.log(std2);






class Department{
    name:string;
    courses:Course[]=[];
    addCourse(){

    }

    constructor(name:string){
        this.name = name;
    }
}
