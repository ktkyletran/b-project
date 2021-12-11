import React, {useState, useEffect, useRef} from 'react'
import { FlatList, Text, useWindowDimensions, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed'
import PostCarouselItem from '../../components/PostCarouselItem';

const Map = () => {
  const [selected, setSelected] = useState(null);
  const flatList = useRef();
  const mapRef = useRef();
  const width = useWindowDimensions().width;
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const viewChange = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelected(selectedPlace.id)
    }
  });

  useEffect(() => {
    if (!selected || !flatList) return;
    const index = places.findIndex(place => place.id === selected);
    flatList.current.scrollToIndex({index})

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    mapRef.current.animateToRegion(region)
  }, [selected])

  return (
    <View style={{ width: '100%', height: '100%', }}>
      <MapView
      ref={mapRef}
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

    <View style={{ position: 'absolute', bottom: 10 }}>
      <FlatList
        ref={flatList} 
        data={places}
        renderItem={({item}) => <PostCarouselItem post={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 60}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={viewChange.current}
      />
    </View>
    </View>
  )
}

export default Map
