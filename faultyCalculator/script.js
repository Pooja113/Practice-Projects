let faultNumber = Math.random()
console.log(faultNumber)

let number1 = prompt("First Number");
let number2 = prompt("second Number");
let operator = prompt("What operation you want to perform? ")
if(faultNumber > 0.9) {
  let res
  switch (operator) {
    case "+":
      res = +number1 + +number2 
      console.log(`The result is ${res}`)
      break;
    case "-":
      res = +number1 - +number2 
      console.log(`The result is ${res}`)
      break;
    case "*":
      res = +number1 * +number2 
      console.log(`The result is ${res}`)
        break;
    default:
      res = +number1 / +number2 
      console.log(`The result is ${res}`)
      break;
  }
} else {
  let res
  switch (operator) {
    case "+":
      res = +number1 - +number2 
      console.log(`The result is ${res}`)
      break;
    case "-":
      res = +number1 / +number2 
      console.log(`The result is ${res}`)
      break;
    case "*":
      res = +number1 + +number2 
      console.log(`The result is ${res}`)
        break;
    default:
      res = (+number1) ** +number2 
      console.log(`The result is ${res}`)
      break;
  }
}