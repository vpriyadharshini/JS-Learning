
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