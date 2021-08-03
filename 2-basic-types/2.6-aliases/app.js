// Alias ; you can encode more complex type definitions into your own code , into your own type names
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
        return result;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combineAges = combine(26, 36, "as-number");
var combineStringAges = combine("26", "36", "as-number");
var combineNames = combine("Max", "Anna", "as-text");
// literal type is combined union type and specific core type 
console.log(combineAges, combineNames, combineStringAges);
