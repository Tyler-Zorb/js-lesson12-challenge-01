const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () { //creating async function
    const res = await fetch ("https://picsum.photos/v2/list?limit=100"); //providing the function with the API URL.
    const images = await res.json(); //parse the data captured in the res variable using the .json() have to use the await kw.
    console.log(images);
};

getImage();
