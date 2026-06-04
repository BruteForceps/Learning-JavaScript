const accountId = 98765
let accountEmail = "krishna@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai" // Bad Practice - Don't use this
let accountState;// If we don't declare a variable's value in JS, it is taken as undefined by default

// accountId = 2 // We are not allowed to change constant's value

//We can change the values in the variables
accountEmail = "skc@gmail.com"
accountPassword = "12121212"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // To print the multiple variable values in a tabular format

/*
Prefer not to use var because of issue in block scope and functional scope.
*/