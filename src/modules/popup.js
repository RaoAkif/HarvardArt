import close from '../assets/close.svg';

const createPopup = (object) => {
  return `
    <img class="popup-image" src=${object.image}>
    <img class="close" src=${close}>
    <h2 class="popup-title">${object.title}</h2>
    <ul class="image-info">
      <li class="info-item">Date:</li>
      <li class="info-item">Description:</li>
      <li class="info-item">Technique:</li>
      <li class="info-item">Link to Image: <a class="link" href=${object.image}>Click Here</a></li>
    </ul>
    <h3 class="comments-title">Comments</h3>
    <ul class="comments-list">
      <li>Date: Comment</li>
      <li>Date: Comment</li>
    </ul>
    <h3>Add a comment</h3>
    <form>
      <input class="name" type="text" placeholder="Your Name">
      <textarea placeholder="Your Comment" class="new-comment"></textarea>
      <button class="submit" type="submit">Comment</button>
    </form>
  `;
};

export default createPopup;