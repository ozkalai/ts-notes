function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result:" + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
//let combineValue: Function;
var combineValue;
combineValue = add;
// combineValue = printResult
//combineValue = 5;
console.log(combineValue(3, 3)); // in this case after assign the value of 5 to combineValue
// it yells combineValue is not a function.
// to avoid this we are setting the function as type app.ts:11
[];
// we could be more precise regarding how the function should look like and where function types come into play.
addAndHandle(10, 20, function (result) {
    console.log(result);
});
