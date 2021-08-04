function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result:" + num);
}
printResult(add(5, 12)); // printResult has a special return type -> void
// you can check it out hover on printResult function
// The function execute successfully but return anything that what is void type
// the difference between undefined type and void type is technically undefined type expect 
// return even your function does not return anything , void not.
