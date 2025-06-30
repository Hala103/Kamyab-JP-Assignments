var input = document.getElementById('input')

function display(y) {
    input.value += y;
   
}


function Clearall() {
    input.value = "";
}

function calculate() {
    var result = eval(input.value);
    input.value = result
}

function squareroot(){
    var square = Math.sqrt(input.value);
    input.value = square
}


function square() {
    var square2 = input.value * input.value;
    input.value = square2; 
}

function calculatepercentage(){
    var per = eval(input.value)/100;
    input.value = per;
}

function calculateTrig(value) {

    var degrees = (input.value);
    var radians = degrees * (Math.PI / 180);

    var cal;
    switch (value) {
      case 'sin':
        cal = Math.sin(radians);
        break;
      case 'cos':
        cal = Math.cos(radians);
        break;
      case 'tan':
        cal = Math.tan(radians);
        break;
    }
    input.value = cal.toFixed(2);
}
