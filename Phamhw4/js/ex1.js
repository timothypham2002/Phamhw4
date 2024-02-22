function calculator() {
  var number1 = parseFloat(prompt('Number 1:'));
  var number2 = parseFloat(prompt('Number 2:'));
  var operation = prompt('Mathematical Operation (+, -, *, /):');
  var result;
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
  }
  return `${number1} ${operation} ${number2} = ${result}`;
}
var output = calculator();
console.log(output);