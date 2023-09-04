const accountId = 144553
let accountEmail = "abusufyan@google.com"
var accountPassword = "12345"
accountCity = "Bihar"
let accountState;

//accountId = 2 // not allowed
// what is scope ==> {......} scope is in curlybracec

accountEmail = "abu@gmail.com"
accountPassword = "21212121"
accountCity = "Araria"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope.
*/

 console.table([accountId, accountPassword, accountEmail, accountCity, accountState]);