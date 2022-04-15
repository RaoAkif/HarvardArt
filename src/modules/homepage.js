import heart from '../assets/fullheart.svg';
import notLiked from '../assets/emptyheart.svg';
import addLike from './addLike.js';
import endpoint, { ArtPiecesLikesData } from './api.js';
import getLikes from './getLikes.js';

const emptyheart = new Image();
emptyheart.src = heart;

const Homepage = async (i, artPieces) => {
  if (artPieces) {
    const artGallery = document.querySelector('#art-gallery');
    artGallery.innerHTML += `
      <div class='art'>
        <img class='art-image' src=${artPieces.records[i].images[0].baseimageurl} alt='repeat-image'>
        <div class='art-desc'>
          <h3 class='art-title'>${artPieces.records[i].title}</h3>
          <div class='likes-count'>
            <img id='art-${artPieces.records[i].id}' class='likes-count-icon' src=${notLiked} alt=''>
            <img class='full-heart default' src=${heart} alt=''>
            <h5 id='art-${artPieces.records[i].id}-like' class='likes-count-text'>0 likes</h5>
          </div>
        </div>
        <button type='button' class='comments-button'>Comments</button>
        <button>Reservations</button>
      </div>
    `;
  }
};

export const displayLikes = async (endpoint) => {
  const data = await getLikes(endpoint.likes);
  ArtPiecesLikesData.push(...data);
  ArtPiecesLikesData.forEach((likeData) => {
    const likesCounter = document.querySelector(`#${likeData.item_id}-like`);
    if (likesCounter) {
      likesCounter.innerText = `${likeData.likes} likes`;
    }
  });
};

const handleLike = async (event) => {
  const heartId = event.target;
  const artId = heartId.id;
  await addLike(endpoint.likes, artId);
  displayLikes(endpoint.likes);
};

export const createLikes = async () => {
  const likeButtons = document.querySelectorAll('.likes-count-icon');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', handleLike);
  });
};

export default Homepage;
