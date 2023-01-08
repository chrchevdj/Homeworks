console.log(`---STUDENT EXERCISE - #1---`)
/*MANIPULATE THE DOM
Select the first div
Select all paragraphs
Select the last div
Select the header 3 in the last div
Select the header 1 in the last div
Get the text from the first paragraph in the second div
Add the word "text" to the text element in the second div
Change the text of the header 1 in the last div
Change the text of the header 3 in the last div
Note:You can't change the HTML*/

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



