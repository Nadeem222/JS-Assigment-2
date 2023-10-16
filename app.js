// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number")

// var result = num1 + num2;

// alert("Sum of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
// document.write("Sum of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);


var num1 = +prompt("Enter a number");
var oprator = prompt("Select any operator e.g (/,*,+,-,% )");
var num2 = +prompt("Enter a number");
var result = "";

 if( oprator === "+"){
    result = num1 + num2;
 }else if (oprator === "-" ){
    result = num1 - num2;
 }else if( oprator === "/"){
    result = num1 / num2;
 }else if(oprator === "%"){
    result  = num1 % num2;
 }

document.write(result);