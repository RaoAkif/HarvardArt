import endpoint from "./api.js";

const displayComments = async (object) => {
  const commentList = document.querySelector('.comments-list');
  const fetchComments = await fetch(`${endpoint.newComment}${object.title}`);
  fetchComments.json().then(result => {
    if (result.length > 0) {
      commentList.innerHTML = '';
    }
    for (let i = 0; i < result.length; i += 1) {
      commentList.innerHTML += `<li>${result[i].username}: ${result[i].comment}</li>`
    }
  });
};

export default displayComments;