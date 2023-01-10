function countRabbits() { 
    for(let i=1; i<=3; i++) { 
        alert("Rabbit number " + i); 
    } 
}

function CountStars() {
    for(let i=2; i<10; i++){
        alert("Stars number " + i); 
    }
}
let elem = document.getElementById("btnHello")
elem.onclick = function() {
    alert("Hello")
}
let click = document.getElementById("djoko")
click.onclick = function(){
    alert("Go napravih")
}
let countRabbits1 = document.getElementById("test")
countRabbits1.onclick = function(){
    for(let i=1; i<=3; i++) { 
        alert("Rabbit number " + i);
    }
}
var elem1 = document.getElementById("username");				

elem1.addEventListener("blur", function(event){
    var greeting = `Hello ${event.target.value}`;
    alert(greeting);
});

let exersice =document.getElementById("exersice")
exersice.onclick = function(){
    alert("Hello Djoko")
}
var elem2 = document.getElementById("redDiv");	
function setColorToDiv(event){
    event.target.style.backgroundColor = "red";
}			
elem2.addEventListener("mousemove",setColorToDiv);
elem2.removeEventListener("mousemove", setColorToDiv);

let input = document.getElementById("name");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
 // gets the value
 console.log(`Somebody entered the name: ${input.value}`);
 // changes the value to empty string
 input.value = "";
})

let myParagraph = document.getElementById("myParagraph")
let btn1 = document.getElementById("myBtn")

function changeElement(element){
    element.style.color = "red"
    element.style.backgroundColor = "yellow"
    element.style.fontSize = "34px"
}
btn1.addEventListener("click", function(){
    changeElement(myParagraph)
})

