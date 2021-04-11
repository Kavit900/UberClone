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
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';

import Icon from 'react-native-vector-icons/dist/FontAwesome';


const App: () => Node = () => {

  return (
    <SearchResults />
  );
};


export default App;
