let userInput: unknown; // restrictive than any you need the type checking before assign
let userName: string;

userInput = 5;
userInput = "Melih";

if(typeof userInput === "string"){
    userName = userInput;
}


