'use strict';


//query selectors
const favShow = document.querySelectorAll('.js-fav');

let fav;


function favoriteTvShow(ev) {
    const favShowsClicked = ev.currentTarget;
    console.log(favShowsClicked.id);
    // const findFav = show.find(
    //     (series) => {
    //         return series === favShowsClicked.id;
    //     }

    // );
    // console.log(findFav);
}



function listenToFavorite() {
    const favShow = document.querySelectorAll('.js-fav');
    for (const favItem of favShow) {
        favItem.addEventListener('click', favoriteTvShow);

    }
}


