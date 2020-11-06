"use strict";

const search = document.querySelector(".js-btn");
const inputElement = document.querySelector(".js-input");
const showList = document.querySelector(".js-list");
console.log(showList);
let userFavUl = document.querySelector(".js-fav-user");

let show = [];

function getShowList(event) {
  // event.preventDefault();
  const userValue = inputElement.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${userValue}`)
    .then((response) => response.json())
    .then((data) => {
      show = data;
      paintShowCard();
      paintConsole();
      paintFav();
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
    });
}

search.addEventListener("click", getShowList);

function paintShowCard() {
  showList.innerHTML = "";
  for (let i = 0; i < show.length; i++) {
    const arrayShowImg = show[i].show.image;
    const arrayShowName = show[i].show.name;
    const arrayShowId = show[i].show.id;
    const arrayShowGenre = show[i].show.genres;

    const newImg = createElements(
      arrayShowName,
      arrayShowId,
      arrayShowImg,
      arrayShowGenre
    );

    listenToFavorite();
  }

  function createElements(
    arrayShowName,
    arrayShowId,
    arrayShowImg,
    arrayShowGenre
  ) {
    const newList = document.createElement("li");
    const newContentList = document.createTextNode(arrayShowName);
    const newContentListGenre = document.createTextNode(
      arrayShowGenre.join(" - ")
    );
    newList.appendChild(newContentListGenre);
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
    return newImg;
  }
}

"use strict";

function setLocalStorage() {
  localStorage.setItem("fav", JSON.stringify(fav));
}
function getLocalStorage() {
  const favLocalStorage = localStorage.getItem("fav");
  const favLocalStorageJ = JSON.parse(favLocalStorage);
  if (favLocalStorageJ === null) {
    getShowList();
  } else {
    fav = favLocalStorageJ;
  }
}

getLocalStorage();

'use strict';

const search = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const showList = document.querySelector('.js-list');
let userFavUl = document.querySelector('.js-fav-user');


let show = [];

function getShowList(event) {
    // event.preventDefault();
    const userValue = inputElement.value;
    fetch(`http://api.tvmaze.com/search/shows?q=${userValue}`)
        .then(response => response.json())
        .then(data => {
            show = data;

            paintShowCard();
            paintFav();
        })
        .catch(error => {
            console.error('Se ha producido un error:', error);
        })

}

search.addEventListener('click', getShowList);

function paintShowCard() {
    showList.innerHTML = '';
    for (let i = 0; i < show.length; i++) {

        const arrayShowImg = show[i].show.image;
        const arrayShowName = show[i].show.name;
        const arrayShowId = show[i].show.id;

        const newImg = createElements(arrayShowName, arrayShowId, arrayShowImg);

        listenToFavorite();

    }


    function createElements(arrayShowName, arrayShowId, arrayShowImg) {
        const newList = document.createElement('li');
        const newContentList = document.createTextNode(arrayShowName);
        newList.appendChild(newContentList);
        showList.appendChild(newList);
        newList.setAttribute('class', 'showCard js-shows classFav');
        newList.setAttribute('id', arrayShowId);
        const newImg = document.createElement('img');
        let urlImg = '';
        if (arrayShowImg === null) {
            urlImg = 'https://via.placeholder.com/210x295/ffffff/666666/?';

        } else {
            urlImg = arrayShowImg.medium;
        }
        newImg.setAttribute('src', urlImg);
        newImg.setAttribute('alt', 'Tv show');
        newList.appendChild(newImg);
        return newImg;
    }
}












'use strict';

//query selectors
let fav = [];


//añadir favoritos en un array
function favoriteShows(ev) {
    const clicked = parseInt(ev.currentTarget.id);
    const clickedElement = ev.currentTarget;

    //const indexFav = fav.indexOf(clicked);
    const indexFav = fav.findIndex(favItem => favItem.show.id === clicked)
    const clickFavorite = indexFav !== -1;
    if (clickFavorite === false) {

        const foundShow = show.find(showItem => showItem.show.id === clicked)
        fav.push(foundShow);
        clickedElement.classList.add('showCardRev');

    }
    else {
        fav.splice(indexFav, 1);
        clickedElement.classList.remove('showCardRev');
    }
    paintFav();
    setLocalStorage();

}

function listenToFavorite() {
    const favItems = document.querySelectorAll('.js-shows');
    for (const favItem of favItems) {
        favItem.addEventListener('click', favoriteShows);
    };
}


function paintFav() {
    userFavUl.innerHTML = ''
    for (let i = 0; i < fav.length; i++) {

        const arrayFavImg = fav[i].show.image;
        const arrayFavName = fav[i].show.name;
        const arrayFavId = fav[i].show.id;

        const userFavLi = document.createElement('li');
        const contentFavList = document.createTextNode(arrayFavName);
        userFavLi.appendChild(contentFavList);
        userFavUl.appendChild(userFavLi);
        userFavLi.setAttribute('id', arrayFavId);
        userFavLi.setAttribute('class', 'favLi');
        const userFavImg = document.createElement('img');
        let urlFav = '';
        if (arrayFavImg === null) {
            console.log(arrayFavImg);
            urlFav = 'https://via.placeholder.com/210x295/ffffff/666666/?';


        } else {
            urlFav = arrayFavImg.medium;
        }
        userFavImg.setAttribute('src', urlFav);
        userFavLi.appendChild(userFavImg);
    }
}






'use strict';

function setLocalStorage() {
    localStorage.setItem('fav', JSON.stringify(fav));
}
function getLocalStorage() {
    const favLocalStorage = localStorage.getItem('fav');
    const favLocalStorageJ = JSON.parse(favLocalStorage)
    if (favLocalStorageJ === null) {
        getShowList();
    } else {
        fav = favLocalStorageJ;
    }
}

getLocalStorage();
"use strict";

//# sourceMappingURL=main.js.map
