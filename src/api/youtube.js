import axios from 'axios';


const KEY = 'AIzaSyA1DJSZ6XJ-aGA1Bq0VuU3KVrWY_87ecn4';

export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
         part: 'snippet',
         maxResults: 5,
         key: KEY
     }
});