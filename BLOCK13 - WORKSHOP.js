// workshop:
// using else if statement we will be declaring a sum statement
// the sum of the numbers will print out the result:


// // declare a sum variable that takes 2 inputs
// let num1 = -1000;
// let num2 = 0;
// // the sum will interract with the 2 num's
// let sum = num1 + num2;
// // the boolean statement will run the if statement with the numbers:
// if (sum < -1000) {
//     // we are expecting the (sum + " is greater than 100"); result to be printed 
//     console.log(` ${sum} is less than -1000 `);
// } else if (sum < 0) {
//     // we are expecting the (sum + " a negative number"); result to be printed 

//     console.log(` ${sum} is a negative number`);
// } else if (sum === 0) {
//     // we are expecting the (sum + " is equal to 0"); result to be printed 

//     console.log(`${sum} is equal to 0`);
// } else if (sum <= 100) {
//     // we are expecting the (sum + " is larger than 0"); result to be printed 

//     console.log(`${sum} is larger than 0`);
// } else {
//     // we are expecting the ( sum + is greater than 100  ); result to be printed 
//     console.log(`${sum} is greater than 100`);
// }


// with the use of the OR || operator we will determine the outcome 
// the code should follow the chart that is given in the practice:
// we will use else/if statement

let param1A = "cake"
let param1B = 'cake'
let param2A = "pie"
let param2B = "true"

if ((param1A === param1B) || (param2A === param2B)) {
    console.log(true)
} else {
    console.log(false)
}