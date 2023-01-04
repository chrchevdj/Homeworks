console.log(`------- EXERCISE 1 ---------`);
// EXERCISE 1
// Declare and initialize a variables of every type that we learned so far. Print each of them in a console or alert()!

// let a1 = typeof "John";
// let a2 = typeof 3.14;
// let a3 = typeof false;
// let a4 = typeof [1, 2, 3, 4];
// let a5 = typeof -1.5;
// let a6 = typeof function () {};
// let a7 = typeof myCar;
// let a8 = typeof nullVar;
// console.log(a1, a2, a3, a4, a5, a6, a7, a8);

console.log(`------- EXERCISE 2 ---------`);
// EXERCISE 2
// Read 5 variables as user input and then print each of the variable types in the console.

// let user1 = "John";
// let user2 = 3.14;
// let user3 = false;
// let user4 = [1, 2, 3, 4];
// let user5 = new Date();
// console.log(
//   typeof user1,
//   typeof user2,
//   typeof user3,
//   typeof user4,
//   typeof user5
// );

console.log(`------- EXERCISE 3 ---------`);
// EXERCISE 3
// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.
// Make sure you use a function!
// Ex. Input: 20 ==> Output: 14

// let userInput = parseInt(prompt("please enter number"));
// console.log(`User input is ${userInput}`);

// function diference() {
//     let i = 13;
//     if (userInput > i) {
//         return (userInput - i) * 2
//     } else if (userInput <= 13) {
//         return "The number is not bigger then 13"
//     }
// }
// console.log(diference())

console.log(`------- EXERCISE 4 ---------`);
// EXERCISE 4
// Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!
// Make sure you use a function!
// Ex. Input1: 20
// Input2: 80
// Output: 80 is closer to 100

// function closer() {
//   let target = 100;
//   let input1 = parseFloat(prompt());
//   let input2 = parseFloat(prompt());

//   if (input1 < 0 || input2 < 0) {
//     alert("Negative Value is not allowed");
//   } else if (target - input1 < target - input2 && input1 !== 0) {
//     return `${input1} is closer to ${target}`;
//   } else (target - input2 < target - input1) {
//     return `${input2} is closer to ${target}`;
//   }
// }
// console.log(closer());

console.log(`------- EXERCISE 5 ---------`);
// EXERCISE 5
// Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.

// let salary = 1000;
// let bills = 250;
// let rent = 375;
// let total = salary - bills - rent;
// document.getElementById("exercise5").innerHTML = "The remaining from the salary is " + total;

console.log(`------- EXERCISE 6 ---------`);

// EXERCISE 6
// One student has 5 exams in the first semester. His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not!

console.log(`------- Way 1 ---------`);

// function studentPassing(gradesArray) {
//   let sum = 0;
//   for (let i = 0; i < gradesArray.length; i++) {
//     sum += gradesArray[i];
//   }
//  let average = sum / gradesArray.length;
//   return average;
// }
// let studentGrades1 = [10, 116, 25, 9, 6];
// let passedornot1 = studentPassing(studentGrades1)

// if(passedornot1>=8){
//   alert(`You have passed`)
// }else {
//   alert(`You have failed`)
// }

console.log(`------- Way 2 ---------`);

// let array =  [10, 6, 8, 9, 6];
// let result = array.reduce((a, b) => {
//   return a + b;
// });
// console.log(result);
// let average = result / array.length
// console.log(average)
// passingscore = 8;
// if(average <br passingscore){
//     alert("you need to study more")
// }else if(average > 8){
//     alert("you pass")
// }

console.log(`------- EXERCISE 7 ---------`);
// EXERCISE 7
// Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.

arr = ["Hello world", false, 25, true, null, 20 + 10, NaN, undefined];

function removeFa(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(removeFa(arr));

console.log(`------- EXERCISE 8 ---------`);
// EXERCISE 8
// Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!
// ex: storyTeller(who, what, when);
// In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Example: Lancelot was a really strong knight in the middle age!")
console.log(`------- EXERCISE 9 ---------`);
// EXERCISE 9
// Write a JavaScript programm called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering an appropriate values in the fields!
// Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or construcotr function its up to you) and add it to an array!
console.log(`------- EXERCISE 10 ---------`);
// EXERCISE 10
// Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array.
// Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text! Try making the ToDo an object that needs to have two properties: Name and isCompleted properties
