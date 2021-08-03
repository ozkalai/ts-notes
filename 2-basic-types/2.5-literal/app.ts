function combine(input1: number | string , input2: number | string , resultConversion: "as-text" | "as-number") {
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

// literal type is combined union type and specific core type 

console.log(combineAges, combineNames , combineStringAges) ;
