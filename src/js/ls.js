'use strict';

function setLocalStorage() {
    localStorage.setItem('fav', JSON.stringify(fav));
}
function getLocalStorage() {
    const favLocalStorage = JSON.parse(localStorage.getItem(fav));
    const favLocalStorageJ = JSON.parse(favLocalStorage)
    if (favLocalStorageJ === null) {
        getShowList();
    } else {
        fav = favLocalStorageJ;
    }
}
getLocalStorage();