alert("Hello, at the end below on the screen you will have the pictures from the exercise")
alert("Now we will start with the first one and then will be the second and third one, of course you will receive notficicaion when they will be starting.")

// 1st exercise
alert("Lets see if you can guess my number, and i will give you even a hint :) it is between 30 and 35.")
let answer = prompt("So let's start...What is your number?")
if (answer == 31) {
  alert('Correct')
} else if (answer ==30 && answer ==32){
  alert('Upsss you got it wrong, try with +-1number')
}
else if (answer >32 & answer <=34){
  alert("Don't go too far, try with -2,3 numbers")
}
else if (answer ==35){
  alert("Don't go too far now, try with -4 numbers")
}
else (answer <30 & answer>35)
{
  alert("C'mon i told you it's between 30 and 35, was that hard?")
}

// 2nd exercise
alert("Now we will be starting with the second exercise")
alert("Please also fill all the information so we can check your reservation and to see how is going to be your night on Friday :) TIPS: By the way if you bring someone please make sure you have enough money otherwise you will be watching TV home :(")
let firstNamePrompt = prompt("Hey, what is your name?");
console.log(firstNamePrompt)
let lastNamePrompt = prompt("Hey, what is your last name?");
console.log(lastNamePrompt)
console.log('Your name is: ',lastNamePrompt + "" + firstNamePrompt)

let fridaCash = prompt('How much money you have for Friday :)')
if(fridaCash >=50) {
  alert('Ok, You are good to go and should go out for a dinner and a movie.')
} 
else if(fridaCash < 50 & fridaCash >= 35){
  alert('I think you should go out to fine meal.')
} 
else if(fridaCash < 35 & fridaCash >= 12){
  alert('Better just go see a mvoie')
} 
else {
  alert("Dont say i didnt warn you...Looks like you'll be watching TV")
}

// 3rd exercise
alert("Now we will be starting with the third exercise and let siee what is your Chinese Zodiac :)")
let yearOfBirth = prompt("Please enter the year of birth");
let result = ((yearOfBirth - 4) % 12);
if (result === 0) {
  alert('You are Rat')
} else if (result === 1){
  alert('You are Ox')
}
else if (result === 2){
  alert('You are Tiger')
}
else if (result === 3){
  alert('You are Rabbit')
}
else if (result === 4){
  alert('You are Dragon')
}
else if (result === 5){
  alert('You are Snake')
}
else if (result === 6){
  alert('You are Horse')
}
else if (result === 7){
  alert('You are Goat')
}
else if (result === 8){
  alert('You are Monkey')
}
else if (result === 9){
  alert('You are Rooster')
}
else if (result === 10){
  alert('You are Dog')
}
else if(result === 11){
  alert('You are Pig')
}