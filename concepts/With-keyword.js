//with Statement
var obj = { position: "Software Developer" };
with (obj) {
  console.log(position); 
}
//This is deprecated and is forbidden in strict mode.
var obj = { position: "Software Developer" };
console.log(obj.position);