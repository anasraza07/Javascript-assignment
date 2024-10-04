// // chapter 01
// // Q1:
// alert('Hello world!')

// // Q2:
// alert('Error! Please enter a valid password.')

// // Q3:
// alert('Welcome to JS Land...\nHappy Coding')

// // Q4:
// alert('Welcome to JS Land...')
// alert('Happy Coding!\nPrevent this page from creating additional dialogs.')

// // Q5 = browser developer console question
// // Q6 & Q7 = html and css question


// // chapter 02
// // Q1:
// let username;

// // Q2:
// let myName = 'Anas raza';

// // Q3:
// let message = 'Hello world';
// alert(message);

// // Q4:
// let userName = 'Anas raza';
// let age = '20 years old';
// let course = 'Mobile Application Developement';
// alert(userName);
// alert(age);
// alert(course);

// // Q5:
// let food = 'PIZZA\nPIZZ\nPIZ\nPI\nP';
// alert(food);

// // Q6:
// let email = 'ar470684@gmail.com';
// alert('My email address is ' + email)

// // Q7:
// let book = 'A smarter way to learn JavaScript';
// alert('I am trying to learn from the Book ' + book);

// // Q8:
// document.write('Yah! I can write HTML content through JavaScript')

// // Q9:
// let unicode = '\u9602' + '----------' + '\u0B9C' + '----------' + '\u9602';
// alert(unicode);
// document.write(unicode);


// // chapter 03
// // Q1:
// let age = 20;
// alert('I am ' + age + ' years old');

// // Q2:
// let timesVisited = 14;
// alert('You have visited this site ' + timesVisited + ' times')

// // Q3:
// let birthYear = 2004;
// document.write('My birth year is as ' + birthYear)
// document.write('<br>')
// document.write('Data type of my declared variable is ' + typeof birthYear)

// // Q4:
// let visitor = 'John Doe';
// let product = 'T-shirt';
// let quantity = 5;
// document.write('<strong>' + visitor + '</strong>' + ' ordered ' + '<strong>' + quantity + ' ' + product + '</strong>' + '(s) on XYZ Clothing store');


// // chapter 04
// // Q1:
// let one, two, three;

// // Q2:
// let legalOne;
// let LegalTwo;
// let legal_three;
// let legal04;
// let legal$five;

// let illegal-one;
// let 02illegaltwo;
// let illegal three;
// let illegal#four;
// let illegal@five;

// // Q3:
// document.write('<h2>Rules for naming JS variables</h2>')
// document.write('<br>')
// document.write('Variable names can only contain letters, numbers, $ and _. For example <b>$my_1stVariable</b>')
// document.write('<br>')
// document.write('Variables must begin with a letter, $ or _. For example <b>$name, _name</b> or <b>name</b>')
// document.write('<br>')
// document.write('Variable names are case sensitive')
// document.write('<br>')
// document.write('Variable names should not be JS keywords')


// // chapter 05
// // Q1:
// let num1 = 10;
// let num2 = 20;
// let result = num1 + num2;
// document.write('Sum of ' + num1 + ' and ' + num2 + ' is ' + result)

// // Q2:
// let num1 = 10;
// let num2 = 20;
// let difference = num2 - num1;
// let product = num1 * num2;
// let quotient = num2 / num1;
// document.write('Difference of ' + num2 + ' and ' + num1 + ' is ' + difference)
// document.write('<br>')
// document.write('Product of ' + num1 + ' and ' + num2 + ' is ' + product)
// document.write('<br>')
// document.write('Quotient of ' + num2 + ' and ' + num1 + ' is ' + quotient)

// // Q3:
// let a;
// document.write('Value after variable declaration is: ' + a);
// document.write('<br>')
// a = 5;
// document.write('Initial value: ' + a);
// document.write('<br>')
// a++;
// document.write('Value after increment is: ' + a);
// document.write('<br>')
// a += 7;
// document.write('Value after addition is: ' + a);
// document.write('<br>')
// a--;
// document.write('Value after decrement is: ' + a);
// document.write('<br>')
// a = a % 3;
// document.write('The remainder is: ' + a);

// // Q4:
// let ticketPrice = 600;
// let tickets = 5;
// let totalCost = ticketPrice * tickets;
// document.write('Total cost to buy ' + tickets + ' tickets to a movie is ' + totalCost + 'PKR')

