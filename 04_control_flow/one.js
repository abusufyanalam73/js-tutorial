//  if
//const isUserloggedIn = true

//if (isUserloggedIn){

//}
// = assigment operator
// <, >, >=, <=, ==, !=, ===

if (2 == "2"){
    console.log("executed")
}


if (2 ==="2"){
    console.log("executed")
}

//const isUserloggedIn = true
//const temperature = 41

//if (temperature === 40){
//   console.log("less than 50");
// } else {
//  console.log("temperature is greater than 50");
//}
//console.log("Execute");


// Block Scope
//const score = 200

//if(score > 100){
//    console.log(`User power: ${power}`);
//}

//console.log(`User power: ${power}`);



// emplicit Scope
const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); // this is not the right way write code

// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");

// } else if (balance < 900){
//     console.log("less than 750");

// }else {
//     console.log("less than 1200");
// }

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}