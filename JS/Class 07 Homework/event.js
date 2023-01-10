// EXERCISE 1
// Create a JavaScript object that will describe you.
// Include at least 5 properties, including a string, a number and a boolean

// EXERCISE 2
// Update the values of the object you've created to represent one of your class mates

let me ={
    nameF: "Djoko",
    lastN: "Chrchev",
    age: 37,
    sex: "M",
    travelToTheMoon: false,
}
console.log(me)
me.car = "Skoda",
delete me.sex
me.nameF = "Hercules"
me.lastN = "Bu"
me.age = 1000
console.log(me)

// EXERCISE 3
// Write a JavaScript program to delete the lecture property from the following object. Add a property age to the object. Add a method getFullName that returns the full name ( First Name and Last name )
// Sample object:
// let trainer = { 
// 	name :  "Stefan",
// 	lastName: "Stefanovski",
// 	academy: "SEDC",
// 	lecture: "Objects"
// }

let trainer = { 
    name :  "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects",
}
delete trainer.lecture
trainer.age = 50;
trainer.getFullName = function() {
    return this.name + " " +  this.lastName
}

// EXERCISE 4
// Create a car object with some properties model, color, year, fuel, fuelConsumption and a method that calculate how much fuel you will need to pass some distance.

let car = {
    model: "skoda",
    color: "white",
    year: 2018,
    fuel: "Benzin",
    fuelConsumption: 7,
  
}
let distance =prompt();

car.cost = function(){
    return (this.fuelConsumption * distance) / 100
}
console.log(car.cost())

// EXERCISE 5
// Create a student registry form. The form should have:
// First Name
// Last Name
// Age
// The form should have a save button which will create a student object and add it to an array (students). Log the array after every save to see the results in the console.
// Bonus: Make the students appear in an unordered list in the page.


let students = [];
function Student(first, last, age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

function showStudents(studentsArr, element){
  element.innerHTML = "";
  for (let student of studentsArr) {
    element.innerHTML += `<li><b>Name:</b> ${student.firstName} ${student.lastName}, 
    <b>Age:</b> ${student.age}</li>`;
  }
}

let studentForm = document.getElementById("studentForm");
let result = document.getElementById("result1");

studentForm.getElementsByTagName("button")[0].addEventListener("click", function(){
  let first = studentForm.children[0].value;
  let last = studentForm.children[1].value;
  let age = studentForm.children[2].value;
  let newStudent = new Student(first, last, age);
  students.push(newStudent);
  showStudents(students, result.getElementsByTagName("ul")[0]);
  studentForm.children[0].value = "";
  studentForm.children[1].value = "";
  studentForm.children[2].value = "";
});

// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

let animal = {
    name: "Hey",
    kind: 
}