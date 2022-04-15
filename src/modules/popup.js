import close from '../assets/close.svg';

const createPopup = (object) => `
  <img class='popup-image' style='max-width: 400px; max-height: 400px;' src=${object.images[0].baseimageurl}>
  <img class='close' src=${close}>
  <h2 class='popup-title'>${object.title}</h2>
  <ul class='image-info'>
    <li class='info-item'>Century: ${object.century}</li>
    <li class='info-item'>Culture: ${object.culture}</li>
    <li class='info-item'>Medium: ${object.medium}</li>
    <li class='info-item'>Link to Image: <a class='link' href=${object.images[0].baseimageurl}>Click Here</a></li>
  </ul>
  <h3 class='comments-title'>Comments</h3>
  <ul class='comments-list'><li>No comments yet!</li></ul>
  <h3>Add a comment</h3>
  <form class='form'>
    <input class='name' type='text' placeholder='Your Name' required>
    <textarea placeholder='Your Comment' class='new-comment' required></textarea>
    <button class='submit' type='button'>Comment</button>
  </form>
`;

export default createPopup;
