console.log(document)
let inputs = document.getElementById("userInputs").children;
let submitBtn = document.getElementById("submit");
let result = document.getElementById("result");

function getUserInfo(inputElements){
  let result = "User: ";
  for(let input of inputElements){
    result += input.value + " ";
  }
  result +="Is registered!"
  return result
}
submitBtn.addEventListener("click", function(){
  result.innerText=getUserInfo(inputs)
})

let input = document.getElementById("name");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
 // gets the value
 console.log(`Somebody entered the name: ${input.value}`);
 // changes the value to empty string
 input.value = "";
})