// // Q5:
// let num = 4;
// document.write('Table of ' + num + '<br>')
// document.write(num + 'x' + 1 + '=' + num * 1 + '<br>')
// document.write(num + 'x' + 2 + '=' + num * 2 + '<br>')
// document.write(num + 'x' + 3 + '=' + num * 3 + '<br>')
// document.write(num + 'x' + 4 + '=' + num * 4 + '<br>')
// document.write(num + 'x' + 5 + '=' + num * 5 + '<br>')
// document.write(num + 'x' + 6 + '=' + num * 6 + '<br>')
// document.write(num + 'x' + 7 + '=' + num * 7 + '<br>')
// document.write(num + 'x' + 8 + '=' + num * 8 + '<br>')
// document.write(num + 'x' + 9 + '=' + num * 9 + '<br>')
// document.write(num + 'x' + 10 + '=' + num * 10 + '<br>')

// // Q6:
// let celsius = 25;
// let fahrenheit = 70;
// let toFahrenheit = (celsius * 9 / 5) + 32;
// let toCelsius = (fahrenheit - 32) * 5 / 9;
// document.write(celsius + '<sup>0</sup>C is ' + toFahrenheit + '<sup>o</sup>F <br>')
// document.write(fahrenheit + '<sup>0</sup>F is ' + toCelsius + '<sup>o</sup>C')

// // Q7:
// document.write('<h1>Shopping Cart</h1>')
// let itemOnePrice = 650;
// let itemTwoPrice = 100;
// let itemOneQuantity = 3;
// let itemTwoQuantity = 7;
// let shippingCharges = 100;
// let totalCost = (itemOnePrice * itemOneQuantity) +
//     (itemTwoPrice * itemTwoQuantity) + shippingCharges; 
// document.write('Total cost of your order is ' + totalCost);

// // Q8:
// document.write('<h1>Marks Sheet</h1>')
// let totalMarks = 980;
// let marksObtained = 804;
// let percentage = marksObtained / totalMarks * 100
// document.write('Total marks: ' + totalMarks + '<br>')
// document.write('Marks obtained: ' + marksObtained + '<br>')
// document.write('Percentage: ' + percentage + '%')

// // Q9:
// document.write('<h1>Currency in PKR</h1>')
// let usDollars = 10;
// let saudiRiyals = 25;
// let usDollarExchangeRates = 104.80;
// let saudiRiyalExchangeRates = 28;
// let totalCurrency = (usDollars * usDollarExchangeRates) + (saudiRiyals * saudiRiyalExchangeRates)
// document.write('Total Currency in PKR: ' + totalCurrency)

// // Q10:
// let num = 10;
// console.log(((num + 5) * 10) / 2);

// // Q11:
// let currentYear = 2024;
// let birthYear = 2004;
// let age = currentYear - birthYear;
// document.write('Your age is: ' + age)

// // Q12:
// document.write('<h1>The Geometrizer</h1>')
// let radius = 20;
// let pi = 3.142;
// let circumference = 2 * pi * radius;
// let area = pi * radius ** 2;
// document.write('Radius of a circle: ' + radius + '<br>');
// document.write('The circumference is: ' + circumference + '<br>');
// document.write('The area is: ' + area);

// // Q13:
// document.write('<h1>The Lifetime Supply Calculator</h1>')
// let favSnack = 'chocolato';
// let currentAge = 20;
// let maxAge = 65;
// let amountPerDay = 3;
// let leftOverSnack = (maxAge - currentAge) * amountPerDay;
// document.write('Favourite Snack: ' + favSnack + '<br>');
// document.write('Current age: ' + currentAge + '<br>');
// document.write('Estimated Maximum Age: ' + maxAge + '<br>');
// document.write('Amount of snacks per day: ' + amountPerDay + '<br>');
// document.write('You will need ' + leftOverSnack + ' ' + favSnack + ' to last you until the ripe old age of ' + maxAge);


// // chapter 06 - chapter 09
// // Q1:
// let a = 10;
// document.write('Result: <br> The value of a is: ' + a + '<br>');
// document.write('.................................................. <br><br>');

// document.write('The value of ++a is: ' + ++a + '<br>');
// document.write('Now the value of a is: ' + a + '<br><br>');

// document.write('The value of a++ is: ' + (a++) + '<br>');
// document.write('Now the value of a is: ' + a + '<br></br>');

// document.write('The value of --a is: ' + --a + '<br>');
// document.write('Now the value of a is: ' + a + '<br><br>');

// document.write('The value of a-- is: ' + (a--) + '<br>');
// document.write('Now the value of a is: ' + a);

// // Q2:
// let a = 2, b = 1;
// let result = --a - --b + ++b + b--;
// document.write('<b>--a:</b> <br>');
// document.write('a is 1 <br>');
// document.write('b is 1 <br>');
// document.write('result is 1 <br><br>');

