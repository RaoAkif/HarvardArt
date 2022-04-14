const displayComments = async (object) => {
  const mockComments = new Promise((resolve, reject) => {
    resolve([
      {
        username: "Emily1",
        comment: "Comment",
      },
      {
        username: "Emily2",
        comment: "Comment",
      },
      {
        username: "Emily3",
        comment: "Comment",
      },
    ]);
    reject([]);
  });
  return await mockComments;
};

module.exports = displayComments;