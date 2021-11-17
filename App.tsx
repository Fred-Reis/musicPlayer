import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Test} from './src/pages/Test';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Test />
    </SafeAreaView>
  );
};

export default App;
