import { expect } from 'chai';
import {sum, sub, mult, div} from '../src/main.js'
describe('Calc', () => {

  //smoke tests;


  describe('Somoke Tests', ()=>{

    it('Should exists the method `sum`', ()=>{
      expect(sum).to.exist;
      expect(sum).to.a('function');
    })
    it('Should exists the method `sub`', ()=>{
      expect(sub).to.exist;
      expect(sub).to.a('function');
    })
    it('Should exists the method `mult`', ()=>{
      expect(mult).to.exist;
      expect(mult).to.a('function');
    })
    it('Should exists the method `div`', ()=>{
      expect(div).to.exist;
      expect(div).to.a('function');
    })

  })

  describe("Sum", () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4)
    })
  })
  describe("Sub", () => {
    it('should return 3 when `sub(5,2)`', () => {
      expect(sub(5,2)).to.be.equal(3)
    })
  })
  describe("Mult", () => {
    it('should return 8 when `mult(2,4)`', () => {
      expect(mult(2,4)).to.be.equal(8)
    })
  })
  describe("Div", () => {
    it('should return 6 when `div(12,2)`', () => {
      expect(div(12,2)).to.be.equal(6)
    })
  })


  // let arr;

  // beforeEach( () => {
  //   arr = [1,2,3,4];
  // })


  // it('Should have a size of 5 when push another value to array', () => {
  //   arr.push(5);
  //   expect(arr).to.have.lengthOf(5);
  // })

  // it('Shoud have a size of 3 when pop a value from arry', () => {

  //   arr.pop();
  //   expect(arr).to.have.lengthOf(3);
  // })

  // it('Should remove the value 4 when use pop in the array', () => {
  //   arr.pop();
  //   expect(arr).to.not.include(4);
  //   // expect(arr.pop()).to.equal(4);
  // })

  // it('Should be an array', () => {
  //   expect(arr).to.be.an('Array');
  //   // expect(arr.pop()).to.equal(4);
  // })

  // before( () => {
  //   console.log(' Before');
  // });

  // beforeEach( () => {
  //   console.log(' BeforeEach');
  // })

  // after( () => {
  //   console.log(' After');
  // })
  // afterEach( () => {
  //   console.log(' AfterEach');
  // })



  // describe('Mehod A', function(){
  //   context('Case 1', function(){
  //     it.skip('Should happen blahblah', function(){
  //       throw new Error("Oi, deu erro")
  //     })
  //   })
  //   context('Case 2', function(){
  //     it('Should happen blahblah', function(){

  //     });
  //   })
  //   context('Case 3', function(){
  //     it('Should happen blahblah', function(){
  //       throw new Error("Oi, deu erro2")
  //     })
  //   })
  // })
});
