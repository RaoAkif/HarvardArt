import endpoint from './api.js';

const getComments = async () => {
  let comments = null;
  try {
    const response = await fetch(endpoint.comments);
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

export default getComments;