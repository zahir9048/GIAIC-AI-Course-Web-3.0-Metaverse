class Person{
   name:string; //properties
   age:number;
   
   constructor(personName:string, personAge:number){
    this.name = personName;
    this.age = personAge;
   }
}

// Inheritance using word "extends"
class Student extends Person{ // student ka parent person hua
    rollNumber:string; //property
    courses:string[]=[]; //different array
    
    registerForCourses(course:Course){ //method
        this.courses.push(course.name);
    }

    constructor(name:string, age:number, rNum:string){  //student constructor
        super(name, age); //super function parent class ka cons call krta hai
        this.rollNumber = rNum;
    }

    getListOfCourses(){
        console.log("STudent "+this.name + " Courses: ");
        this.courses.forEach(element => {
            console.log(element);
        });
    }
}


class Instructor extends Person{
    salary:number;
    courses:string[]=[];

    assignCourse(course: Course){
        this.courses.push(course.name);
    }

    getListOfCourses(){
        console.log("Instructor "+ this.name + " Courses: ");
        this.courses.forEach(element => {
            console.log(element);
        });
    }

    constructor(name:string, age:number, sal:number){
        super(name, age);
        this.salary = sal;
    }
}

class Course{
    id:number;
    name:string;
    students:Student[]=[]; //array
    instructors:Instructor[]=[];
    static allCourses:string[]=[];
    
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
        Course.allCourses.push(name);
    }
    addStudent(std:Student){ //student ka object pass krna hoga
        this.students.push(std);
    }
    setInstructor(ins:Instructor){
        this.instructors.push(ins)
    }

    getListOfStudents(){
        console.log(this.name + " Students: ");
        this.students.forEach(element => {
            console.log(element.name);
        });
    }

    getListOfInstructors(){
        console.log(this.name + " Instructors: ");
        this.instructors.forEach(element => {
            console.log(element.name +" " + element.age);
        });
    }

    static displayAllCourses(){
        console.log("All the courses: ");
        Course.allCourses.forEach(element => {
            console.log(element);
        });
    }


}
let c1 = new Course(1, "Blockchain"); // 2 students enrolled
let c2 = new Course(2, "TypeScript"); // 1 student enrolled
let c3 = new Course(3, "AI"); // 0 student enrolled


// console.log(c1);
// console.log(c2.name);

let ins1 = new Instructor("Hamza", 25, 90000);
let ins2 = new Instructor("Ameen", 26, 90000);

c1.setInstructor(ins1);
ins1.assignCourse(c1);

c2.setInstructor(ins1);
ins1.assignCourse(c2);

c2.setInstructor(ins2);
ins2.assignCourse(c2);

ins1.getListOfCourses();
ins2.getListOfCourses();

let std1 = new Student("zahir", 23, "121");
let std2 = new Student("zaid", 26, "122");


c1.addStudent(std1);
std1.registerForCourses(c1);

c1.addStudent(std2);
std2.registerForCourses(c1);

c2.addStudent(std1);
std1.registerForCourses(c2);

std1.getListOfCourses();
std2.getListOfCourses();

Course.displayAllCourses();


// c1.getListOfStudents();
// c2.getListOfStudents();

// c1.getListOfInstructors();
// c2.getListOfInstructors();



class Department{
    name:string;
    courses:string[]=[];
    static allDepartments:string[] = [];

    addCourse(course: Course){
        this.courses.push(course.name);
    }

    getCourses(){
        this.courses.forEach(element => {
            console.log(element);
        });
    }

    constructor(name:string){
        this.name = name;
        Department.allDepartments.push(this.name);
    }

    static displayAllDepartments(){
        console.log("\nAll Departments are: ");
        Department.allDepartments.forEach(element => {
            console.log(element);
        });
    }
}

let d1 = new Department("Computer Science")
let d2 = new Department("SE")

d1.addCourse(c1);
d1.addCourse(c2);

d2.addCourse(c1);

Department.displayAllDepartments();
