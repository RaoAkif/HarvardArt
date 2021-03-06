const displayComments = async () => {
  const mockComments = new Promise((resolve, reject) => {
    resolve([
      {
        username: 'Emily1',
        comment: 'Comment',
      },
      {
        username: 'Emily2',
        comment: 'Comment',
      },
      {
        username: 'Emily3',
        comment: 'Comment',
      },
    ]);
    reject(new Error('got an error'));
  });
  return mockComments;
};
module.exports = displayComments;