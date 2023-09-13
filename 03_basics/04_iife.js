// Immediately Invoked Function Expressions (IIFE)



(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);

}) ();
//chai();
// global scope like..variable, kai pollution ko hatane k liye iife use karte hai.

( function aurcode() {
    console.log(`DB CONNECTED TWO`);
} ) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('Abusufyan')