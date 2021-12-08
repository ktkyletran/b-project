import React, { useState } from 'react'
import { TextInput, View, FlatList, Text, Pressable } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import searchData from '../../../assets/data/search'

const Search = () => {
  const [input, setInput] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input */}
      <TextInput style={styles.input} placeholder="Search for a destination" value={input} onChangeText={setInput} />
      {/* List of destinations */}
      <FlatList data={searchData} renderItem={({item}) => (
        <Pressable style={styles.row} onPress={() => navigation.navigate('Guests')} >
          <View style={styles.iconContainer}>
            <Ionicons name="location-sharp" size={28} />
          </View>
          <Text style={styles.location}>{item.description}</Text>
        </Pressable>
      )}/>
    </View>
  )
}

export default Search
