console.log(`---HOMEWORK---`)
/*
HOMEWORK
CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)
*/

function generateTable() {
 
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");


  for (let i = 1; i < 4; i++) {

    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      
      let cell = document.createElement("td");
      let cellText = document.createTextNode(`Row - ${i}, column - ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }


    tblBody.appendChild(row);
  }


  tbl.appendChild(tblBody);

  document.body.appendChild(tbl);
  
  tbl.setAttribute("border", "2");
}