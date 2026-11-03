// A function returning a value but has no parameters
// Unusual, as something is generally passed to the function
// for it to use to create a value to return

function getEvenRandDigit() {
  let randNum = 0;

  do {
    randNum = Math.floor(Math.random() * 10);
  } while (randNum % 2);

  return randNum;
}

// Output 10 even random numbers between 0 and 8
for (let i = 0; i < 10; i++) {
  console.log(getEvenRandDigit());
}

// Evaluate function as an operand in an expression
let x=5;
let y = getEvenRandDigit();
console.log(`y=${y}, ${x}+random even = ${x+getEvenRandDigit()}`);