console.log(`---HOMEWORK #1---`);
/*
Create a function called tellStory()
The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
The function should return one big string with a story made from the arguments
Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
The value that is returned from the function should be printed in the console or in alert
*/

function tellStory(arr) {
  let i = 0;
  let result = `This is ${arr[i]} . ${arr[i]} is a nice person.`;
  i++;
  result = result + `Today they are ${arr[i]}.`;
  i++;
  result = result + `They are ${arr[i]} all day. The end`;
//   while (i < arr.length) {
//     if (i === 1) {
//       result = result + `Today they are ${arr[i]}.`;
//     }
//     if (i === 2) {
//       result = result + `They are ${arr[i]} all day. The end`;
//     }
//     i++
//   }
  return result;
}
let arr = ["Djoko", "Wow", "Run"];
let da = ["Lili", "Wow", "Run"];

console.log(tellStory(da));


/*
Create a function called getListOfOddContacts()
The function should return all names from a given list (which contains names) that are found in an odd position in the list (1,3,5 etc)
let arr = ["Djoko", "Lili", "Miha", "Ana","Bob", "John", "Agatha"];
*/

console.log(`---HOMEWORK #2---`);
/*Write a function that will take an array of 5 numbers as an argument and return the sum.
Print it in the console or in alert
BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.*/
function sum(arr){
    let result = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i])
        result += arr[i]
    }
    return result
}
arr = [5, 4 , 10 , 3, 5]
console.log(sum(arr))

console.log(`---HOMEWORK #3---`);
/*Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!"*/

function sumOfWords(arr){
    let result = "";
    for(let i=0; i < arr.length; i++){
        if(arr[i])
        result += arr[i] + " " 
    }
    return result
}
arr = ["Hello", "there", "students", "of", "SEDC", "!"]
console.log(sumOfWords(arr))

console.log(`---HOMEWORK #4---`);
/*Title: Looping structures
Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.*/

let ex4 = 0
for(let i =0; i <=20; i++){
    ex4 += i + "\n"
    console.log(ex4)   
}
console.log(`---HOMEWORK #5---`);
/*Title: Looping structures
Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14
Bonus: Try making the function work if there are other types of items in it*/
function sumOf(array){
    let arrayMin = array[0];
    let arrayMax = array[0];
    for(let i = 0; i <array.length; i++){
        if(typeof array[i] === "number"){
            if(arrayMin > array[i]){
                arrayMin=array[i]
            }else if(arrayMax<array[i]){
                arrayMax=array[i]
            }
            
        }
    }
    console.log(`Max is: `, arrayMax)
    console.log(`Min is: `, arrayMin)
    return `Min is ${arrayMin}, Max is ${arrayMax}, and the sum is ${arrayMax + arrayMin}`
}
let arrofNum = [5, 3, "", 54, 1, 6, 7, false, undefined]
console.log(sumOf(arrofNum))