// // Why we use TS ? 

// const button = document.querySelector("button")
// const input1 = document.getElementById("num1")
// const input2 = document.getElementById("num2")

// function add(num1, num2) {
//     return num1 + num2 
// }

// button.addEventListener("click" , function() {
//     console.log(add(input1.value , input2.value))
// } )

// // when you reach the value of input , you  can see no matter what is the type of input it always string
// // if you concat two string they concateneted instead of added mathematically


// // We can write vanilla js code like below to handle with error 

// function add(num1, num2) {
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         return num1 + num2 
//     }
//     else {
//         return +num1 + +num2
//     }
// }

// button.addEventListener("click" , function() {
//     console.log(add(input1.value , input2.value))
// } )

// // We want to handle with this error without if statement so TS can help us 

// // 