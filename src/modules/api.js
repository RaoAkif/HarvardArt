const baseUrl1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const baseUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4RCRuzDbyxrwwon2SF6W';


constructor() {
  this.urls = {
    artwork: '......',
    likes: `${baseUrl2}/likes`,
    comments: `${baseUrl2}/comments`,
    newComment: `${baseUrl2}/comments?item_id=`,
  };
}
