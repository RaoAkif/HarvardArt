import close from '../assets/close.svg';

const createPopup = (object) => `
  <div class='image-container' style='width: 100%; height: 410px;
  display: flex; justify-content: center; align-items: center;'>
    <img class='popup-image' style='max-width: 400px; max-height: 400px;' src=${object.images[0].baseimageurl}>
  </div>
  <img class='close' src=${close}>
  <h2 class='popup-title'>${object.title}</h2>
  <ul class='image-info'>
    <li class='info-item'>Century: ${object.century}</li>
    <li class='info-item'>Culture: ${object.culture}</li>
  </ul>
  <h3 class='comments-title'>Comments(<span class='comments-number'></span>)</h3>
  <ul class='comments-list'><li class='comment'>No comments yet!</li></ul>
  <div class='form-container'>
  <h3>Add a comment</h3>
    <form class='form'>
      <input class='name' type='text' placeholder='Your Name' required>
      <textarea placeholder='Your Comment' class='new-comment' required></textarea>
      <button class='submit' type='button'>Comment</button>
    </form>
  </div>
`;

export default createPopup;
