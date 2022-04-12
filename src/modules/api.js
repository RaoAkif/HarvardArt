const baseUrl1 = 'https://api.harvardartmuseums.org/object/?apikey=e5a511af-a178-47eb-85aa-c3bc3a4281b5&classification=Paintings&fields=*&size=6';
const baseUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4RCRuzDbyxrwwon2SF6W';


export default class API {
constructor() {
  this.urls = {
    page: `${baseUrl1}`,
    // page2: `${baseUrl1}/&page=100`,
    // page3: `${baseUrl1}/&page=3`,
    likes: `${baseUrl2}/likes`,
    comments: `${baseUrl2}/comments`,
    newComment: `${baseUrl2}/comments?item_id=`,
  };  
}
  
async get(url) {
    this.urls = url;
    const response = await fetch(url);
    return response.json();
  }

async post(url, data) {
  this.url = url;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });
    const res = await response;
    return res;
  }
}