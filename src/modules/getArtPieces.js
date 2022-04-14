import endpoint from './api.js';

const getArtPieces = async () => {
  let artPieces = null;
  try {
    const response = await fetch(endpoint.page01);
    if (response.ok) {
      const data = await response.json();
      artPieces = data;
      // console.log(artPieces);
    }
  } catch (error) {
    return error.message;
  }
  return artPieces;
};

export default getArtPieces;