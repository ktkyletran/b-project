import React from 'react'
import { Text, View } from 'react-native'
import PostDetails from '../../components/PostDetails'
import { useRoute } from '@react-navigation/native'
import places from '../../../assets/data/feed'


const Details = () => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);
  return (
    <View style={{ backgroundColor: 'white' }}>
      <PostDetails post={post} />
    </View>
  )
}

export default Details
