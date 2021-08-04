var userInput; // restrictive than any you need the type checking before assign
var userName;
userInput = 5;
userInput = "Melih";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// this function never prodeces a value lets check below 
var result = generateError("An error occured", 500);
console.log(result);
