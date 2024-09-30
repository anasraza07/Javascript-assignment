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

// chapter 05
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