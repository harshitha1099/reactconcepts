let url= 'https://jsonplaceholder.typicode.com/posts'

async function fetchPosts(){
    let response = await fetch(url)
    let data = await response.json();

    console.log(data);
}

fetchPosts()