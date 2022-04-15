import './style.css';
import getArtPieces from './modules/getArtPieces.js';
import Homepage, { createLikes, displayLikes } from './modules/homepage.js';
import endpoint from './modules/api.js';
import buttonListeners, { likeListeners } from './modules/listeners';

const popup = document.querySelector('.popup');

const response = async () => {
  const myresponse = await getArtPieces();
  return myresponse;
};

const display = (myresponse) => {
  const array = [];
  for (let i = 0; i < myresponse.records.length; i += 1) {
    if (
      myresponse.records[i].images
      && myresponse.records[i].images.length > 0
    ) {
      Homepage(i, myresponse);
      array[array.length] = myresponse.records[i];
    }
  }
  const emptyHeart = document.querySelectorAll('.likes-count-icon');
  const buttons = document.querySelectorAll('.comments-button');
  const fullheart = document.querySelectorAll('.full-heart');
  buttonListeners(buttons, popup, array);
  likeListeners(emptyHeart, fullheart);
  const displayItemsCount = () => {
    const itemCount = array.length;
    document.getElementById('shows-counter').innerText = `Art Count: ${itemCount}`;
  };
  displayItemsCount();
  displayLikes(endpoint.likes);
  createLikes();
};

const result = async () => {
  await response().then((myresponse) => {
    display(myresponse);
  });
};

result();
