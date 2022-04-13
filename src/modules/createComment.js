import endpoints from './api.js';

const createComment = async (name, insight, date) => {
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
        'Content-type': 'application/json; charset=UTF-8',
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

export default createComment;