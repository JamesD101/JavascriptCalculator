//get the values of the number and put in the calculation-show input field

function getNumber(num){
  var input_var = document.getElementById('calculation-show');

  switch (num) {
    case 1:
      input_var.value += '1';
      break;

    case 2:
      input_var.value += '2';
      break;

    case 3:
      input_var.value += '3';
      break;

    case 4:
      input_var.value += '4';
      break;

    case 5:
      input_var.value += '5';
      break;

    case 6:
      input_var.value += '6';
      break;

    case 7:
      input_var.value += '7';
      break;

    case 8:
      input_var.value += '8';
      break;

    case 9:
      input_var.value += '9';
      break;

    case 0:
      input_var.value += '0';
      break;

  }
}

//get the mathematical operands

function getOperand(operand) {
  var input_var = document.getElementById('calculation-show');

  switch (operand) {
    case '+':
      input_var.value += '+';
      break;

    case '-':
      input_var.value += '-';
      break;

    case '/':
      input_var.value += '/';
      break;

    case '*':
      input_var.value += 'X';
      break;

    case '.':
      input_var.value += '.';
      break;
    default:

  }
}


// clear button fucntion

function cclear() {
  document.getElementById('calculation-show').value = "";
  document.getElementById('result-show').value = "";
}

// backspace function

function backspace() {
  var input_var = document.getElementById('calculation-show');
  var x = input_var.value;

  if (x.length > 0 ) {
    x = x.substring(0, x.length -1);
    input_var.value = x;
  }
}

// funcction to calculateeee

function compute() {
  var input_var = document.getElementById('calculation-show');
  ans = Math.floor(+eval(input_var.value));
  document.getElementById('result-show').value = ans;
}
