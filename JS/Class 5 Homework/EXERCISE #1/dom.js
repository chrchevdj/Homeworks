console.log(document)
let firstDiv = document.querySelector("div")
console.log(firstDiv)

let paragraphs = document.getElementsByTagName("p")
let paragraphsByQuery = document.querySelectorAll("p")
console.log(paragraphs)
console.log(paragraphsByQuery)

let lastElement = document.getElementsByTagName("body")[0].lastElementChild
console.log(lastElement)
let lastDiv = lastElement.previousElementSibling
console.log(lastDiv)
let header3last = lastDiv.getElementsByTagName("h3")[0]
console.log(header3last)
let header1last = lastDiv.getElementsByTagName("h1")[0]
console.log(header1last)

let paragraphSecondText = document.getElementsByClassName("second")[0].innerText;;
console.log(paragraphSecondText)
document.querySelector("text").innerText += " text!";
console.log(paragraphSecondText)
header1last.innerText = "Text changed"
header3last.innerText = "text changed again"
console.log(header1last)
console.log(header3last)



