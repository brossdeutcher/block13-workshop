// block 13 workshop

// declare a variable with that will have an assigned value
const input = false;

// if statement to determine if the value is truthy or falsy
// "I am a string"	    true
if (Boolean(input)) {
  console.log(true);
// false	              "The boolean value false is falsy"
} else if (input === false) {
  console.log(`The boolean value false is falsy`);
// null	              "The null value is falsy"
} else if (input === null) {
  console.log("The null value is falsy");
// undefined	          "undefined is falsy"
} else if (input === undefined) {
  console.log("undefined is falsy");
// 0	                  "The number 0 is falsy (the only falsy number)"
} else if (input === 0) {
  console.log("The number 0 is falsy (the only falsy number");
// ""	                "The empty string is falsy (the only falsy string)"
} else if (input === "") {
  console.log("The empty string is falsy (the only falsy string)");
}