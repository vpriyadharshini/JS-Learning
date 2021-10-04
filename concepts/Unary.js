//Unary Operators
let a = 10;
a = +a; // 10 Unary plus – convert an operand into a number
console.log(a);
a = -a; // -10 Unary minus– convert an operand into a number and negate the value after that
console.log(a)

let f = false,
    t = true;
console.log(+f); // 0
console.log(+t); //1

//prefix postfix
var prefix_postfix=20;
console.log("prefix_postfix\n"+prefix_postfix++);
console.log(++prefix_postfix);