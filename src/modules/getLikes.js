const getLikes = async (endpoint) => {
  let likes;
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HsowottdGXfBT3WuTX1i/likes'
    );
    if (response.ok) {
      const data = await response.json();
      likes = data;
    }
  } catch (error) {
    return error.message;
  }
  return likes;
};

export default getLikes;
