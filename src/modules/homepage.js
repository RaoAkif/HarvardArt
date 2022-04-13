import heart from "../assets/emptyheart.svg";
import endpoint from "./api.js";
import getArtPieces from './getArtPieces.js'

const emptyheart = new Image();
emptyheart.src = heart;

const Homepage = async () => {
  const artGallery = document.querySelector("#art-gallery");
    const artPieces = await getArtPieces();
    // console.log(artPieces);
    artGallery.innerHTML += `
    <div class="art">
      <img style="width: 100px; height: 100px;" src=${art.image} alt="repeat-image">
      <div class="art-desc">
        <h3 class="art-title">${art.title}</h3>
        <div class="likes-count">
          <img class='likes-count-icon' src=${emptyheart.src} alt="">
          <h5 class='likes-count-text'>5 likes</h5>
        </div>
      </div>
      <button>Comments</button>
      <button>Reservations</button>
    </div>
  `
};

export default Homepage;