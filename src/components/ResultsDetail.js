import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({
  result,
}) => {
  return (
    <View style={style.layout}>
      <Image style={style.image} source={{ uri: result.image_url }} />
      <Text style={style.name}>{result.name}</Text>
      <Text>{result.rating} stars, {result.review_count} reviews</Text>
    </View>
  );
};

const style = StyleSheet.create({
  layout: {
    marginLeft: 10,
    marginRight: 20,
  },
  image: {
    borderRadius: 4,
    height: 150,
    marginBottom: 5,
    width: 250,
  },
  name: {
    fontWeight: 'bold',
  }
});

export default ResultsDetail;
