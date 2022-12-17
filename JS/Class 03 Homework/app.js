// ------ EXERCISE 1 --------
// // Write 4 functions //
// // All functions take 2 parameters and output a result
// // Function that sums 2 numbers
// // Function that subtracts 2 numbers
// // Function that multiplies 2 numbers
// // Function that divides 2 numbers


// // a = parseInt(prompt("A : ", ""));
// // b = parseInt(prompt("B : ", ""));

// // function sums(a, b) {
// //   total = (a + b);
// //   return total
// // }
// // function subtracts(a, b) {
// //   total = a - b;
// //   return total
// // }
// // function multiplies(a, b) {
// //   total = a * b;
// //   return total
// // }
// // function divides(a, b) {
// //   total = a / b;
// //   return total
// // }

// // console.log(sums(a,b))
// // console.log(subtracts(a,b))
// // console.log(multiplies(a,b))
// // console.log(divides(a,b))



// // ---------------STUDENT EXERCISE - #2 --------------------//
// // Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
// // Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
// // Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);

// // let choise = prompt('Please Enter F for farenheit or C for celsius: ')

// // while(choise !== "F" & choise !== "C"){
// //   alert('Please Enter F for farenheit or C for celsius')
// //   choise = prompt('Please Enter F for farenheit or C for celsius: ')
// // }

// // let stepen = parseInt(prompt('Please Enter the degree'))
// // while(isNaN(stepen) ){
// //   alert('Please Enter number value')
// //   stepen = prompt('Please Enter the degree')
// // }

// // if (choise === "F"){
// //   console.log("The tempeture in Celsius will be ",tempetureCelsius(stepen))
// // } else if (choise === "C"){
// //   console.log("The tempeture in Fahremheit will be ",tempetureFahremheit(stepen))
// // }

// // function tempetureCelsius(a){
// //  return a * 1.8 + 32
// // }
// // function tempetureFahremheit(a){
// //   return (5/9) * (a-32)
// //  }
 
// //-------------------------------------------------

// var a = prompt("A : ", "");
// var b = prompt("B : ", "");
// alert(a + "\n" + b);

// // -----------STUDENT EXERCISE - #3
// // THE AGE CALCULATOR
// // Write a function named calculateAge that:
// // takes 2 arguments: birth year, current year.
// // calculates the age based on those years.
// // outputs the result to the screen like so: "You are NN years old"
// // Call the function three times with different sets of values.
// // Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// let dateOfBirth = prompt('Please Enter year of birth')
// let date = new Date
// let year = date.getFullYear()
// while(isNaN(dateOfBirth)){
//     alert('Please Enter number value')
//     dateOfBirth = prompt('Please Enter year of birth')
// }
// function myAge(a){
//   return year - a
// }
// console.log("You are " + myAge(dateOfBirth) + " years old")

//--------------HOMEWORK PART 2-----------------------------
 
// Write a JavaScript function that will return:
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

// dogYears = parseInt(prompt("Please enter the dog years : ", ""));
// humanYears = parseInt(prompt("Please enter the human years : "));

// function multiplies(a)
// {
//  total = a * 7;
//  return total
// }
// function divides(a) {
//  total = a / 7;
//  return total
// }

// console.log(multiplies(dogYears))
// console.log(divides(humanYears))

//----------- HOMEWORK PART 3-----------------//
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

// // function atm(){

// // let valuta = prompt("Please enter mkd or euro");

// // while(valuta!=="mkd" & valuta!=="euro"){
// //   alert('Please choose correct currency');
// //   valuta = prompt("please enter mkd or euro");
// // } 

// // let suma = parseInt(prompt("please enter the amount"));

// // while(isNaN(suma) ) {
// //   alert('please enter the amount');
// //   suma = prompt("please enter the amount");
// // }

// // if (valuta === "mkd" & suma  > 0){
// //   suma = suma * 61.3
// // } 

// // else if(valuta === "euro" & suma  > 0) {
// //   suma = suma / 61.3
// // }

// // let total = suma + " " + valuta
// // return total
// // }

// // let total = atm();
// // console.log("You choose: ", total)

// //---------------------------------


// // let suma = parseInt(prompt("please enter the amount"));
// // if(isNaN(suma)) {
// //   console.log("wtf?")
// // }
// // console.log(suma)


    

// //     function pari(a){
// //     if (a === euro){
// //         return a * 61.3
// //     } else if (a === mkd) {
// //         return a / 61.3
// //     } else if (valuta === null || valuta === ""){
// //         alert("Please enter the correct way")
// //         return ""
// //         valuta()
// //     }
    
// //   }
// // console.log(pari(valuta))

