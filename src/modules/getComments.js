const displayComments = async (object) => {
  const commentList = document.querySelector('.comments-list');
  const fetchComments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HsowottdGXfBT3WuTX1i/comments?item_id=${object.id}`
  );
  fetchComments.json().then((result) => {
    if (result.length > 0) {
      commentList.innerHTML = '';
    }
    for (let i = 0; i < result.length; i += 1) {
      commentList.innerHTML += `<li>${result[i].creation_date} ${result[i].username}: ${result[i].comment}</li>`;
    }
  });
};

export default displayComments;
