import endpoint from './api.js';

export const getLikes = async () => {
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

export const addLike = async (id) => {
  let likesCount = null;
  try {
    likesCount = await fetch(endpoints.likes, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  } catch (error) {
    return error.message;
  }
  return null || likesCount.ok;
};
