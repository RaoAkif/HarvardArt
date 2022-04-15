import endpoint from './api.js';

const submitComment = async (id, name, comment) => {
  await fetch(endpoint.comments, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

const getNewComment = (object) => {
  const button = document.querySelector('.submit');
  const name = document.querySelector('.name');
  const comment = document.querySelector('.new-comment');
  const commentList = document.querySelector('.comments-list');
  const commentNumber = document.querySelector('.comments-number');
  button.addEventListener('click', () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = String(today.getFullYear());
    submitComment(object.id, name.value, comment.value);
    if (commentList.innerHTML === '<li>No comments yet!</li>') {
      commentList.innerHTML = '';
    }
    commentList.innerHTML += `<li>${yyyy}-${mm}-${dd} ${name.value}: ${comment.value}</li>`;
    name.value = '';
    comment.value = '';
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
  });
};

export default getNewComment;
