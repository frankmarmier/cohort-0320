// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  // Solution n°1
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
  // Solution n°2
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  return Math.max(num1, num2);
}
// Iteration #2: Find longest word

function findLongestWord(arr) {
  if (arr.length === 0) {
    return null;
  }

  let longestWord = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}

// Iteration #3: Calculate the sum

function sumNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    } else if (typeof arr[i] === "string") {
      sum += arr[i].length;
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers

function averageNumbers(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = sum / arr.length;
  return avg;
}

// Level 2: Array of strings

function averageWordLength(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }

  let avg = sum / arr.length;
  return avg;
}

function avg(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sum += arr[i].length;
    } else {
      sum += arr[i];
    }
  }
  // Solution n°1 for rounding a number.
  //
  let avg = Math.round((sum / arr.length) * 100) / 100;
  // Solution n°2
  /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    number.toFixed(n) allows us to round a number to n decimals.
    toFixed transforms the number into a string, therefore we use
    Number(fixedNumber) to transform the string back into a number
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  */
  // let avg = Number((sum / arr.length).toFixed(2));
  return avg;
}

// Iteration #5: Unique arrays

function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  const uniquifiedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniquifiedArray.indexOf(arr[i]) === -1) {
      uniquifiedArray.push(arr[i]);
    }
  }

  return uniquifiedArray;
}
// Iteration #6: Find elements

function doesWordExist(arr, wordToFind) {
  if (arr.length === 0) {
    return null;
  }

  let found = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === wordToFind) {
      found = true;
      break; // No need to continue the loop if the item is found.
    }
  }

  return found;
}

// Iteration #7: Count repetition
function howManyTimes(arr, word) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }

  return count;
}
// Iteration #8: Bonus

function greatestProduct(matrix) {
  let greatestProduct = 0;
  for (let i = 0; i < matrix.length; i++) {
    // Check if out of borders.
    if (!matrix[i + 3]) {
      break;
    }
    for (let j = 0; j < matrix[i].length; j++) {
      // Check if out of borders.
      if (!matrix[i][j + 3]) {
        break;
      }
      let greatestHorizontal =
        matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];

      let greatestVertical =
        matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];

      if (greatestHorizontal > greatestProduct) {
        greatestProduct = greatestHorizontal;
      }
      if (greatestVertical > greatestProduct) {
        greatestProduct = greatestVertical;
      }
    }
  }
  return greatestProduct;
}
