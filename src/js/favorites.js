'use strict';


//query selectors
let fav = [];

//añadir favoritos en un array
function favoriteShows(ev) {
    let classFav;
    const clicked = ev.currentTarget.id;
    console.log(clicked);

    const indexFav = fav.indexOf(clicked);
    const clickFavorite = indexFav !== -1;
    if (clickFavorite === false) {
        fav.push(clicked);

    }
    else {
        fav.splice(indexFav, 1);
    }

}



function listenToFavorite() {
    const favItems = document.querySelectorAll('.js-shows');
    for (const favItem of favItems) {
        favItem.addEventListener('click', favoriteShows);
    };
}



 // setInLocalStorage();

