let students = {
    name: "Arif",
    rollNo: 12,
    class: "10th",
    Department: "Computer Science"
}

// Dot Notation 

// console.log(students.rollNo);
// console.log(students['rollNo']);


let student1 = {
    name:"Tahir",
    rollNo:33,
    deportment:"Cs",
    Semester : "6th",
    Totalmarks:790,
    marks:{
        math:57,
        Science:44,
    }
}

// console.log(student1.Totalmarks);
// console.log(student1.marks.Science);
// console.log(student1["Totalmarks"]);
// console.log(student1["marks"]["math"]);
let student2 = {
    name:"Tahir",
    rollNo:33,
    deportment:"Cs",
    Semester : "6th",
    Totalmarks:790,
    marks: function(){  // methods 
        console.log(`my name is ${this.name} my rollNo is ${this.rollNo} and my semester is ${this.Semester}`)
    }
}

student2.marks();
// console.log(student2["marks"])