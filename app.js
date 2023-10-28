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

function calculate() {

   var num1 = parseFloat(document.getElementById('num1').value);
   var oprator = document.getElementById('operator').value;
   var num2 = parseFloat(document.getElementById('num2').value);
   var result = "";



   if (oprator === "+") {
      result = `Sum of ${num1} and ${num2} is ${num1 + num2}.`
   } else if (oprator === "-") {
      result = `Substraction of ${num1} and ${num2} is ${num1 - num2}.`
   } else if (oprator === "/") {
      if (num2 !== 0) {
         result = `Division of ${num1} and ${num2} is ${num1 / num2}.`
      } else {
         result = "Division by zero not allowed"
      }
   } else if (oprator === "%") {
      result = `Modulus of ${num1} and ${num2} is ${num1 % num2}.`
   } else if (oprator === "*") {
      result = `Multiplication of ${num1} and ${num2} is ${num1 * num2}.`
   } else {
      result = "Invalid operator. Please use +, -, /, %, or *.";
   }

   document.querySelector("#result").innerHTML = result;
}

// QUestion 3

// a) Declare a variable
var myVariable;

// b) Show the value of variable in your browser
document.querySelector("#declare").innerHTML = ("Value after variable declaration is:" + myVariable + "<br>");

// c) Initialize the variable

var myVariable = 5;

// d) Show the value of variable in your browser

document.querySelector("#initial").innerHTML = ("Initial Value :" + myVariable + "<br>");

//e. Increment the variable.
myVariable++;

// f. Show the value of variable in your browser
document.querySelector("#increment").innerHTML = ("value after increment is :" + myVariable + "<br>")

// g. Add 7 to the variable.
myVariable += 7;

//h. Show the value of variable in your browser
document.querySelector("#addition").innerHTML = ("value after addition is :" + myVariable + "<br>")

// i. Decrement the variable.
myVariable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.querySelector("#decrement").innerHTML = ("value after decrement is :" + myVariable + "<br>")

//k. Show the remainder after dividing the variable's value by 3.

var remainder = myVariable % 3;

//l. Output : “The remainder is : 0”.

document.querySelector("#remainder").innerHTML = ("The remainder is : " + remainder + "<br>")


// var price = 600;

// var ticket = +prompt("Tell me! How many tickets you want");

// var totalCost = price * ticket;

// document.write("Total cost to buy " +  ticket + " " + "tickets" + " " + " to a movie is " + totalCost +"Pkr" + "<br>" )

// var number = parseInt(+prompt('Enter your number'));

// document.write("<p> Table of" + " " + number+  "</p>"+"<br>");

// for (i = 1 ; i <= 10 ; i++) {
//    document.write(`${number} * ${i} = ${number*i} <br>`)

// }




// var celsius = parseFloat(prompt("Enter celsius"));

// const ferrenheit = (celsius * 9/5  + 32);

// document.write(`${celsius}°C is ${ferrenheit}°F <br>`);

// ferrenheit;

// const cel = (ferrenheit - 32 * 9/5)

// document.write(`${ferrenheit}°F is ${cel}°C <br>`);


// // chapter 5 Question 7 Write a program to implement checkout process of ashopping cart system for an e-commerce website. Storethe following in variables


// var price1 = 650;

// var item1 = +prompt("Enter item1 your quatity");

// var price2 = 100;

// var item2 = +prompt("Enter your Items 2 quantity");

// var deliveryCharges = 100;

// var totalCost = (price1 * item1) +(price2 * item2) + deliveryCharges;

// document.write("Price of item 1 is " + " " + price1 + "<br>");

// document.write('Quantity of item 1 is'+" " + item1 + '<br>');

// document.write('Price of item 2 is' +" " + price2 + "<br>");

// document.write("Quantity of item 2 is" + " " + item2 + "<br>");

// document.write("Shipping Charges" + deliveryCharges + "<br>");

// document.write(`Total cost of your order is ${totalCost} <br>`)

// //Chapter 5  Question 8 Store total marks & marks obtained by a student in 2variables. Compute the percentage & show the result inyour browser


// var totalMarks2 = +prompt('Enter Your Total Marks');

// var obtainedMarks = +prompt("Enter Your Obtained Marks");

// var percentage = (obtainedMarks / totalMarks2) * 100;
// var grade = ""

// document.write('Total Marks :' + " "+ totalMarks2 + "<br>");

// document.write("Marks obtained :" + " " + obtainedMarks+ "<br>");

// document.write("Percentage :" + " " + percentage + "%" + "<br>");

// if (percentage <= 40){
//    grade = "Failed"
// }else if(percentage <= 50){
//    grade = "D"
// }else if(percentage <= 60 ){
//    grade = "C"
// }else if(percentage <= 70){
//    grade = "B"
// }else if(percentage <= 80){
//    grade = "A"
// }else if(percentage <= 100){
//    grade = "A+"
// };

// document.write("Grade :" +" " + grade + "<br>");


// // Chapter 5 Question 9 Assume we have 10 US dollars & 25 Saudi Riyals. Write ascript to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupeeand 1 Saudi Riyal = 28 Pakistani Rupee)

// var usDollar = +prompt("Please Write How Many Dollar you have");

// var riyal = +prompt("How many Riyal you have");

// var pkr = (usDollar * 148.80) + (riyal * 28);

// document.write("Total Currency in PKR is " + " " + pkr + "<br>");

// // Chapter  5 Question 10

// var InitialValue = "";

// var arithem = ((InitialValue + 5) * 10) / 2 ;

// console.log(arithem);


// // Chapter 5 Question 11

// var birthYear = +prompt("Enter you birth year");

// var date = new Date();

