import endpoint from './api.js';

const getLikes = async () => {
  let likes = null;
  try {
    const response = await fetch(endpoint.likes);
    if (response.ok) {
      const data = await response.json();
      likes = data
      console.log(likes);
    }
  } catch (error) {
    return error.message;
  }
  return likes;
};

export default getLikes;