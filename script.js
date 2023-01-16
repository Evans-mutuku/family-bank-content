// document.write("Hello world")

const test = document.getElementById("test")

test.innerHTML = "Hello world"



const getEl = document.querySelectorAll("p.intro")
document.getElementById("demo").innerHTML = `My first name is ${getEl[0].innerHTML} and my second name is ${getEl[1].innerHTML}`


const newItem = document.createElement("h1")
const headingOne = document.createTextNode("This is H1 text")

newItem.appendChild(headingOne)

const printToDom = document.getElementById("newElement")

printToDom.appendChild(newItem)