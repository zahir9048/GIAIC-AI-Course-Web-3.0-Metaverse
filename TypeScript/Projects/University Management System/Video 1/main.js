var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }
    Person.prototype.getName = function () {
    };
    return Person;
}());
// Inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(rNum, course) {
        var _this = _super.call(this, "zahir", 23) || this; //super function parent class ka cons call krta hai
        _this.courses = [];
        _this.rollNumber = rNum;
        return _this;
    }
    Student.prototype.registerForCourses = function () {
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(sal, course) {
        var _this = _super.call(this, "zahir", 23) || this;
        _this.courses = [];
        _this.salary = sal;
        return _this;
    }
    Instructor.prototype.assignCourse = function () {
    };
    return Instructor;
}(Person));
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    Course.prototype.addStudent = function () {
    };
    Course.prototype.setInstructor = function () {
    };
    return Course;
}());
var c1 = new Course(1, "Blockchain");
var c2 = new Course(2, "TypeScript");
// console.log(c1);
// console.log(c2.name);
var std1 = new Student("121", c1);
var std2 = new Student("122", c2);
console.log(std1);
console.log(std2);
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    Department.prototype.addCourse = function () {
    };
    return Department;
}());
