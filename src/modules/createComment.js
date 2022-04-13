import endpoint from "./api.js";

const submitComment = async (title, name, comment) => {
  const newComment = await fetch(endpoint.comments, {
    method: 'POST',
    body: JSON.stringify({
      item_id: title,
      username: name,
      comment: comment,
    }),
    headers: {
      'Content-type': 'application/json',
    }
  });
  newComment.json().then(result => console.log(result));
};

const getNewComment = (object) => {
  const button = document.querySelector('.submit');
  const name = document.querySelector('.name');
  const comment = document.querySelector('.new-comment');
  button.addEventListener('click', () => {
    submitComment(object.title, name.value, comment.value);
  });
};

export default getNewComment;