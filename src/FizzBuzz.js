const FizzBuzz = (num) => {
  const number = Number(num);
  if (isNaN(number)) {
    return 'Informe um número válido!';
  } else if (number === 0) {
    return 0;
  } else if ((number % 5 === 0) && (number % 15 === 0)) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  }

  return number;
};

export default FizzBuzz;
