const { Form } = require("react-router-dom")

const arr =[1,2,3,5,6]// basic array 
//!JavaScript arrays are resizable and can contain a mix of different data types.
//!JavaScript array-copy operations create shallow copies. 

const arre = ["tanish" , "rahul", 1,3 ,4.3 ]
console.log(arr[0])

console.log(arre[ 4])

console.log(arr) // to print full array 
//  ****************************** array method ****************************

arr.push (2) // to add in array 
console.log(arr.length)

arr.pop()// Removes the last element from an array and returns it.
//If the array is empty, undefined is returned and the array is not modified

arr.unshift(9)//Inserts new elements at the start of an array, and returns the new length of  the array.
arr.shift () //Removes the first element from an array and returns 

console.log(arr.includes(3))
console.log(arr.indexOf(3))

const newarr = arr.join() // Adds all the elements of an array into a new arr but converted it to string 

//! imp about interview for slice and splice concept 
 
 const n1 = arr.slice(1,4) // end specifide will be not used 
 //! slice only return changes done in  copy of array does not  manuplate the real array 
 console.log(n1 );
console.log(arr );

const n2 = arr.splice(1,3)
console.log(n2 );
console.log(arr );
//! while splice manuplate the real array 


const marvels = ["ironman" ,"hulk", "thor"]
const dc = ["superman", "batman","joker"]

marvels .push(dc) 
console.log(marvels);
console.log(marvels[3][1] ); 
/*
main problem would be that dc would be pushed as one element as it take any input 
bascially array inside array situation
it can work on existing array 

*/ 


 const allheros = marvels.concat(dc)
 console.log(allheros);
// concat Combines two or more arrays. This method returns a new array without modifying any existing arrays.


const newheroes = [...marvels, ...dc]
console.log(newheroes);
/* 
"..." operator is spread operator that is used to seperate all the heroes it wll be not array all elements will be 
indivisual element 
we can add many element in this but there is limit on concat operator 
*/ 

const n2aray = [1,2,4,[3,4,5,5],35,8,[24,6,8,0,5,[4,6,89,68,9]]]
const n3array = n2aray.flat(2)
console.log(n3array)
/*  Returns a new array with all sub-array elements concatenated into it 
recursively up to the specified depth.  */

console.log(Array.from({name:"tanish"}));
/*//!look  it for interview 
in this case it will  return an empty bracket
if it failed to convert it to array
basically ya ik empty bracket return karega agar vo array ko convert nahi kar paya too huma batna padega ki
konsi key ya value ko string ma convert karna haa
*/

let score1 =100
let score2 = 200
console.log(Array.of(score1,score2));
