// unknown type

let userInput: unknown; // restrictive than any you need the type checking before assign
let userName: string;

userInput = 5;
userInput = "Melih";

if(typeof userInput === "string"){
    userName = userInput;
}

// *** The "never" type ***


function generateError(message: string , code: number): never {
    throw {message: message , errorCode: code};
}

// this function never prodeces a value lets check below 

const result = generateError("An error occured" , 500)

console.log(result) // you can't see anything in console
