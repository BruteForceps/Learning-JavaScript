"use strict"; // treat all JS code as newer version of JS, now it is auto in strict mode only

// alert("Hello") // Error bcoz we are using NodeJS not browser

// Code Readability should be high

let name = "krishna" //string datatype
let age = 21 //number
let isLoggedIn = false //boolean

/*
Primitive Datatypes:

number => -2^53 + 1 to 2^53 -1

bigint => to store big numbers like in trading, stock market or for big website with many users

string => ""

boolaen => true/false

null => standalone value as well as a datatype, used to represent empty value
eg. if we request for temperature from server and it sends 0 due to some error, then we won't take 0 bcoz it is also a temperature and print null instead suggesting that we didn't receive any temperature from the server

undefined => when value is not defined

symbol => to identify uniqueness in React, Figma, etc.

Non Primitive Datatype:
object
*/

console.log(typeof "krishna");
console.log(typeof age);
console.log(typeof null); //object
console.log(typeof undefined); //undefined