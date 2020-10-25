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

