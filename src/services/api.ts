import axios from 'axios';
import {Buffer} from 'buffer';
import {authStore} from '../storage/authentication.store';

// import * as SecureStore from 'expo-secure-store';

const spotifyAPI = axios.create({
  baseURL: 'https://accounts.spotify.com/api/token',
});

spotifyAPI.interceptors.request.use(async (config: any) => {
  const token = authStore(state => state.token);

  if (token) {
    config.headers['Content-Type'] = 'application/json';

    config.headers.Authorization = `Basic ${new Buffer(token).toString(
      'base64',
    )}`;
  }

  return config;
});

export default spotifyAPI;
