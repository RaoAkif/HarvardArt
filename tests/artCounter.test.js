/*
 * @jest-environment jsdom
 */


const ArtCounter = require('./artCounter.js');

test('Check number of Art Items', () => {
  document.body.innerHTML = `
    <div class='art'>
      <img class='art-image' alt='repeat-image'>
      <div class='art-desc'>
        <h3 class='art-title'>Title</h3>
        <div class='likes-count'>
          <img id='art' class='likes-count-icon' alt=''>
          <h5 id='art-like' class='likes-count-text'>0 likes</h5>
        </div>
      </div>
      <button type='button' class='comments-button'>Comments</button>
      <button>Reservations</button>
    </div>
    <div class='art'>
      <img class='art-image' alt='repeat-image'>
      <div class='art-desc'>
        <h3 class='art-title'>Title</h3>
        <div class='likes-count'>
          <img id='art' class='likes-count-icon' alt=''>
          <h5 id='art-like' class='likes-count-text'>0 likes</h5>
        </div>
      </div>
      <button type='button' class='comments-button'>Comments</button>
      <button>Reservations</button>
    </div>
  `;
  expect(ArtCounter('.art')).toBe(2);
});