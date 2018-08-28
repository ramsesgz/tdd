/*
    Desafio FizzBuzz
    Escreva uma lib que receba um número e:
    Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
    Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
    Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
    Se não for múltiplo de nada, retorna o número
*/

import { expect } from 'chai';
import FizzBuzz from '../src/FizzBuzz';

describe('FizzBuzz', () =>{

    it('Should return `Fizz` if {num} is multiple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz')
    });
    it('Should return `Buzz` if {num} is multiple of 5', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz')
        expect(FizzBuzz(10)).to.be.equal('Buzz')
    });

    it('Should return `FizzBuzz` if {num} is multiple of 3 and 5', () => {
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
    });

    it('Should return the number when non-multiple', () => {
        expect(FizzBuzz(2)).to.be.equal(2);
        expect(FizzBuzz(11)).to.be.equal(11);
        expect(FizzBuzz(.1)).to.be.equal(.1);
        expect(FizzBuzz(10.5)).to.be.equal(10.5);
        expect(FizzBuzz('0')).to.be.equal(0);
    });

    it('Should return `Informe um número válido!` when `value` is NaN', () => {
        expect(FizzBuzz('a')).to.be.equal('Informe um número válido!');
        expect(FizzBuzz()).to.be.equal('Informe um número válido!');
    })

})
