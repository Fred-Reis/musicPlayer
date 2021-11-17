import {CLIENT_ID, CLIENT_SECRET} from '@env';
import create from 'zustand';
import {Buffer} from 'buffer';
import axios from 'axios';

interface AuthType {
  token: string | null;
  setToken: () => Promise<any>;
}

export const authStore = create<AuthType>(set => ({
  token: null,
  setToken: async () => {
    const authentication = await axios(
      'https://accounts.spotify.com/api/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${new Buffer(
            `${CLIENT_ID}:${CLIENT_SECRET}`,
          ).toString('base64')}`,
        },
        data: 'grant_type=client_credentials',
      },
    );

    set({token: await authentication.data.access_token});

    return authentication.data.access_token;
  },
}));
