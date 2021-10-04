
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