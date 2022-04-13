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
};

const getNewComment = (object) => {
  const button = document.querySelector('.submit');
  const name = document.querySelector('.name');
  const comment = document.querySelector('.new-comment');
  const commentList = document.querySelector('.comments-list');
  button.addEventListener('click', () => {
    submitComment(object.title, name.value, comment.value);
    if (commentList.innerHTML === '<li>No comments yet!</li>') {
      commentList.innerHTML = '';
    }
    commentList.innerHTML += `<li>Just now - ${name.value}: ${comment.value}</li>`;
    name.value = '';
    comment.value = '';
  });
};

export default getNewComment;