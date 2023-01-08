console.log("---HOMEWORK PART 1---");
/*
Change the page with JavaScript
Change the text of all paragraphs and headers with javascript
Note:The html must not be changed
*/

paragraphs = document.getElementsByTagName("p")[0].innerHTML = "Djoko1";
paragraphs = document.getElementsByTagName("p")[1].innerHTML = "Djoko2";
header1 = document.getElementById("myTitle").innerText = "Djoko3";
console.log(header1);
headers = document.getElementsByTagName("h1")[1];
headers.innerText = "Djoko4";
headers = document.getElementsByTagName("h3")[0];
headers.innerText = "Djoko5";

// Kako da gi smenam site paragrafi naednaš? 

console.log("---HOMEWORK PART 2---");

/*
Print all numbers from an array and the sum
Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
*/

function sumOfNum(arrayNUmbers) {
  let sum = 0;
  for (i = 0; i < arrayNUmbers.length; i++) {
    document.write(i + 1 + " : " + arrayNUmbers[i] + "<br>");
    // Kako da go napravam so \n namesto so <br>?
    // Kako da go isprintam vo HTML so <ol>, <ul> , <li> da bidat vo toj kontekts?
    sum += arrayNUmbers[i];
  }
  let total = sum
  return total
}
arrayNUmbers = [2, 10, 6];


paragraphs = document.getElementById("exercise2").innerText = `The sum from the mathematical equasion is (${arrayNUmbers[0]} + ${arrayNUmbers[1]} + ${arrayNUmbers[0]} = ${sumOfNum(arrayNUmbers)})`

