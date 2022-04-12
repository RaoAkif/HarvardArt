import './style.css';
import heart from './assets/emptyheart.svg';
import createPopup from './modules/popup.js';

const emptyheart = new Image();
emptyheart.src = heart;

const arts = [
  {
    title: 'Alhamra',
    image: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/alhamra.png',
    likes: '4',
  },
  {
    title: 'Alhamra',
    image: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/alhamra.png',
    likes: '4',
  },
  {
    title: 'Alhamra',
    image: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/alhamra.png',
    likes: '4',
  },
  {
    title: 'KLF',
    image: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/klf.png',
    likes: '4',
  },
  {
    title: 'LLF',
    image: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/llf.png',
    likes: '4',
  },
  {
    title: 'PU',
    image: 'https://raw.githubusercontent.com/RaoAkif/ConferencePage/main/images/partners/pu.png',
    likes: '4',
  },
];

const artGallery = document.querySelector('#art-gallery');

arts.forEach((art) => {
  artGallery.innerHTML += `
<div class="art">
  <img style="width: 100px; height: 100px;" src=${art.image} alt="repeat-image">
  <div class="art-desc">
    <h3 class="art-title">${art.title}</h3>
    <div class="likes-count">
      <img class='likes-count-icon' src=${emptyheart.src} alt="">
      <h5 class='likes-count-text'>${art.likes } likes</h5>
    </div>
  </div>
  <button class="comments-button">Comments</button>
  <button>Reservations</button>
</div>
`;
});

const popup = document.querySelector('.popup');
const buttons = document.querySelectorAll('.comments-button');

for(let i = 0; i < arts.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    popup.innerHTML = createPopup(arts[i]);
    popup.classList.remove('default');

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      popup.classList.add('default');
    });
  });
}
