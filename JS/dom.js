// Get Element by ID Method

const title4 = document.getElementById("title-4");

/* Styling Title No. 4 ----------------

title4.style.backgroundColor = "darkRed";
title4.style.color = "white";
title4.style.padding = "10px" ; */

// Query Selector All method will select all the "p" tag

const p = document.querySelectorAll("p");

// It'll outputs an array like object, note it- not an array. So, as per rule you have loop through the array like object to use others method related to DOM.

for (let para of p) {
  para.innerText =
    "Vero dignissimos fuga magni, architecto eum quo officia nam suscipit cum inventore debitis. Ullam, beatae. Vero dignissimos fuga magni, architecto eum quo officia nam suscipit cum inventore debitis.";
}

// Another Example of styling an array like object

const blogs = document.getElementsByClassName("blog");

for (let blog of blogs) {
  blog.style.backgroundColor = "aqua";
  blog.style.padding = "12px";
  blog.style.margin = "40px";
  blog.style.color = "darkRed";
  blog.style.fontSize = "22px";
  blog.style.borderRadius = "20px";
}

// Get Attribute Method

let firstParagraph = document.querySelector("#para1");
console.log(firstParagraph.getAttribute("id"));

// Also You can set any Attribute

firstParagraph.setAttribute("class", "paragraph-1");
