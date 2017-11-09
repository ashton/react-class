import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCxdovzJJDqel8q0vc3OkT54U_L1wLT1SE';

const youtubeSearch = (term) => {
    return new Promise((resolve, reject) => {
        YTSearch({key: API_KEY, term}, (videos) => {
            setTimeout(() => {
                resolve(videos);
            }, 2000);
      });
    });
};

export default youtubeSearch;
