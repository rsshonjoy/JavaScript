/**----- Static class object -----*/

// class student{
//     constructor(){
//         this.id = 1;
//         this.name = "Shonjoy";
//     }
// }

// const student1 = new student();
// const student2 = new student();

// console.log(student1, student2);


/**----- Dynamic class object -----*/

// class student{
//     constructor(studentId, studentName){
//         this.id = studentId;
//         this.name = studentName;
//     }
// }

// const student1 = new student(18, "Shonjoy");
// const student2 = new student(19, "Joy");

// console.log(student1, student2);


/**----- Dynamic class object default value -----*/

// class Student{
//     constructor(studentId, studentName){
//         this.id = studentId;
//         this.name = studentName;
//         this.school = "Rostom Ali Secondary School"
//     }
// }

// const student1 = new Student(18, "Shonjoy");
// const student2 = new Student(19, "Joy");

// console.log(student1, student2);


/**----- Class Inheritance -----*/

// class Child{
//     constructor(name){
//         this.name = name;
//     }
// }

// const baby = new Child("Raj");
// const baby2 = new Child("Joy");
// console.log(baby);
// console.log(baby2);



class Parent {
    constructor(){
        this.fatherName = "Schwerznegger"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child("Raj");
const baby2 = new Child("Joy");
console.log(baby);
console.log(baby2);