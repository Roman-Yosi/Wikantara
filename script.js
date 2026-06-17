// Wikantara JavaScript

console.log("Wikantara Loaded");

// Pencarian sederhana

function searchArticle() {

let input =
document.getElementById("search");

if(!input) return;

let keyword =
input.value.toLowerCase();

alert("Mencari: " + keyword);

}

// Dark Mode

function toggleDarkMode() {

document.body.classList.toggle("dark");

}
