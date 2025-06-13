console.log("tanish");
const  stringw ="tanish"
console.log(stringw);

name ="tanish"
age= 20
// new way of integertaing string 

console.log(`this is my first progaram my name is  ${ name} and my age is ${age}`);
console.log(name[1]); // to acess the particular key
console.log(stringw.length); // you can  seee length of it 
console.log(stringw.__proto__);// synatx to acess many other method
console.log(stringw.toUpperCase());
console.log(stringw.indexOf('t'));
console.log(stringw.charAt(4 )); 

const newway=stringw.substring(0,4)
console.log(newway);

const anotherstring =stringw.slice(0,4)
console.log(anotherstring);// here you can give negative number thar would start from last



const newname="     tanish        "

console.log(newname);

const trimstring =newname.trim()// it will trim the unwanted space
console.log(trimstring); 


console.log(trimstring.replace("ta",'jj ')); 
console.log(trimstring.includes('t')); 
