const user = {
    username: "Abusufyan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
 //user.welcomeMessage();
 //user.username = "sam"
 //user.welcomeMessage();
 //console.log(this);


 //function chai(){
  //  let username = "Abusufyan"
 //   console.log(this.username);
 //}

 //chai();


//  const chai = function (){
// let username = "Abusufyan"
 //   console.log(this.username);
 //}

 //chai();



 const chai =  () => {
    let username = "Abusufyan"
    console.log(this.username);
    console.log(this);
 }

 //chai();


 //const addTwo = (num1, num2) => {
 //   return num1 + num2
 //}

 //console.log(addTwo(3, 4));


 //const addTwo = (num1, num2) => num1 + num2

 // console.log(addTwo(3, 4));


 //const addTwo = (num1, num2) =>( num1 + num2 )

 //console.log(addTwo(3, 4));



 const addTwo = (num1, num2) =>({username: "Abusufyan" })

 console.log(addTwo(3, 4));


 //const myArray = [2, 3, 4, 6, 7, 8]

 //myArray.forEach(() => {})