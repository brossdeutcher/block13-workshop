// make a new HTML file and connect it to the .js file for this homework
// with the help of dialogBoxes we will collect data from the user:
alert("Welcome User")
//we are sending the message box to the user with the name request
const guest = prompt(`What is your name?`);
//the name is presented with the Hello attached
confirm(" Hello " + guest);
//entering the While loop that will run until the condition is met
while (true) {
    let input = prompt("Please enter a real number (INTEGER)");
    num1 = parseInt(input, 10);
    if (Number.isInteger(num1)) {
        break;
    }
}
//when the condition is an Integer (isInteger) we can break out of our while loop with the break; keyword.
// if the input is a NaN we will continue this while loop because the boolean statement is false.
//but if the parseInt represents an input that is a  "number" we are entereing the next phase

// the next line of code will print out the message and the num1 number.
confirm(" The first numbert you gave me is " + num1);

// same for num2
while (true) {
    let input = prompt("Please enter a second real number (INTEGER)");
    num2 = parseInt(input, 10);
    if (Number.isInteger(num2)) {
        break;
    }
}
confirm(" The second numbert you gave me is " + num2);

//same for num3
while (true) {
    let input = prompt("Please enter a third real number (INTEGER)");
    num3 = parseInt(input, 10);
    if (Number.isInteger(num3)) {
        break;
    }
}
confirm(" The third numbert you gave me is " + num3);
//we will be printing out the entire num1,num2, num3 for the customer.
confirm(`The combination of the numbers you gave me are: ` + num1 + ", " + num2 + ", " + num3)