// document.write('<b>--a - --b:</b> <br>');
// document.write('a is 1 <br>');
// document.write('b is 0 <br>');
// document.write('result is 1 <br><br>');

// document.write('<b>--a - --b + ++b:</b> <br>');
// document.write('a is 1 <br>');
// document.write('b is 1 <br>');
// document.write('result is 2 <br><br>');

// document.write('<b>--a - --b + ++b + b--:</b> <br>');
// document.write('a is 1 <br>');
// document.write('b is 0 <br>');
// document.write('result is 3 <br><br>');
// console.log(a, b, result)

// // Q3:
// let userName = prompt('Enter your name');
// alert('Hello ' + userName + '!');

// Q4: not given

// // Q5:
// let userNum = prompt('Enter your number');
// if (!userNum) {
//     userNum = 5;
// };

// document.write('<h1>Table of ' + userNum + '</h1> <br>');
// document.write(userNum + ' x ' + 1 + ' = ' + userNum * 1 + '<br>');
// document.write(userNum + ' x ' + 2 + ' = ' + userNum * 2 + '<br>');
// document.write(userNum + ' x ' + 3 + ' = ' + userNum * 3 + '<br>');
// document.write(userNum + ' x ' + 4 + ' = ' + userNum * 4 + '<br>');
// document.write(userNum + ' x ' + 5 + ' = ' + userNum * 5 + '<br>');
// document.write(userNum + ' x ' + 6 + ' = ' + userNum * 6 + '<br>');
// document.write(userNum + ' x ' + 7 + ' = ' + userNum * 7 + '<br>');
// document.write(userNum + ' x ' + 8 + ' = ' + userNum * 8 + '<br>');
// document.write(userNum + ' x ' + 9 + ' = ' + userNum * 9 + '<br>');
// document.write(userNum + ' x ' + 10 + ' = ' + userNum * 10 + '<br>');

// // Q6:
// let firstSubject = prompt('Enter your first Subject');
// let secondSubject = prompt('Enter your second Subject');
// let thirdSubject = prompt('Enter your third Subject');
// let eachTotalMarks = 100;
// let totalMarks = eachTotalMarks * 3;
// let firstSubjectMarks = Number(prompt('Enter your ' + firstSubject + ' marks'));
// let secondSubjectMarks = Number(prompt('Enter your ' + secondSubject + ' marks'));
// let thirdSubjectMarks = Number(prompt('Enter your ' + thirdSubject + ' marks'));
// let totalObtainedMarks = firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks;
// let overallPercentage = (totalObtainedMarks / totalMarks * 100).toFixed(2);

// document.write('<b>Subject</b><br>')
// document.write(firstSubject + '<br>')
// document.write(secondSubject + '<br>')
// document.write(thirdSubject + '<br><br>')

// document.write('<b>Obtained Marks</b><br>')
// document.write(firstSubjectMarks + '<br>')
// document.write(secondSubjectMarks + '<br>')
// document.write(thirdSubjectMarks + '<br><br>')


// document.write('<b>Percentage</b><br>')
// document.write((firstSubjectMarks / eachTotalMarks * 100).toFixed(2) + '% <br>')
// document.write((secondSubjectMarks / eachTotalMarks * 100).toFixed(2) + '% <br>')
// document.write((thirdSubjectMarks / eachTotalMarks * 100).toFixed(2) + '% <br><br>')

// document.write('<b>Total Marks</b><br>')
// document.write(eachTotalMarks * 3 + '<br><br>')

// document.write('<b>Total Obtained Marks</b><br>')
// document.write(totalObtainedMarks + '<br><br>')

// document.write('<b>Overall Percentage</b><br>')
// document.write(overallPercentage + '%<br><br>')


// // chapter 09 - 11
// // Q1:
// let city = prompt('Enter city name');
// if (city === 'karachi') {
//     alert('Welcome to city of lights');
// }

// // Q2:
// let gender = prompt('Enter your gender');
// if (gender === 'male') {
//     alert('Good Morning Sir.')
// } else if (gender === 'female') {
//     alert("Good Morning Ma'am.")
// }

// // Q3:
// let color = prompt('Enter color of the road traffic signal');
// if (color === 'red') {
//     alert('Must Stop')
// } else if (color === 'yellow') {
//     alert('Ready to move')
// } else if (color === 'green') {
//     alert('Move now')
// };

// // Q4:
// let fuel = prompt('Enter remaining fuel in car (in litres)');
// if (fuel < 0.25) {
//     alert('Please refill the fuel in your car');
// }

