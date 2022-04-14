const getLikes = async (endpoint) => {
  let likes = null;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      likes = data
    }
  } catch (error) {
    return error.message;
  }
  return likes;
};

export default getLikes;
