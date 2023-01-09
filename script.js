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


function displaySum(){
    let a = 20
    let b = 22
    
    let sum = a + b
    console.log(sum)
}

displaySum()

function welcome(name) {
    console.log("Hey "+""+name+" "+"welcome to PLP");
  }
   
  // Passing arguments
  welcome("Evans");

  function add(a, b){
    return a+b ;
    // The return statement stops the execution of a function and returns a value
  }
  console.log(add(5, 4))