import './style.css';
import createPopup from './modules/popup.js';
import getArtPieces from './modules/getArtPieces.js';
import Homepage, { createLikes, displayLikes } from './modules/homepage.js';
import getNewComment from './modules/createComment.js';
import displayComments from './modules/getComments.js';
import endpoint from './modules/api.js';

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
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      popup.innerHTML = createPopup(array[i]);
      popup.classList.remove('default');

      const close = document.querySelector('.close');
      close.addEventListener('click', () => {
        popup.classList.add('default');
      });

      getNewComment(array[i]);
      displayComments(array[i]);
    });
  }
  for (let i = 0; i < emptyHeart.length; i += 1) {
    emptyHeart[i].addEventListener('click', () => {
      emptyHeart[i].classList.add('default');
      fullheart[i].classList.remove('default');
    });
  }
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