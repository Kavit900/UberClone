/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const App: () => Node = () => {

  return (
      <HomeScreen />
  );
};


export default App;
