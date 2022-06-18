import axios from "axios";


async function getData(usersId) {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + usersId);
    const { post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + usersId);



    return console.log(data),
        console.log(post);


}

getData(2)