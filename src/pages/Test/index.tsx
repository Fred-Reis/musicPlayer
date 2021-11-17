import {API_BASE} from '@env';
import React, {useEffect} from 'react';

import {Text, View} from 'react-native';

import {authStore} from '../../storage/authentication.store';

export const Test = () => {
  // const [loading, setLoading] = useState(false);

  const token = authStore(state => state.token);
  const setToken = authStore(state => state.setToken);

  useEffect(() => {
    setToken()
      .then(res => console.log('token', res))
      .catch(err => console.log(err));

    console.log('base', API_BASE);
  }, []);

  return (
    <View>
      <Text>{token ? token : 'no token'}</Text>
    </View>
  );
};
