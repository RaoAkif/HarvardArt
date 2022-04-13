import './style.css';
import heart from './assets/emptyheart.svg';
import createPopup from './modules/popup.js';
import getArtPieces from './modules/getArtPieces.js';
import Homepage from "./modules/homepage.js";

const popup = document.querySelector('.popup');

const response = async () => {
  const myresponse = await getArtPieces();
  return myresponse;
}

const result = async () => {
  await response().then(myresponse => {
    let array = [];
    for (let i = 0; i < myresponse.records.length; i += 1) {
      if (myresponse.records[i].images && myresponse.records[i].images.length > 0) {
        Homepage(i, myresponse);
        array[array.length] = myresponse.records[i];
      }
    }
    const buttons = document.querySelectorAll('.comments-button');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', () => {
        popup.innerHTML = createPopup(array[i]);
        popup.classList.remove('default');
        
        const close = document.querySelector('.close');
        close.addEventListener('click', () => {
          popup.classList.add('default');
        });
      });
    }
  });
}

result();

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

const buttons = document.querySelectorAll('.comments-button');

for(let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    popup.innerHTML = createPopup(arts[i]);
    popup.classList.remove('default');

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      popup.classList.add('default');
    });
  });
}