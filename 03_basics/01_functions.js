
function sayMyName(){
    console.log("A")
    console.log("B")
    console.log("U")
    console.log("S")
    console.log("U")
    console.log("F")
    console.log("Y")
    console.log("A")
    console.log("N")
}

sayMyName();

//function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
//}


function addTwoNumbers(number1, number2) {
    
    //let result = number1 + number2
   // console.log(result);
    //return result
    return number1 + number2
}
addTwoNumbers(3, "4");
addTwoNumbers(3, 5);

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// new way same result 
function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abusufyan"));
// console.log(loginUserMessage("Abusufyan"));

// ... is called rest operator or spread operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Abusufyan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "sam",
    price: 399
});


const myNewArray = [200, 300, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));