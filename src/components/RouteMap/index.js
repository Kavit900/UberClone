import React from "react";
import {
  View,
  Text,
  Image,
  FlatList
} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

import cars from "../../assets/data/cars";

import config from "../../../config.js";

const RouteMap = (props) => {

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045
  };

  const getImage = (type) => {
    if(type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if(type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  }

  return (
      <MapView
        style={{
          height: '100%',
          width: '100%'
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={config.GOOGLE_PAGES_API_KEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={'Destination'}
      />
      </MapView>
  );
};

export default RouteMap;
