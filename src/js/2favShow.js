"use strict";

//query selectors
let fav = [];

//añadir favoritos en un array
function favoriteShows(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const clickedElement = ev.currentTarget;

  //const indexFav = fav.indexOf(clicked);
  const indexFav = fav.findIndex((favItem) => favItem.show.id === clicked);
  const clickFavorite = indexFav !== -1;
  if (clickFavorite === false) {
    const foundShow = show.find((showItem) => showItem.show.id === clicked);
    fav.push(foundShow);
    clickedElement.classList.add("showCardRev");
  } else {
    fav.splice(indexFav, 1);
    clickedElement.classList.remove("showCardRev");
  }
  paintFav();
  setLocalStorage();
}

function listenToFavorite() {
  const favItems = document.querySelectorAll(".js-shows");
  for (const favItem of favItems) {
    favItem.addEventListener("click", favoriteShows);
  }
}

function paintFav() {
  userFavUl.innerHTML = "";
  for (let i = 0; i < fav.length; i++) {
    const arrayFavImg = fav[i].show.image;
    const arrayFavName = fav[i].show.name;
    const arrayFavId = fav[i].show.id;

    const userFavLi = document.createElement("li");
    const contentFavList = document.createTextNode(arrayFavName);
    userFavLi.appendChild(contentFavList);
    userFavUl.appendChild(userFavLi);
    userFavLi.setAttribute("id", arrayFavId);
    userFavLi.setAttribute("class", "favLi");
    const userFavImg = document.createElement("img");
    let urlFav = "";
    if (arrayFavImg === null) {
      console.log(arrayFavImg);
      urlFav = "https://via.placeholder.com/210x295/ffffff/666666/?";
    } else {
      urlFav = arrayFavImg.medium;
    }
    userFavImg.setAttribute("src", urlFav);
    userFavLi.appendChild(userFavImg);
  }
}
