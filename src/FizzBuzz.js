const FizzBuzz = (num) => {
  if (isNaN(num)) {
    return 'Informe um número válido!';
  } else if (num === 0) {
    return 0;
  } else if ((num % 5 === 0) && (num % 15 === 0)) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
};

export default FizzBuzz;
