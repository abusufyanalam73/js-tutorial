
//globelScope

//var c = 300
let a = 300


if (true) {  // blogScope
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:", a);
}

//for (let i = 0; i < Array.length; i++){
//    const element = Array[i];
//}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Abusufyan"
    function two (){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    //console.log(website);

    two();
}

one();

if(true){
    const username = "Abusufyan"
    if (username === "Abusufyan"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// ++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++


function addone (num){
    return num + 1
}

console.log(addone(5));


console.log(addTwo(5)); // error
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5)); // 7