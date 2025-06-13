const  teperature = 80
if (teperature>50){
    const power = "fly"
    var good ="yaaa"
    console.log(`power is way good ${power}`);
    
}
//console.log(`way good ${power}`); // here power cannot be acessed as due to global scope
console.log(good); // here you can acess good as due to var  has global scope that can raise issue 


const month = "jan"
switch (month) {
    case "jan":
        console.log("jan");
        
        break;

    default: console.log("not  matched ");
    
        break;
}

//! see it one time 
// nullish coalescing operator (??): null undefined 
let val1;
val1= 5 ?? 10
//val1= null ?? 10
console.log(val1);
 
//terneary operators 

