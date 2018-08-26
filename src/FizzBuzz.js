const FizzBuzz = (num) => {
    debugger;
    num = Number(num);
    if(isNaN(num)) return 'Informe um número válido!';
    if(num == 0 ) return 0;
    if((num % 5 == 0) && (num % 15 === 0)) return 'FizzBuzz';
    if(num % 3 === 0) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';
    console.log("Teste: ", typeof num === NaN)
    return num;
}

export default FizzBuzz