const displayComments = require('./mock/commentCounter.js');

describe('Comment counter', () => {
  test('Count comments on specific object', async () => {
    return displayComments().then((resolve) => {
      expect(resolve.length).toBe(3);
    });
  });
});