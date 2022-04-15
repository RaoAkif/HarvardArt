const ArtCounter = (className) => {
  const artItems = document.querySelectorAll(className);
  return artItems.length;
};

module.exports = ArtCounter;