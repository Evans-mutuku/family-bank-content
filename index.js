
// This is a human value

let name = "John"
var age = 55
const gender = "Male"
let programmer = true 
let experience = null
let status = undefined

console.log("Hello world, This is Javascript")


console.log(gender)
console.log(experience)
console.log(status)

console.log(name, age, programmer)

const person = { 
    height: 67, 
    weight: 89, 
}

console.log(person)
console.log(person.height)

const students = ["John", "Jane", "Grace", "Mark", 33, true]

console.log(students)
console.log(students[2])








var age = 19;

// if(age < 18){
//     console.log("Not Allowed to vote")
// }



if(age < 18){
    console.log("Not Allowed to vote")
} else{
    console.log("You Allowed to vote")
}


var marks = 74;

if(marks < 40){
    console.log("Fail")
} else if(marks < 50){
    console.log("Pass")
} else if(marks < 60){
    console.log("Credit")
} else if(marks > 70){
    console.log("Distinction")
} else{
    console.log("No Applicable")
}


let x = 1;

while(x <= 4){

    console.log("Value of X: " + x)
    x++
}



for(let y = 3; y <= 5; y++){
    console.log("The value of Y:", y)
}

let i = 1;
do{
    console.log("Value of i: ", i)
    i++
} while ( i < 20)


// function displaySum(){
//     let a = 20
//     let b = 22
    
//     let sum = a + b
//     console.log(sum)
// }

// displaySum()

// function welcome(name) {
//     console.log("Hey "+""+name+" "+"welcome to PLP");
//   }
   
//   // Passing arguments
//   welcome("Evans");

//   function add(a, b){
//     return a+b ;
//     // The return statement stops the execution of a function and returns a value
//   }
//   console.log(add(5, 4))

//   const myFunction = () => {
//     console.log("Hello world, This is an arrow function")
//   }

//   myFunction()