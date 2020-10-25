'use strict';

const search = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const showList = document.querySelector('.js-list');


let show = [];

function getShowList(event) {
    event.preventDefault();
    const userValue = inputElement.value;
    fetch(`http://api.tvmaze.com/search/shows?q=${userValue}`)
        .then(response => response.json())
        .then(data => {
            show = data;
        })
        .catch(error => {
            console.error('Se ha producido un error:', error);;
        })
    paintShowCard();

}


search.addEventListener('click', getShowList);

function paintShowCard() {

    for (let i = 0; i < show.length; i++) {

        const arrayShowImg = show[i].show.image.medium;
        const arrayShowName = show[i].show.name;
        const arrayShowId = show[i].show.id;

        const newImg = createElements(arrayShowName, arrayShowId, arrayShowImg);

        if (arrayShowImg === null) {
            newImg = 'https://via.placeholder.com/210x295/ffffff/666666/?';
            console.log('imagen');
        } else {
            newImg;
        }
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
        newImg.setAttribute('src', arrayShowImg);
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

    const clicked = ev.currentTarget.id;
    const clickedElement = ev.currentTarget;


    const indexFav = fav.indexOf(clicked);
    const clickFavorite = indexFav !== -1;
    if (clickFavorite === false) {
        fav.push(clicked);
        clickedElement.classList.add('showCardRev');


    }
    else {
        fav.splice(indexFav, 1);
        clickedElement.classList.remove('showCardRev');
    }

}



function listenToFavorite() {
    const favItems = document.querySelectorAll('.js-shows');
    for (const favItem of favItems) {
        favItem.addEventListener('click', favoriteShows);
    };
}



 // setInLocalStorage();






//# sourceMappingURL=main.js.map
