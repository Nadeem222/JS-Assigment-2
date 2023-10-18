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

document.write("<p> Table of" + " " + number+  "</p>"+"<br>");

for (i = 1 ; i <= 10 ; i++) {
   document.write(`${number} * ${i} = ${number*i} <br>`)
   
}


var celsius = parseFloat(prompt("Enter celsius"));

const ferrenheit = (celsius * 9/5  + 32);

document.write(`${celsius}°C is ${ferrenheit}°F <br>`);

ferrenheit;

const cel = (ferrenheit - 32 * 9/5)

document.write(`${ferrenheit}°F is ${cel}°C <br>`);


// chapter 5 Question 7 Write a program to implement checkout process of ashopping cart system for an e-commerce website. Storethe following in variables


var price1 = 650;

var item1 = +prompt("Enter item1 your quatity");

var price2 = 100;

var item2 = +prompt("Enter your Items 2 quantity");

var deliveryCharges = 100;

var totalCost = (price1 * item1) +(price2 * item2) + deliveryCharges;

document.write("Price of item 1 is " + " " + price1 + "<br>");

document.write('Quantity of item 1 is'+" " + item1 + '<br>');

document.write('Price of item 2 is' +" " + price2 + "<br>");

document.write("Quantity of item 2 is" + " " + item2 + "<br>");

document.write("Shipping Charges" + deliveryCharges + "<br>");

document.write(`Total cost of your order is ${totalCost} <br>`)

//Chapter 5  Question 8 Store total marks & marks obtained by a student in 2variables. Compute the percentage & show the result inyour browser


var totalMarks = +prompt('Enter Your Total Marks');

var obtainedMarks = +prompt("Enter Your Obtained Marks");

var percentage = (obtainedMarks / totalMarks) * 100;
var grade = ""

document.write('Total Marks :' + " "+ totalMarks + "<br>");

document.write("Marks obtained :" + " " + obtainedMarks+ "<br>");

document.write("Percentage :" + " " + percentage + "%" + "<br>");

if (percentage <= 40){
   grade = "Failed"
}else if(percentage <= 50){
   grade = "D"
}else if(percentage <= 60 ){
   grade = "C"
}else if(percentage <= 70){
   grade = "B"
}else if(percentage <= 80){
   grade = "A"
}else if(percentage <= 100){
   grade = "A+"
};

document.write("Grade :" +" " + grade + "<br>");


// Chapter 5 Question 9 Assume we have 10 US dollars & 25 Saudi Riyals. Write ascript to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupeeand 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollar = +prompt("Please Write How Many Dollar you have");

var riyal = +prompt("How many Riyal you have");

var pkr = (usDollar * 148.80) + (riyal * 28);

document.write("Total Currency in PKR is " + " " + pkr + "<br>");

// Chapter  5 Question 10

var InitialValue = "";

var arithem = ((InitialValue + 5) * 10) / 2 ;

console.log(arithem);


// Chapter 5 Question 11

var birthYear = +prompt("Enter you birth year");

var date = new Date();

var year = date.getFullYear();

var age = year - birthYear ;

document.write("Your Age is " + " "+ age + "<br>" )

// Chapter 5 Question 12

var radius = +prompt("Enter Radius");

// chapter 5  Question 13

var snacks = "Oreo"

var currentAge = 32;

var expectAge = 60;

var amountSnack = 2;

var yourNeed = ( expectAge - currentAge) * amountSnack;
document.write("Favourite Snacks :" + " " + snacks + "<br>");
document.write("Current Age :" + " " + currentAge  + "<br>");
document.write("Estimated Maximum Age :" + " " + expectAge + "<br>")
document.write(`You will need ${yourNeed} to last until the ripe old age of ${expectAge}`);

