var user = "Malachi";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here are the latest car reviews";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

//Product Price
var price = 76000, 
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
studentPriceEl.textContent = studentPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

