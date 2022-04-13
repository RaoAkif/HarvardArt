import endpoint from './api.js';

export const getComments = async (item_id) => {
  let comments = [];
  try {
    const response = await fetch(`endpoint.comments?item_id=${item_id}`);
    if (response.ok) {
      const data = await response.json();
      comments = data
      console.log(comments);
    }
  } catch (error) {
    return error.message;
  }
  return comments;
};


export const createComment = async (name, insight, date) => {
  let allComments = null;
  try {
    const response = await fetch(endpoints.newComment, {
      method: 'POST',
      body: JSON.stringify({
        name,
        insight,
        date,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      allComments = data;
    }
  } catch (error) {
    return error.message;
  }
  return null || allComments;
};
