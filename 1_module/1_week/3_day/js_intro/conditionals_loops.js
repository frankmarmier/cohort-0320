// Permissions denied

/*  ———————————— nodemon installation ———————————
mac + linux users   =>  sudo npm i -g nodemon
 windows users => npm i -g nodemon
———————————————————————————— */

/* —————————— FizzBuzz ————————————————

Any number dividable by 3 && 5 => FizzBuzz
Any number dividable by 5 => Buzz
Any number dividable by 3 => Fizz
Else print the number

Loop goes to 100

Any number dividable by 7  => oops  should be a priority

Any number dividable by 2 should add an execlamation to the end of the output
 oops => oops!
FizzBuzz => FizzBuzz!
2!
4!
...
———————————————————————————— */

// for (var i = 1; i < 100; i++) {
//   // true   ||      true  => true.
//   if (i % 7 === 0 && i % 2 === 0) {
//     console.log("oops!");
//   } else if (i % 15 === 0) {
//     if (i % 2 === 0) {
//       console.log("FizzBuzz !");
//     } else {
//       console.log("FizzBuzz");
//     }
//   } else if (i % 3 === 0 && i % 2 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 2 === 0) {
//     console.log("Buzz");
//   } else if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     if (i % 2 === 0) {
//       console.log(i + "!");
//     } else {
//       console.log(i);
//     }
//   }
// }

// for (var i = 1; i < 100; i++) {
//   var value = i;
//   if (i % 7 === 0) {
//     value = "oops";
//   } else if (i % 15 === 0) {
//     value = "FizzBuzz";
//   } else if (i % 3 === 0) {
//     value = "Fizz";
//   } else if (i % 5 === 0) {
//     value = "Buzz";
//   }
//   if (i % 2 === 0) {
//     console.log(value + "!");
//   } else {
//     console.log(value);
//   }
// }

/*
    for, while, do...while, for...of, forEach
*/

let str = "Hello there !";

for (let index = 0; index < str.length; index++) {
  // console.log(str[index]);
  // console.log(str.charAt(index));
}

for (let index = str.length - 1; index >= 0; index--) {
  // console.log(str[index]);
}

let i = 0;
while (i < str.length) {
  // console.log(str[i]);
  i++;
}

let endIndex = str.length - 1;

while (endIndex >= 0) {
  // console.log(str[endIndex]);
  endIndex--;
}

i = 0;
do {
  // console.log(str[i]);
  i++;
} while (i < str.length);

for (let character of str.split("").reverse().join("")) {
  console.log(character);
}

// console.log(str);
// console.log(str.split("").reverse().join(""))