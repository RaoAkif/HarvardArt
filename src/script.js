import './style.css';
import createPopup from './modules/popup.js';
import getArtPieces from './modules/getArtPieces.js';
import Homepage from './modules/homepage.js';
import getNewComment from './modules/createComment.js';
import displayComments from './modules/getComments.js';
import { createLikes, displayLikes } from './modules/homepage.js';
import endpoint from './modules/api.js';

const popup = document.querySelector('.popup');

const response = async () => {
  const myresponse = await getArtPieces();
  return myresponse;
};

const display = (myresponse) => {
  let array = [];
  for (let i = 0; i < myresponse.records.length; i += 1) {
    if (
      myresponse.records[i].images &&
      myresponse.records[i].images.length > 0
    ) {
      Homepage(i, myresponse);
      array[array.length] = myresponse.records[i];
    }
  }
  const buttons = document.querySelectorAll('.comments-button');
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
  const displayItemsCount = () => {
    const itemCount = array.length;
    document.getElementById(
      'shows-counter'
    ).innerText = `Art Count: ${itemCount}`;
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
