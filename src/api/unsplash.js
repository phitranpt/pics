import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
    'Client-ID tFL2VYQdyRhVSqfRC1os0KvXJlPxvMH7JXKNigIEE48'
    }
});