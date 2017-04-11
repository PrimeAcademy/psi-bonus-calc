console.log('test');
// global employees
// name, empNum, salary, rating
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

// arrary of arrays?
var employees = [atticus, jem, boo, scout, robert, mayella];

for (var i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

// function that takes single employee array and returns new array
function newArray(singleEmployee) {
  // contain name, bonus percentage, adjustedComp, bonus
  var newEmpArray = [];

  // DO STUFF?

  // return new array
  return newEmpArray;
}
