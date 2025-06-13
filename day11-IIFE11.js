// Immediate invoked function expression (IIFE) 

(function chai() {
    console.log("DB connected");
    
})();

( (name )=> {
    console.log(`db connected ${name}`);
    
})(`hitesh`)
// global scope ka pollution ka vajha sa problem hoti haa kai baar to uska pollution ya varIBLE KO HAtana ka liya use kiya haa
//! imp for interview 
// ! also read about arrow operator from chai with code chanael on youtube 
