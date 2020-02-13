import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsList = ({
  title,
  results,
}) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ResultsList;
