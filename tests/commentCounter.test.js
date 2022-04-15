const displayComments = require('./commentCounter.js');

describe('Comment counter', () => {
  test('Count comments on specific object', async () => displayComments().then((resolve) => {
    expect(resolve.length).toBe(3);
  }));
});