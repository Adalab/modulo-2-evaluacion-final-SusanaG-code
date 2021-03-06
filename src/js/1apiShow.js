"use strict";

//Global variables
const search = document.querySelector(".js-btn");
const inputElement = document.querySelector(".js-input");
const showList = document.querySelector(".js-list");
let userFavUl = document.querySelector(".js-fav-user");
let show = [];

//Get shows from API
function getShowList(event) {
  // event.preventDefault();
  const userValue = inputElement.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${userValue}`)
    .then((response) => response.json())
    .then((data) => {
      show = data;
      paintShowCard();
      paintFav();
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
    });
}

//Event click on button
search.addEventListener("click", getShowList);

//Paint shows on screen
function paintShowCard() {
  showList.innerHTML = "";
  for (let i = 0; i < show.length; i++) {
    const arrayShowImg = show[i].show.image;
    const arrayShowName = show[i].show.name;
    const arrayShowId = show[i].show.id;

    const newList = document.createElement("li");
    const newContentList = document.createTextNode(arrayShowName);
    newList.appendChild(newContentList);
    showList.appendChild(newList);
    newList.setAttribute("class", "showCard js-shows classFav");
    newList.setAttribute("id", arrayShowId);
    const newImg = document.createElement("img");
    let urlImg = "";
    if (arrayShowImg === null) {
      urlImg = "https://via.placeholder.com/210x295/ffffff/666666/?";
    } else {
      urlImg = arrayShowImg.medium;
    }
    newImg.setAttribute("src", urlImg);
    newImg.setAttribute("alt", "Tv show");
    newList.appendChild(newImg);

    listenToFavorite();
  }
}
