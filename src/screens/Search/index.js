import React, { useState } from 'react'
import { TextInput, View, FlatList, Text } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';

import searchData from '../../../assets/data/search'

const Search = () => {
  const [input, setInput] = useState('')
  return (
    <View style={styles.container}>
      {/* Input */}
      <TextInput style={styles.input} placeholder="Search for a destination" value={input} onChangeText={setInput} />
      {/* List of destinations */}
      <FlatList data={searchData} renderItem={({item}) => (
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Ionicons name="location-sharp" size={28} />
          </View>
          <Text style={styles.location}>{item.description}</Text>
        </View>
      )}/>
    </View>
  )
}

export default Search
