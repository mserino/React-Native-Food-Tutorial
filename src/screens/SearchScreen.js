import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [ term, setTerm ] = useState('');
  const [ searchApi, results, errorMessage ] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <Text style={styles.text}>We have found {results.length} results</Text>

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
        <ResultsList
          title="Rich Game"
          results={filterResultsByPrice('$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
  }
});

export default SearchScreen;
