const memeForm = document.querySelector("form");
const memePics = document.querySelector(".pics");

memeForm.addEventListener("submit", function(event) {
    event.preventDefault();

const memeLi = document.createElement('li');
memeLi.classList.add("meme-img");

const topText = document.getElementById("t-top");
const inputUrl = document.getElementById('url').value,
src = inputUrl,
img = document.createElement('img');
img.src = src;

// top-text on meme
const topTextMeme = document.createElement('div');
topTextMeme.classList.add("text", "top");
topTextMeme.innerText = document.getElementById("t-text").value;

// bottom-text on meme
const bottomTextMeme = document.createElement('div');
bottomTextMeme.classList.add("text", "bottom");
bottomTextMeme.innerText = document.getElementById("b-text").value;

//removing created meme
const removeMeme = document.createElement('div');
removeMeme.classList.add("delete-x");
removeMeme.innerText = "X";
removeMeme.style.color = "black";

// append
memePics.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextMeme);
memeLi.appendChild(bottomTextMeme);
memeLi.appendChild(removeMeme);

memeForm.reset();
});

function remove(event) {
    event.target.parentNode.remove();
}

memePics.addEventListener('click', remove, false);



