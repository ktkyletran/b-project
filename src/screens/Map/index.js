import React, {useState} from 'react'
import { Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed'

const Map = () => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={{ width: '100%', height: '100%', }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: '100%', height: '100%', }}
        region={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
    >
    {places.map((place, idx) => (
      <CustomMarker coordinate={place.coordinate} price={place.totalPrice} key={idx} isSelected={place.id === selected} onPress={() => setSelected(place.id)} />
    ))}
    </MapView>
    </View>
  )
}

export default Map
