// CaseSensitivity
var string1="HellO";
var string2="hELlo";
var String2="hELlo2";
var checkEqual=string1.toLowerCase()===string2.toLowerCase(); //returns true
console.log("Strings are equal : "+checkEqual);
var checkEqual2=string1.toLowerCase()===String2.toLowerCase(); //returns false
console.log("Strings are equal : "+checkEqual2);