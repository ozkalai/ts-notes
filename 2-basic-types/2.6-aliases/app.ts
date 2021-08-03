// Alias ; you can encode more complex type definitions into your own code , into your own type names
// reusable anywhere in your code where you need exactly this type set up 

// *** TYPE ALIASES & CUSTOM TYPE

type Combinable = number | string
type ConversionDescriber = "as-text" | "as-number"

function combine(input1: Combinable , input2: Combinable , resultConversion: ConversionDescriber) {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result =  +input1 + +input2;
        return result 
    }else {
        return input1.toString() + input2.toString();
    }
}

 const combineAges = combine(26,36, "as-number")
const combineStringAges = combine("26" , "36" , "as-number")
const combineNames = combine("Max" , "Anna" , "as-text")


console.log(combineAges, combineNames , combineStringAges) ;


// *** TYPE ALIASES & OBJECT TYPE 

` Type aliases can be used to "create" your own types. You're not limited to storing union types though
 - you can also provide an alias to a (possibly complex) object type. `

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

//This allows you to avoid unnecessary repetition and manage types centrally.