// singleton
// Object.create

// object literals

const mySym = Symbol ("key1")

const jsUser = {
    name: "Abusufyan",
    "full name": "abusufyan alam",
    [mySym]: "mykey1",
    age: 18,
    location: "Bihar",
    email: "abusufyan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "abusufyan@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "abusufyan@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
}


jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
