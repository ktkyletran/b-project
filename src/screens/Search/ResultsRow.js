import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';

const ResultsRow = ({item}) => (
  <View style={styles.row} >
    <View style={styles.iconContainer}>
      <Ionicons name="location-sharp" size={28} />
    </View>
    <Text style={styles.location}>{item.description}</Text>
  </View>
)

export default ResultsRow
