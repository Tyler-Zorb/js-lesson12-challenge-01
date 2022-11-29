const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () { //creating async function
    const res = await fetch ("https://picsum.photos/v2/list?limit=100"); //providing the function with the API URL.
    const images = await res.json(); //parse the data captured in the res variable using the .json() have to use the await kw.
    //console.log(images); (this was from the first part just logging it to see if it worked so commented it out.)
    selectRandomImage(images); //calling the selectRandomImage function which is right below this and passing images as an argument.
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length); //this is making the random number to round down which the Math.floor does that, then I have to multiply the math.random by the length of the images.
    //console.log(randomIndex);  this was to see if the code was pulling a random number between 0-99 which it is so commenting it out.
    const randomImage = images[randomIndex]; //this variable uses randomIndex to grab a single image from the images array.
    //console.log(randomImage);   this was to log out the randomImage to make sure it's working which it is. So commented it out.
    displayImage(randomImage); //calling the displayImage function here with the randomImage var as an argument.
};

const displayImage = function (randomImage) {
    const author = randomImage.author; //this variable is accessing the author property from the randomImage object. Same for the variable imageAddress below this.
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author; //here I'm changing the innerText of the authorSpan element to the value of the author variable.
    img.src = imageAddress; //here I'm setting the src attribute of the img var to the value of the imageAddress var.
    imgDiv.classList.remove("hide"); //here I'm removing the hide class from the imgDiv element.
};

button.addEventListener("click", function () {
    getImage(); //this will show final results. To see them open the index.html in chrome, click top right buttons and go to Developer Tools, then open the Console tab. I moved this into the click event when it was below it all because now the program wont retreive the API data until the button is clicked.
});


