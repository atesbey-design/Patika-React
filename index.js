import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/posts").then(data => console.log(data))