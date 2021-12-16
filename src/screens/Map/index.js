import React, {useState, useEffect, useRef} from 'react'
import { FlatList, useWindowDimensions, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const Map = (props) => {
  const { posts, locationLat, locationLng } = props;
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
    const index = posts.findIndex(place => place.id === selected);
    flatList.current.scrollToIndex({index})

    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
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
          latitude: locationLat,
          longitude: locationLng,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
    >
    {posts.map((place, idx) => (
      <CustomMarker coordinate={{latitude: place.latitude, longitude: place.longitude}} price={place.newPrice} key={idx} isSelected={place.id === selected} onPress={() => setSelected(place.id)} />
    ))}
    </MapView>

    <View style={{ position: 'absolute', bottom: 10 }}>
      <FlatList
        ref={flatList} 
        data={posts}
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
