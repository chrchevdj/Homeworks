 // function weightInChickens - done
 // input weight in kil - done
 // convertion 1 chicken = 0.5kg - done
 //input - prompt - done
 // result in HTML
 //HTML - title and result paragraph

let weight = parseInt(prompt("Enter your weight: "));
function weightInChickens(a){
let weightInChickens = 0.5
let finalWegit = a * weightInChickens
return finalWegit
}
console.log(weightInChickens(weight))

let resultDiv = document.getElementById("result")
resultDiv.innerHTML = "<h3>" + weight + "KG is " + weightInChickens(weight) + "</h3>"
console.log(resultDiv)


