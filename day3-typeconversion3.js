                                    // *!type conversion 


// *! for number 
let score = "33";
console.log(typeof score);
let conversion = Number(score) // this is simple number so it is converted eaily in number 
console.log(typeof conversion);
console.log(conversion);


let tpe ="33abs"// in this string only number is not there so it will show that it has converted into number 
console.log(typeof tpe);
let cone = Number(tpe) 
console.log(typeof cone);
console.log(cone);// but value  or output of it will be  NaN means (not a number )
// * and for undefined it will be same 




let _score =null
console.log(typeof _score);
let _conversion = Number(_score) 
console.log(typeof _conversion);
console.log(_conversion);// but value  or output of it will be 0


// *! for bolean 
// let islooged_in = 1

// let booleanlogged = Boolean(islooged_in)
// console.log(booleanlogged);

let islooged_in = "" // for empty string 

let booleanlogged = Boolean(islooged_in)
console.log(booleanlogged); //output will be false 


// *! String Conversion
let string_i = 123;
let string_conversion = String(string_i);
console.log(typeof string_conversion); // string
console.log(string_conversion); // "123"


//************************************* operations ******************************************/

//there are common operation like add, multiplty , minus ,divide ,remainder 
console.log(2**2);// means 2 power 2

console.log("1"+2);//*! if first  variable is string then all of the  other variable will be converted into string 
//output will be 12 as 2 is converted into string 

console.log(1+2+"2");
// for this case first number will be added then it wll add with string so output will be 32

//! 📚 Prefix & Postfix Increment / Decrement

let a = 5;

// *! Postfix Increment (a++)
let result1 = a++; 
console.log(result1); // 5 (first return, then increase)
console.log(a);      // 6 (now a is incremented)

// *! Prefix Increment (++a)
a = 5;
let result2 = ++a;
console.log(result2); // 6 (first increase, then return)
console.log(a);       // 6

//**********************************/

// *! Postfix Decrement (a--)
a = 5;
let result3 = a--;
console.log(result3); // 5 (first return, then decrease)
console.log(a);       // 4

// *! Prefix Decrement (--a)
a = 5;
let result4 = --a;
console.log(result4); // 4 (first decrease, then return)
console.log(a);       // 4
