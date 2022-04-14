import heart from "../assets/fullheart.svg";
import addLike from "./addLike.js";
import endpoint from "./api.js";
import getLikes from "./getLikes.js";
import { likes } from "./api.js";

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
          <img id='art-${artPieces.records[i].id}' class='likes-count-icon' src=${emptyheart.src} alt="">
          <h5 id='art-count-${artPieces.records[i].id}' class='likes-count-text'>5 likes</h5>
        </div>
      </div>
      <button type="button" class="comments-button">Comments</button>
      <button>Reservations</button>
    </div>
  `
};

const displayLikes = async (endpoint) => {
  const data = await getLikes(endpoint.likes);
  likes.push(...data);
  console.log(data);
  // search containers for their corresponding id and set their value
  likes.forEach((like) => {
    const likeContainer = document.querySelector(`#art-count-${artPieces.records[i].id}`);
    if (likeContainer) {
      likeContainer.innerText = `${like.likes} likes`;
    }
  });
};

const handleLike = async (eve) => {
  const likeElem = eve.target;
  const artID = likeElem.id;
  console.log(artID);
  await addLike(endpoint.likes, artID);
  displayLikes();
};

export const createLikes = async () => {
  const likesContainers = document.querySelectorAll('.likes-count-icon');
  likesContainers.forEach((likesContainer) => {
    likesContainer.addEventListener('click', handleLike);
  });
};

export default Homepage;