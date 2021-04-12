import React from "react";
import {
  View,
  Text,
  Image,
  FlatList
} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from "../../assets/data/cars";

const HomeMap = (props) => {

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
        {cars.map((car)=> (
          <Marker
            key={car.id}
            coordinate={{
              latitude: car.latitude,
              longitude: car.longitude
            }}
          >
            <Image source={getImage(car.type)}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain'
              }}
            />
          </Marker>
        ))}

      </MapView>
  );
};

export default HomeMap;
