import fetch from "node-fetch";

import axios from "axios";



(async () => {
    var data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    console.log(data)
})();