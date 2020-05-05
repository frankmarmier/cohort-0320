// Table of truth

// true && true => true
// false && true => false
// false && false =>  false
// true && false => false

// true || true => true
// true || false  => true
// false || true  => true
// false || false  => false

const output = undefined && "toto"; // => undefined
const output2 = true && "toto"; // => toto
const output3 = true || "toto"; // =>  true
const output4 = false || "toto"; // => toto
const output5 = "toto" || true; // => 
const output6 = "toto" || false // => toto
const output7 = "toto" && undefined // => undefined

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);
console.log(output7)
