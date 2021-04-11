import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView
} from "react-native";

import styles from './styles.js';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// Import config keys
import config from '../../../config.js';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if(originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder='Where from?'
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBvJ2LYUE7Gx0F8iEQGLXgk8SnrVWkWRAA',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder='Where to?'
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput
          }}
          fetchDetails
          query={{
            key: config.GOOGLE_PAGES_API_KEY,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