// // Q5:
// let a = 4;
// if (++a === 5) {
//     alert('given condition for variable a is true');
// }
// document.write('<b>a:</b> displayed <br>')

// let b = 82;
// if (b++ === 83) {
//     alert('given condition for variable b is true');
// }
// document.write('<b>b:</b> not displayed <br>')

// let c = 12;
// if (c++ === 13) {
//     alert('condition 1 is true');
// } else if (c === 13) {
//     alert('condition 2 is true');
// } else if (++c < 14) {
//     alert('condition 3 is true');
// } else if (c === 14) {
//     alert('condition 4 is true');
// }
// document.write('<b>c:</b> condition 2 is true <br>')

// let materialCost = 20000;
// let labourCost = 2000;
// let totalCost = materialCost + labourCost;
// if (totalCost === materialCost + labourCost) {
//     alert('The cost equals');
// }

// if (true) {
//     alert('True');
// }
// if (false) {
//     alert('False');
// }

// if ('car' < 'cat') {
//     alert('car is smaller than cat');
// }

// // Q6:
// let totalObtainedMarks = Number(prompt('Enter total marks obtained in three subjects'));
// let totalMarks = Number(prompt('Enter total marks'));
// let percentage = (totalObtainedMarks / totalMarks * 100).toFixed(2);
// let grade;
// let remarks;
// if (percentage >= 80) {
//     grade = 'A-one';
//     remarks = 'Excellent';
// } else if (percentage >= 70) {
//     grade = 'A';
//     remarks = 'Good';
// } else if (percentage >= 60) {
//     grade = 'B';
//     remarks = 'You need to improve';
// } else if (percentage < 60) {
//     grade = 'Fail';
//     remarks = 'Sorry';
// }

// document.write('<h1>Marks Sheet</h1> <br>');
// document.write('Total marks: ' + totalMarks + '<br>');
// document.write('Marks obtained: ' + totalObtainedMarks + '<br>');
// document.write('Percentage: ' + percentage + '%<br>');
// document.write('Grade: ' + grade + '<br>');
// document.write('Remarks: ' + remarks + '<br>');

// // Q7:
// let secretNumber = Math.ceil(Math.random() * 10);
// let userGuess = Number(prompt('Enter your guess number'));
// if (userGuess === secretNumber) {
//     alert('Bingo! Correct answer')
// } else if (userGuess + 1 === secretNumber) {
//     alert('Close enough to the correct answer')
// }

// // Q8:
// let userNum = Number(prompt('Enter your number'));
// if (userNum % 3 === 0) {
//     alert('Your number is divisible by 3');
// }

// // Q9:
// let userNum = Number(prompt('Enter your number'));
// if (userNum % 2 === 0) {
//     alert('Number is Even');
// } else {
//     alert('Number is Odd');
// }

// // Q10:
// let temperature = prompt("Enter today's temperature");
// if (temperature > 40) {
//     alert('It is too hot outside')
// } else if (temperature > 30) {
//     alert('The weather today is normal')
// } else if (temperature > 20) {
//     alert("Today's weather is cool")
// } else if (temperature > 10) {
//     alert('OMG! Todays weather is so cool')
// }

// // Q11:
// let firstNum = Number(prompt('Enter your First number'));
// let secondNum = Number(prompt('Enter your Second number'));
// let operation = (prompt('Enter any operator (+, -, *, /, %'));
// let result = eval(firstNum + operation + secondNum);
// alert('Result is: ' + result);

// console.log(this)
// function abc() {
//     console.log(this)
// }
// abc()
















// function getPermutations(string) { // string = 'a'
//     let result = []; 

//     // Agar string ki length 1 ya us se kam hai, bas wahi return kar do
//     if (string.length <= 1) { // true
//         return [string]; 
//     }

//     // Loop ke zariye har character ke permutations banao
//     for (let i = 0; i < string.length; i++) { // string = 'saw' 

//         // Current character ko lo
//         let currentChar = string[i]; // currentChar = 's'
        
//         // Remaining characters banao, i-th character ko chhod ke
//         let remainingChars = string.slice(0, i) + string.slice(i + 1); // remainingChars = 'aw'

//         // Recursion se baaki characters ka permutation nikaalo
//         let remainingPerms = getPermutations(remainingChars); // remainingPerms = ['aw', 'wa']

//         // Loop ke zariye remainingPerms ko result mein add karo
//         for (let j = 0; j < remainingPerms.length; j++) {
//             result.push(currentChar + remainingPerms[j]); // result = ['aw', 'wa']
//         }
//     }

//     return result;
// };

// // Function call karo aur result dekho
// let output = getPermutations("saw");
// console.log(output);
