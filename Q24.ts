// More Conditional Tests: You don’t have to limit the number of tests you
// create to 10. If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and
// less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
 
let string1: string = "hello";
let string2: string = "world";
console.log(string1 === string2); 
console.log(string1 !== string2); 

let mixedCaseString: string = "HelloWorld";
console.log(mixedCaseString.toLowerCase() === "helloworld"); 
console.log(mixedCaseString.toLowerCase() !== "helloworld"); 

let num1: number = 5;
let num2: number = 10;
console.log(num1 === num2); 
console.log(num1 !== num2); 
console.log(num1 > num2); 
console.log(num1 < num2); 
console.log(num1 >= num2); 
console.log(num1 <= num2);

var x: boolean = true;
var y: boolean = false;
console.log(x && y); 
console.log(x || y);

let numbers: number[] = [1, 2, 3, 4, 5];
let searchNumber: number = 3;
console.log(numbers.includes(searchNumber));

let fruits: string[] = ["apple", "banana", "orange"];
let searchFruit: string = "grape";
console.log(!fruits.includes(searchFruit));