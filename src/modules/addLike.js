const addLike = async (id) => {
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

export default addLike;