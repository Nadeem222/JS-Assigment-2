// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number")

// var result = num1 + num2;

// alert("Sum of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
// document.write("Sum of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result+ "<br>");


// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number")

// var result = num1 - num2;

// alert("Substraction  of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
// document.write("Substraction of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result +"<br>");
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number")

// var result = num1 * num2;

// alert("Multiplication of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
// document.write("Multiplication of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result+ "<br>");
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number")

// var result = num1 / num2;

// alert("Division of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
// document.write("Division of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result );


var num1 = +prompt("Enter a number");
var oprator = prompt("Select any operator e.g (/,*,+,-,% )");
var num2 = +prompt("Enter a number");
var result = "";
var result1 = "";


 if( oprator === "+"){
    result1 = num1 + num2;
    result = `Sum of ${num1} and ${num2} is ${result1}.`
 }else if (oprator === "-" ){
    result1 = num1 - num2;
    result = `Substraction of ${num1} and ${num2} is ${result1}.`
 }else if( oprator === "/"){
    result1 = num1 / num2;
    result = `Division of ${num1} and ${num2} is ${result1}.`
 }else if(oprator === "%"){
    result1  = num1 % num2;
    result = `Modulus of ${num1} and ${num2} is ${result1}.`
 }else if(oprator === "*"){
   result1  = num1 * num2;
    result = `Multiplication of ${num1} and ${num2} is ${result1}.`
 }

document.write(result+ "<br>");


// a) Declare a variable
var myVariable;

// b) Show the value of variable in your browser
document.write("Value after variable declaration is:" + myVariable + "<br>");

// c) Initialize the variable

var myVariable = 5;

// d) Show the value of variable in your browser

document.write("Initial Value :" + myVariable + "<br>");

//e. Increment the variable.
myVariable++;

// f. Show the value of variable in your browser
document.write("value after increment is :" + myVariable + "<br>")

// g. Add 7 to the variable.
myVariable += 7;

//h. Show the value of variable in your browser
document.write("value after addition is :" + myVariable + "<br>")

// i. Decrement the variable.
myVariable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("value after decrement is :" + myVariable + "<br>")

//k. Show the remainder after dividing the variable's value by 3.

var remainder = myVariable % 3;

//l. Output : “The remainder is : 0”.

document.write("The remainder is : " + remainder + "<br>")


var price = 600;

var ticket = +prompt("Tell me! How many tickets you want");

var totalCost = price * ticket;

document.write("Total cost to buy " +  ticket + " " + "tickets" + " " + " to a movie is " + totalCost +"Pkr" + "<br>" )

var number = parseInt(+prompt('Enter your number'));

for (i = 1 ; i <= 10 ; i++) {
   document.write(`${number} * ${i} = ${number*1} <br>`)
   
}