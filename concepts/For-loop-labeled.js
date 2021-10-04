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