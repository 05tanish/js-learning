const arr = [1, 3, 4, 4, 5]
for (const value of arr) {
    console.log(value);
    /*
    here value is just name and arr is object where you have to run loop for 

    basically its for "for of" loop 
    */
}

// for in  loop can be runned on object 

const myubject = {
    js: "javascript",
    cp: "cpp",
    c: "clanguages"
}

for (const key in myubject) {
    console.log(`for ${key} its for ${myubject[key]}`)
};

// for each loop
const coding = [jdjid, cpp, js, cnn]
coding.forEach(function (val) {
    console.log(val);

})

