//! when objects are created as literals then its not singelton but when its created by constructor then its singelton 


// objects literal 

const mysyn = Symbol("mykey") //! symbol datatype imp for interview 


const jsuser={
name:"tanish",
age:20,
[mysyn]:"mykey",
email:"xyz@gmail.com",
isloogedin :false,
"phonenumber": "672745723" // see it one time 
}


// two type to acess objects 
console.log(jsuser.age);
console.log(jsuser["email"]);


//! important for interview 
console.log(typeof [mysyn]);
console.log(jsuser[mysyn]);
/* sybol datatype imp for interview  */

 jsuser.email="uyuiq@908821"
 //Object.freeze(jsuser)
jsuser.email="uyuiq@9wehhd08821"
console.log(jsuser);
/*  freeze is just when you cannot make more changes after using it it would 
not give any error but will not work  */


jsuser.greeting= function() {
    console.log("js user llll")
}
console.log(jsuser.greeting);//it will only retun the refrence of function 
console.log(jsuser.greeting())

jsuser.greeting= function() {// its basic concated 
    console.log(`js user lll, ${this.name}`)
}
console.log(jsuser.greeting())


// singelton 

//const newuser= new Object()

// nested objects 
const newuser = {
email : "tanishjain@gmail.com"  ,
fullname:{ 
    userfullname:{
        firstname :"tanish",
        lastname: "jain"
    }
}
// objects also can be nested 
}
console.log(newuser.fullname.userfullname.firstname);// to acess nested objects 


// to join two objects 
const obj1 ={"a":1, "b":2}
const obj2={1:"a",2:"b"}

const obj3 ={obj1, obj2}
// issue here will be that object will be inside object
const obj4 = Object.assign({},obj1,obj2) // issue resolved or can be done by spread operator 


// destructring of objects 
const newdata ={
    name:"tanish",
    email:"tanihd@",
    courseinstructor:"my user"
}

const {courseinstructor:newe}= newdata // destructring  of objects 
console.log(newe);
