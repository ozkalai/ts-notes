function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
        return result;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combineAges = combine(26, 36);
var combineNames = combine("Max", "Anna");
// if you need accept two different kind of values or more in variables or function or ex 
// you can use union types
console.log(combineAges, combineNames);
