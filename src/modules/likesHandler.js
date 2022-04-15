import addLike from './addLike.js';
import endpoint from './api.js';
import getLikes from './getLikes.js';

export const displayLikes = async (endpoint) => {
  const ArtPiecesLikesData = [];
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