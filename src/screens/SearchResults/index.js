import React from "react";
import {View, Text} from "react-native";

import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = (props) => {
  return (
    <View>
      <HomeMap />
      <UberTypes />
    </View>
  );
};

export default SearchResults;
