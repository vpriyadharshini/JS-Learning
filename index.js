
  //typeof operator in js
  var author="Ruskin Bond";
  var price=677;
  var goodQuality=true;
  console.log(typeof(author),typeof(price),typeof(goodQuality));

//Undefined type
var collection;
console.log(collection);

//Objects
let person={
    name:"Priyadharshini",
    age:21
}
console.log(typeof(person));
console.log(typeof(person.name));

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

/*
Bitwise operators work on 32 bits numbers
& - BITWISE AND

5&1 == 0101 & 0001 == 0001 == 1

| -   BITWISE OR
5 | 1 == 0101 | 0001 ==  0101 ==  5 

~ -  BITWISE NOT
~5 == ~0101 ==1010 ==10*/
// ~4= 0100==1011=11
console.log("BitWise Operator \n ");
console.log(5&1,5|1,~4);


//Boolean Operator
var check1=(5<2)&&(5>3);
console.log("Check for AND Operation: "+check1);

var check2=(5<2)||(5>3);
console.log("Check for OR Operation: "+check2);

var check3=!(5<2);
console.log("Check for NOT Operation: "+check3);

/*
multiplicative operators
The operators * , / , and % are called the multiplicative operators. 
They have the same precedence and are syntactically left-associative (they group left-to-right). */

console.log(3 * 4);
// expected output: 12

console.log(-3 * 4);
// expected output: -12

console.log('3' * 2);
// expected output: 6

console.log('foo' * 2);
// expected output: NaN

//Additive Operator
var x=10;
x+=x;
console.log(x);

var y=10;
y-=1;
console.log(y);

//Relational Operator
console.log("Relational Operator: "+3>4, 5<10);

//Equality Operator
console.log(45=="45") //true
console.log(45==="45")//false  it will check datatype and compare two values.


//Comma Operators
var users=["Meena","Priyaadharshini","Vaishnavi"]
console.log(users);

//If Statement
var isNewToCode=true;
if(isNewToCode){
    console.log("Welcome to beginner Coding Module");
}
else{
    console.log("Welcome to Advanced Coding Module");
}

//Dowhile loop this will be executed atleast one time
var toRun=true;
do{
    console.log("yay!!")
    toRun=false;
}while(toRun===true)

//while Statement
var count=0;
while(count<=10){
    console.log(count);
    count++;
}

//For Loop and labeled statement
forloop:
for (let i = 0; i < 5; i++) {
    console.log("For loop execution, Now count is: "+i);
  }

  //For i loop
  const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property+":"+object[property]);
}

  //Break Keyword
  console.log("Break keyword");
  var num=0;
  while(num<=5){
      console.log(num);
      num++;
      if(num===3){
        break;
      }
  }
  //Continue Keyword
  console.log("Continue Keyword");
 var num1=0;
  while(num1<=5){
    console.log(num1);
    num1++;
    if(num1===3){
        continue;
      }
}
//Switch Statement
var price_=1000;
switch (price_) {
  case 1000:
     console.log("You purchased items for Rs.1000");
    break;
  case 2000:
    console.log("You purchased items for Rs.2000");
    break;
  case 3000:
      console.log("You purchased items for Rs.3000");
      break;
  default:
    console.log("Invalid Price Amount");
}

//functions 
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
var user_Input_temp=77;
console.log("The Conversion from Fahrenheit "+user_Input_temp+" to celsius is "+toCelsius(user_Input_temp));

//Function with arguments and parameters
function Test(mark1,mark2,mark3){
  return (mark1+mark2+mark3)/3;
}
const result=Test(80,50,70);
console.log("The average for marks is: "+result);


//Overloading function in js
function myfunction(x,y) {
  return x*y;
}
function myfunction(z) {
  return z;
}
console.log(myfunction(1,2));
console.log(myfunction(2));

//with Statement
var obj = { position: "Software Developer" };
with (obj) {
  console.log(position); 
}
//This is deprecated and is forbidden in strict mode.
var obj = { position: "Software Developer" };
console.log(obj.position);


//Variables in javascript and also Ternary Operator
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('What is your Age?', candidate_age => {
      var eligibility=candidate_age>=18?"Eligible":"Not Elgible";
    console.log(`Hey there , you're ${eligibility} for Voting!`);
    readline.close();
  });