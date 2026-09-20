const likeButton = document.querySelector("#likeButton");

const card = document.querySelector(".card");


likeButton.addEventListener("click", function(){

    card.classList.toggle("liked");


    if(likeButton.textContent === "♡ Like"){

        likeButton.textContent = "♥ Liked";

    } else {

        likeButton.textContent = "♡ Like";

    }

});