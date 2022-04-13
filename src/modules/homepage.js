import heart from "../assets/emptyheart.svg";

const emptyheart = new Image();
emptyheart.src = heart;

const Homepage = async (i, artPieces) => {
  const artGallery = document.querySelector("#art-gallery");
    artGallery.innerHTML += `
    <div class="art">
      <img style="width: 100px; height: 100px;" src=${artPieces.records[i].images[0].baseimageurl} alt="repeat-image">
      <div class="art-desc">
        <h3 class="art-title">${artPieces.records[i].title}</h3>
        <div class="likes-count">
          <img class='likes-count-icon' src=${emptyheart.src} alt="">
          <h5 class='likes-count-text'>5 likes</h5>
        </div>
      </div>
      <button type="button" class="comments-button">Comments</button>
      <button>Reservations</button>
    </div>
  `
};

export default Homepage;