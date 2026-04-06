let expenses = [];

function addExpense() {
  let input = document.getElementById("amount");
  let value = input.value;

  
  if (value === "" || isNaN(value)) {
    alert("Please enter a valid number!");
    return;
  }

  
  expenses.push(Number(value));


  let total = expenses.reduce(function(sum, current) {
    return sum + current;
  }, 0);

 
  document.getElementById("total").innerText = total;


  input.value = "";
}