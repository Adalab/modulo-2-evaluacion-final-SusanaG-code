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
            console.log(show);
        })
        .catch(error => {
            console.error('Se ha producido un error:', error);;
        })
    paintShowCard();
    listenToFavorite();
}


search.addEventListener('click', getShowList);

function paintShowCard() {
    const showList = document.querySelector('.js-list');

    for (let i = 0; i < show.length; i++) {

        const arrayShowImg = show[i].show.image.medium;
        const arrayShowName = show[i].show.name;
        const arrayShowId = show[i].show.id;


        //creo Dom advanced
        //lista
        const newList = document.createElement('li');
        const newContentList = document.createTextNode(arrayShowName);
        newList.appendChild(newContentList);
        showList.appendChild(newList);
        newList.setAttribute('class', 'showCard js-fav');
        newList.setAttribute('id', arrayShowId);

        //imagen
        const newImg = document.createElement('img');
        newImg.setAttribute('src', arrayShowImg);

        newImg.setAttribute('alt', 'Tv show');
        newList.appendChild(newImg);

        if (arrayShowImg === null) {
            newImg = 'https://via.placeholder.com/210x295/ffffff/666666/?';
            console.log('imagen');
        } else {
            newImg;
        }
    }

}

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







//# sourceMappingURL=main.js.map
