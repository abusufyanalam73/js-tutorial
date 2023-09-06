console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log( "2" > 1);      // true
console.log("02" > 1);      // true

// most of case these type of conversion is Avoding  
console.log( null > 0);     // false
console.log( null == 0);    // false
console.log( null >= 0);    // true

console.log(undefined == 0);   // false
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false


// === (strict equality) => it will check same type (as well as the same value);

// == (loose equality) => the == operator does the type conversion of the operands before comparison,


console.log("2" === 2);

console.log("2" == 2);
