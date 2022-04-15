import heart from '../assets/fullheart.svg';
import notLiked from '../assets/emptyheart.svg';

const emptyheart = new Image();
emptyheart.src = heart;

const Homepage = async (i, artPieces) => {
  if (artPieces) {
    const artGallery = document.querySelector('#art-gallery');
    artGallery.innerHTML += `
      <div class='art'>
        <img class='art-image' src=${artPieces.records[i].images[0].baseimageurl} alt='repeat-image'>
        <div class='art-desc'>
          <h3 class='art-title'>${artPieces.records[i].title}</h3>
          <div class='likes-count'>
            <img id='art-${artPieces.records[i].id}' class='likes-count-icon' src=${notLiked} alt=''>
            <img class='full-heart default' src=${heart} alt=''>
            <h5 id='art-${artPieces.records[i].id}-like' class='likes-count-text'>0 likes</h5>
          </div>
        </div>
        <button type='button' class='comments-button'>Comments</button>
        <button>Reservations</button>
      </div>
    `;
  }
};

export default Homepage;