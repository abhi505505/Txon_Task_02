let expression = "";
let result = "";

function addDigit(digit) {
  expression += digit;
  document.getElementById("expression").value = expression;
}

function addOperator(operator) {
  if (expression !== "" && !isNaN(expression.slice(-1))) {
    expression += operator;
    document.getElementById("expression").value = expression;
  }
}

function clearScreen() {
  expression = "";
  result = "";
  document.getElementById("expression").value = "";
  document.getElementById("result").value = "";
}

function calculate() {
  if (expression !== "" && !isNaN(expression.slice(-1))) {
    result = eval(expression);
    document.getElementById("result").value = result;
  }
}
