// Arrays 
// Array decelaration 
let languages = ["javascript","Java","C++","Python","Ruby",true,23,{name:'sajid',age:23}];
console.log("length of Array ",languages.length);
languages.push('C#')
console.log("NEW ARRAY " ,languages);
languages.pop();
console.log("Delete end elements of array " ,languages);
languages.shift();
console.log("Delete first element of array ", languages );
languages.unshift(786)
console.log("Add first element ", languages);

console.log(languages[10]);

let oldNumber = [1,3,5,7,9];
let primenumber = [1,1,2,4,6,8,10];
let concate = oldNumber.concat(primenumber);
console.log("add two arrays ",concate);

console.log("index of ",primenumber.indexOf(10));
function isEvent(elements) {
    return elements %2 == 0;
}
console.log("find method ",primenumber.find(isEvent));

// console.log(typeof languages);
// //length 
//  console.log(languages.length);

//Push method
//  let pushValueArray = languages.push("C#");
//  console.log(pushValueArray);
//  console.log(languages)
// unShift() method;

// let unShiftMethod = languages.unshift("Go");
// console.log(languages);

//Pop() method(); last element of Array deleted
// let popMethod = languages.pop();
// console.log(languages);

// shift method first element of array deleted

// let shift = languages.shift();
// console.log(languages);


// console.log(languages[1]);


// ------------Assignments work 
// 1) concate
// let primenumbers = [1,3,5,7];
// let evennumbers = [0,2,4,6,8];
// let concatArray = primenumbers.concat(evennumbers);
// console.log(concatArray);

// 2) IndexOf // Always return first index if not found return -1;

// let languages= ['javascript','C++','Python','C#']
// let index = languages.indexOf('C#',0);
// console.log(index);

// 3) find();

// let team = [
//     {name:"Arif",age:20},
//     {name:"Saqlain", age:30},
//     {name:"Yaseen", age: 15},
//     {name:"Zeeshan", age: 17},
//     {name:"fayaz", age: 18},
// ]

// function isAdult(member) {
// return member.age>=18;
// }
// let searchAdult = team.find(isAdult); 
// console.log(searchAdult);
// //  -------- 2nd Example 
// let Array2 = [1,3,4,5,6,7,8,9];
// function isEvent(elements) {
//     return elements %2 == 0;
// }

// console.log(Array2.find(isEvent))

// 4) findIndex 
// function oldNumber1(element) {
//     return element %2!==0;
// }
// let finIndexarray = [8,4,3,4];
// console.log("findIndex ", finIndexarray.findIndex(oldNumber1));

// 5) forEach() method 

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

let students = [
    {
        id:1
        name: 'Altaf',
        age: 12,
        rollNo:24,
        class:'10th'
    },
    {
        name: 'Sadiq',
        age: 18,
        rollNo:20,
        class:'9th'
    },
    {
        name: 'Latif',
        age: 23,
        rollNo:21,
        class:'10th'
    },
]

// function callBackfunction(elements) {
//     console.log("forEach loop", elements*elements);
// }
// array.forEach(callBackfunction);

// array.forEach(elements=> console.log("Arrow function ", elements*elements));

array.map((items,index)=>{
    console.log(`${index} ---> ${items}`);
})
// ----- 2nd method 

// array.forEach(element => {
//     console.log(element * element)
// });

// 6) Map founction 

// array.map((element, id) => {
//     console.log(id, element * element);
// })

// 7) Includes method 

let progrLanguages = ['javascript', 'java', 'c++', 'c#', 'python'];

console.log(progrLanguages.includes('c++'));
console.log(progrLanguages.includes('Go'));

// 8) Sort() method ascending or decending order

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// numbers.sort();
// or 
numbers.sort(function (a, b) { // ascending order
    return (a - b);

})

// console.log(numbers);

numbers.sort(function (a, b) {
    return b - a;
})
console.log(numbers);

let names = ['latif', 'Mazahir', 'kazim', 'Muhammad', 'ali']

names.sort((a, b) => a.length - b.length);
console.log(names);

// 9) slice method  return copy of array 

let progLang = ['c++', 'java', 'python', 'script', 'Go', 'javascript', 'typescript'];

let sliceAry1 = progLang.slice(4);
let sliceAry2 = progLang.slice(2, 6);
console.log("with put simple (1) index ", sliceAry1);
console.log("with put index (@,*) ", sliceAry2);

//10 splice method 
let spliceLang = ['c++', 'java', 'python', 'script', 'Go', 'javascript', 'typescript'];
let remove45 = spliceLang.splice(4, 3, 'c#', 'Gyngo', 'php');
console.log(spliceLang);
console.log(remove45);

// let nameofStudents = [
//     {
//         name: 'Sajid ali',
//         age: 23,
//         class: '10th'
//     },
//     {
//         name: 'ali',
//         age: 20,
//         class: '9th'
//     },
//     {
//         name: 'Mohd',
//         age: 20,
//         class: '9th'
//     },
// ]
// naturalNumber.forEach(element => {
//     console.log(element*5);
// });

// nameofStudents.map((element, id) => {
//     if(element.age>=18) {
//         console.log("Eligible for vote ", element.age);
//     }
// })