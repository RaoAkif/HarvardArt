import "./style.css";
import API from "../src/modules/api.js";
import heart from "./assets/emptyheart.svg";

const emptyheart = new Image();
emptyheart.src = heart;

const apiFetch = new API();

const pageOne = apiFetch.get(apiFetch.urls.page).then((artItems) =>
  // Title
  // console.log(artItems.records[0].title)
  // Image
  // console.log(artItems.records[0].url)

  {
    if (artItems.records[1].images && artItems.records[1].images.length > 0) {
      console.log(artItems.records[1].images[0].baseimageurl);
    } else {
      console.log("error");
    }
  }
);
// console.log(artItems))

const artGallery = document.querySelector("#art-gallery");

arts.forEach((art) => {
  artGallery.innerHTML += `
<div class="art">
  <img style="width: 100px; height: 100px;" src=${art.image} alt="repeat-image">
  <div class="art-desc">
    <h3 class="art-title">${art.title}</h3>
    <div class="likes-count">
      <img class='likes-count-icon' src=${emptyheart.src} alt="">
      <h5 class='likes-count-text'>${art.likes} likes</h5>
    </div>
  </div>
  <button>Comments</button>
  <button>Reservations</button>
</div>
`;
});
