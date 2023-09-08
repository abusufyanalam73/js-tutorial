const score = 400 
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));


const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

console.timeLog(Math);
console.timeLog(Math.abs(-4));
console.timeLog(Math.round(4.6) );
console.timeLog(Math.ceil(4.2));
console.timeLog(Math.floor(4.9));
console.timeLog(Math.min(3, 4, 5, 6, 8));
console.timeLog(Math.max(4, 5, 3, 6, 8));

console.timeLog(Math.random());
console.timeLog((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

