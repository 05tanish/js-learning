//console.log(); -> it prints the data inside it 
//console.dir();-> it print the method and properties of document 

/*
dom is like model which is created when browser loads he page 
! when script is loded first then  body than dom element are not acessible 
*/
const email= document.querySelector("p"); // it returns one 
console.dir(email);

let all = document.querySelectorAll("p") // for selecting all elements 

// query selector returns node 

// 🌐 1. WHAT IS DOM?
// DOM stands for Document Object Model.
// It's a tree-like structure of the HTML page created by the browser.
// JavaScript uses DOM to access and manipulate HTML and CSS dynamically.

console.log(document); // Shows the entire DOM structure in the console
// 🧱 2. ACCESSING ELEMENTS

// By ID
let title = document.getElementById("main-title");
console.log(title); // <h1 id="main-title">Hello DOM</h1>

// By Class Name
let para = document.getElementsByClassName("text");
console.log(para[0]); // returns a collection, use index

// By Tag Name
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

// By Query Selector (CSS style)
let btn = document.querySelector("#clickBtn"); // selects first match
let allPs = document.querySelectorAll("p"); // selects all p tags
// 🧬 3. CHANGING CONTENT

// Change inner text
title.innerText = "Welcome to DOM";

// Change HTML inside an element
title.innerHTML = "<span>DOM Manipulated!</span>";
// 🎨 4. STYLING ELEMENTS

// Inline style
title.style.color = "red";
title.style.backgroundColor = "yellow";
// 🔘 5. ADDING EVENT LISTENERS

btn.addEventListener("click", function () {
  alert("Button was clicked!");
});
// 🛠️ 6. CREATING AND ADDING ELEMENTS

// Create a new element
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph";

// Append to body
document.body.appendChild(newPara);

// Remove element
document.body.removeChild(newPara); // removes it
// ♻️ 7. CHANGING ATTRIBUTES

let image = document.createElement("img");
image.setAttribute("src", "https://via.placeholder.com/100");
image.setAttribute("alt", "Placeholder Image");

document.body.appendChild(image);
// 📂 8. DOM TRAVERSAL

let parent = title.parentElement; // get parent node
let children = document.body.children; // all direct children
let firstChild = document.body.firstElementChild; // first child
let nextElement = title.nextElementSibling; // next sibling
