import getNewComment from './createComment.js';
import displayComments from './getComments.js';
import createPopup from './popup.js';

const buttonListeners = (buttons, popup, array) => {
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
};

export default buttonListeners;

const likeListeners = (emptyHeart, fullheart) => {
  for (let i = 0; i < emptyHeart.length; i += 1) {
    emptyHeart[i].addEventListener('click', () => {
      emptyHeart[i].classList.add('default');
      fullheart[i].classList.remove('default');
    });
  }
};

export { likeListeners };