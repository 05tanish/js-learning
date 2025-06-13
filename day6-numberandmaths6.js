const balance = 4002.233330
console.log(balance)
const bal = new Number (100)
console.log(bal)

// diffrent methods 
console.log(balance.toFixed(2))// to round off number to a particular  value ,mostly used 

console.log(balance.toPrecision(3));/*Returns a string representation of the number in either
  fixed-point or exponential notation depending on its size and the precision requested*/


// +++++++++++++++++++++++++  MATHS +++++++++++++++++++++++++++++

console.log(Math.abs(-223));// here abs means the absolute value 
console.log(Math.round(2.44))// for round off the value 
console.log(Math.ceil(2.333));// for round off the value to top or upper value  
console.log(Math.floor(28.22));// for round off the value to down or leser value 
console.log(Math.min(2,46,6,64)); 

// math library will be mostely used in  importing the random value 


console.log(Math.random()) //This returns a random float between 0 (inclusive) and 1 (exclusive).
console.log(Math.random() *10  ) // it will shift value to left ,  range b/w 0 to 10 
console.log(Math.floor((Math.random() *10)+1)  ) // 1 is added that it does not give output 0  

const max =20;
const min =10

console.log(Math.floor(Math.random() *(max -min +1))+min)//This is the universal formula for generating a random integer in a given range
