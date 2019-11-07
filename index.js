const fizzBuzz = num => {
  // write logic for nums divisible by 3 and 5
  if (num % 5 === 0 && num % 3 === 0) {
    return "fizzbuzz";
  }
  // write logic for nums divisible by 3
  if (num % 3 === 0) {
    return "fizz";
  }
  // write logic for num divisible by 5
  if (num % 5 === 0) {
    return "buzz";
  } else {
    return num;
  }
};

module.exports = {
  fizzBuzz
};
