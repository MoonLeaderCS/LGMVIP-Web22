// selector
const historyValue = document.getElementById('history-value');
const outputValue = document.getElementById('output-value');

// getHistory function
function getHistory() {
  return historyValue.innerText;
}

// printHistory function
function printHistory(num) {
  historyValue.innerText = num;
}

// getOuptut function
function getOutput() {
  return outputValue.innerText;
}

// printOutput function
function printOutput(num) {
  if(num == ""){
    outputValue.innerText = num;
  }else{
    outputValue.innerText = getFormattedNumber(num);
  }
}

// add comma it means create a getFormattedNumber function
function getFormattedNumber(num) {
  if(num == "-"){
    return "";
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}



// reverse formatted Number
function reverseFormattedNumber(num) {
  return Number(num.replace(/,/g,''))
}


const operator = document.getElementsByClassName('operator');
// run a loop
for (let i = 0; i < operator.length; i++){
  operator[i].addEventListener('click', function() {
    if(this.id == "clear"){
      printOutput("");
      printHistory("");
    }else if(this.id == "backspace"){
      let output = reverseFormattedNumber(getOutput()).toString();
      //if output has value
      if(output){
        output = output.substr(0, output.length -1);
        printOutput(output)
      }
    }else{
      let output = getOutput();
      let history = getHistory();
      if(output == "" && history != "" ){
        if(isNaN(history[history.length - 1])){
          history = history.substr(0, history.length-1)
        }
      }
      if(output != "" || history != ""){
        // conditional statement it means ternary operator
        output = output == "" ? output : reverseFormattedNumber(output);
        history += output;
        if(this.id == "="){
          let result = eval(history);
          printOutput(result);
          printHistory("")
        }else{
          history += this.id;
          printHistory(history);
          printOutput("")
        }
      }
    }
  })// this culry braces for click event
}



const number = document.getElementsByClassName('number');
// run a loop
for (let i = 0; i < number.length; i++){
  number[i].addEventListener('click', function() {
    let output = reverseFormattedNumber(getOutput());
    // if output is a number
    if(output != NaN) {
      output += this.id;
      printOutput(output);
    }
  })// this culry braces for click event
}