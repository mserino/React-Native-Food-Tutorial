import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({
  title,
  results,
}) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <ResultsDetail
            result={item}
          />
        )}
      />
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
    marginBottom: 10,
    marginLeft: 10,
  }
});

export default ResultsList;
