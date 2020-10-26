"use strict";const search=document.querySelector(".js-btn"),inputElement=document.querySelector(".js-input"),showList=document.querySelector(".js-list");let userFavUl=document.querySelector(".js-fav-user"),show=[];function getShowList(e){const t=inputElement.value;fetch("http://api.tvmaze.com/search/shows?q="+t).then(e=>e.json()).then(e=>{show=e,paintShowCard(),paintFav()}).catch(e=>{console.error("Se ha producido un error:",e)})}function paintShowCard(){showList.innerHTML="";for(let t=0;t<show.length;t++){const o=show[t].show.image;e(show[t].show.name,show[t].show.id,o);listenToFavorite()}function e(e,t,o){const s=document.createElement("li"),n=document.createTextNode(e);s.appendChild(n),showList.appendChild(s),s.setAttribute("class","showCard js-shows classFav"),s.setAttribute("id",t);const a=document.createElement("img");let c="";return c=null===o?"https://via.placeholder.com/210x295/ffffff/666666/?":o.medium,a.setAttribute("src",c),a.setAttribute("alt","Tv show"),s.appendChild(a),a}}search.addEventListener("click",getShowList);let fav=[];function favoriteShows(e){const t=parseInt(e.currentTarget.id),o=e.currentTarget,s=fav.findIndex(e=>e.show.id===t);if(!1===(-1!==s)){const e=show.find(e=>e.show.id===t);fav.push(e),o.classList.add("showCardRev")}else fav.splice(s,1),o.classList.remove("showCardRev");paintFav(),setLocalStorage()}function listenToFavorite(){const e=document.querySelectorAll(".js-shows");for(const t of e)t.addEventListener("click",favoriteShows)}function paintFav(){userFavUl.innerHTML="";for(let e=0;e<fav.length;e++){const t=fav[e].show.image,o=fav[e].show.name,s=fav[e].show.id,n=document.createElement("li"),a=document.createTextNode(o);n.appendChild(a),userFavUl.appendChild(n),n.setAttribute("id",s),n.setAttribute("class","favLi");const c=document.createElement("img");let i="";null===t?(console.log(t),i="https://via.placeholder.com/210x295/ffffff/666666/?"):i=t.medium,c.setAttribute("src",i),n.appendChild(c)}}function setLocalStorage(){localStorage.setItem("fav",JSON.stringify(fav))}function getLocalStorage(){const e=localStorage.getItem("fav"),t=JSON.parse(e);null===t?getShowList():fav=t}getLocalStorage();