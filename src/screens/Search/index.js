import React, { useState } from 'react'
import { TextInput, View, FlatList, Text, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ResultsRow from './ResultsRow';


const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input */}
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            navigation.navigate('Guests')
          }}
          query={{
            key: '',
            language: 'en',
            types: '(cities)'
          }}
          styles={{
            textInput: styles.input
          }}
          renderRow={(item) => <ResultsRow item={item} />}
          suppressDefaultStyles
          fetchDetails
        />
    </View>
  )
}

export default Search