// var year = date.getFullYear();

// var age = year - birthYear ;

// document.write("Your Age is " + " "+ age + "<br>" )


// // chapter 5  Question 13

var snacks = "Oreo"

var currentAge = 32;

var expectAge = 60;

var amountSnack = 2;

var yourNeed = (expectAge - currentAge) * amountSnack;
document.querySelector("#snacks").innerHTML = ("Favourite Snacks :" + " " + snacks + "<br>");
document.querySelector("#currentAge").innerHTML = ("Current Age :" + " " + currentAge + "<br>");
document.querySelector("#estimateAge").innerHTML = ("Estimated Maximum Age :" + " " + expectAge + "<br>")
document.querySelector("#lifeSpan").innerHTML = (`You will need ${yourNeed} to last until the ripe old age of ${expectAge}`);


//Chapter 6 Question 1 Write a program to take a number in a variable, do therequired arithmetic to display the following result in your browser:

var a = 10;

document.write("Result " + "<br>" + "The Value of a is :" + a + "<br>" + "..................." + "<br>");

document.write("The Value of ++a is :" + " " + ++a + "<br>");
document.write("Now the value of a is :" + " " + a + "<br>" + "<br>");

document.write("The value of a++ is :" + " " + a++ + "<br>");
document.write("Now the value of a is :" + " " + a + "<br>" + "<br>");

document.write("The value of --a is :" + " " + --a + "<br>")
document.write("Now the value of a is :" + " " + a + "<br>" + "<br>");


document.write("The value of a-- is :" + " " + a-- + "<br>");
document.write("Now the value of a is :" + " " + a + "<br>" + "<br>");


// Chapter 6 Question 2.What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;



var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>" + "b is " + b + "<br>" + "  and result is " + result);

var greet = document.getElementById(greet);

var userName = prompt("Enter Your Name")

if (userName !== null && userName !== "") {
   document.querySelector("#greet").innerHTML = ("Hello!" + " " + userName + " Welcome to my page!")
} else {
   document.querySelector("#greet").innerHTML = ("Hello! Welcome to My page")
}

// Chapter 6 Multiplication Table

function printTable() {
   var table = parseInt(document.getElementById("input3").value) || 5;
   var tableArea = document.getElementById("result1");

   tableArea.innerHTML = "";

   for (i = 1; i <= 10; i++) {
      tableArea.innerHTML += `${table} * ${i} = ${table * i} <br>`
   }

}


var eng = +prompt("Enter your English Obatined Marks out of 100");

var urdu = +prompt("Enter your urdu Obatined Marks out of 100");

var math = +prompt("Enter your Math Obatined Marks out of 100");

var totalMarks1 = eng + urdu + math ;

var percentage1 = Math.round((totalMarks1 / 300)* 100);
var engPer = Math.round((eng / 100)* 100);
var urduPer = Math.round((urdu / 100)* 100);
var mathPer = Math.round((math / 100)* 100);


document.querySelector("#english").innerHTML= eng;
document.querySelector("#urdu").innerHTML= urdu;
document.querySelector("#math").innerHTML= math;
document.querySelector("#totalPercentage").innerHTML = "<h5>" +percentage1 + "%" + "</h5>";
document.querySelector("#englishPer").innerHTML = engPer + "%";
document.querySelector("#urduPer").innerHTML = urduPer + "%";
document.querySelector("#mathPer").innerHTML =  mathPer + "%";

document.querySelector("#obtainedMarks").innerHTML = "<h5>"+ totalMarks1 +"</h5>";


var city = prompt("Enter your city name");
var gender = prompt("Enter your gender");

if (city.toLocaleLowerCase() == "karachi") {
   if (gender.toLocaleLowerCase() === "male") {
      swal("Hello Sir !", "Welcome to Karachi! The City Of Lights!");
   } else if (gender.toLocaleLowerCase() === "female") {
      swal("Hello Madam !", "Welcome to Karachi! The City Of Lights!")
   } else {
      swal("Hello !",)
   }
} else {
   if (gender.toLowerCase() === "male") {
      swal("Hello Sir", "Welcome to " + city + "!");
   } else if (gender && gender.toLowerCase() === "female") {
      swal("Hello Madam", "Welcome to " + city + "!");
   } else {
      swal("Hello", "Welcome to " + city + "!");
   }
};

// var signalInstruction = prompt("Please write traffic signal color");

// if (signalInstruction === "red"){
//    swal("Must Stop")
// }else if (signalInstruction === "yellow"){
//    swal("Ready to Move")
// }else if(signalInstruction === "green"){
//    swal("Move On")
// }else{
//    swal("Please Enter a valid color")
// };

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Enter your num between 1 to 10");
console.log(secretNumber)
if (guess === secretNumber){
   alert("Bingo! Correct answer")
}else if(guess === secretNumber -1 || guess === secretNumber +1){
   alert("Unlucky You just missed that")
}else{
   alert("Better Luck Next Time")
};

var num6 = +prompt("Enter A number0");

if (num6 % 3 === 0){
   alert(`${num6} is divisible by 3`)
}else{
   alert(`${num6} is not divible by 3`)
};

var num7 = +prompt("Enter Any Number for check the given number is even or odd");

if (num7 % 2 === 0){
   alert(`${num7} is Even Number `);
}else{
   alert(`${num7} is odd Number`);
};

var temperature = +prompt("Enter weather temperature");

if (temperature > 40){
   alert("Its Too hot outside")
}else if(temperature > 30){
   alert("The Weather Today is Normal")
}else if(temperature > 20){
   alert("Today’s Weather is cool.")
}else if(temperature > 10){
   alert("OMG! Today’s weather is so Cool.")
}