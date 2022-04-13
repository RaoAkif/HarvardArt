const baseUrl1 = 'https://api.harvardartmuseums.org/object/?apikey=e5a511af-a178-47eb-85aa-c3bc3a4281b5&classification=Paintings&fields=*&size=10';
const baseUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4RCRuzDbyxrwwon2SF6W';

const endpoint = {
    page01: `${baseUrl1}`,
    likes: `${baseUrl2}/likes`,
    comments: `${baseUrl2}/comments`,
    newComment: `${baseUrl2}/comments?item_id=`,
  }

export default endpoint;