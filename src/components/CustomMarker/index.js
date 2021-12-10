import React from 'react'
import { View, Text } from 'react-native'
import { Marker } from 'react-native-maps';

const CustomMarker = (props) => {
  const { coordinate, price, onPress, isSelected } = props;

  return (
    <Marker coordinate={coordinate} onPress={onPress} style={{zIndex: isSelected ? 2 : 1}} >
      <View style={{
        backgroundColor: isSelected ? 'black' : 'white',
        padding: 5, borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: isSelected ? 'white' : 'black' }}>${price}</Text>
      </View>
    </Marker>
  )
}

export default CustomMarker