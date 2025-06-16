const map = new Map ()
map.set("name","tanish")
map.set("suuu","ronaldo")
console.log(map);


/* map is  of object data type 
map is identified for unique values (means for no repetation of data )
map is  always placed in order in which it has came */


for (const key of map) {
    console.log(key);
}
// here whole array will  be returned not just key 

for (const [key,value] of map) {
    console.log(key);
    
}
// here it will destructure the array by just using "[]" square bracket 
// maps are itterable but objects are also iterable but like this way 

const object ={
 'key':"value",
 'tnisj':"sgdbfh"
}

for (const [key,value] of object) {
    console.log(key);
    // here problem will arise as object are also iterable but not like map are iterated 
}


