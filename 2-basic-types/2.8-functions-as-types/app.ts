function add(n1: number , n2: number ) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result:" + num)
}

function addAndHandle(n1: number , n2: number , cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5 ,12));

//let combineValue: Function;

let combineValue: (a: number , b: number) => number

combineValue = add;
// combineValue = printResult
//combineValue = 5;

console.log(combineValue(3,3)); // in this case after assign the value of 5 to combineValue
// it yells combineValue is not a function.
// to avoid this we are setting the function as type app.ts:11
[]
 
// we could be more precise regarding how the function should look like and where function types come into play.

addAndHandle(10 , 20 , (result) => {
    console.log(result);
    
})


 