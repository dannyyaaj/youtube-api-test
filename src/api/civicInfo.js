import axios from 'axios';

const repInfoByAddress = axios.create({
  baseURL: 'https://www.googleapis.com/civicinfo/v2',
  params: {
    includeOffices: true,
    levels: 'administrativeArea1',
    roles: 'legislatorLowerBody',
    key: process.env.REACT_APP_GOOGLE_API
  }
});

export { repInfoByAddress };