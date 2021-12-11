import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const PostCarouselItem = (props) => {
  const post = props?.post;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Details', {postId: post.id})
  }
  
  return (
    <Pressable style={[styles.container, { width: width - 60 }]} onPress={goToPostPage}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: post?.image }} />

        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={styles.bedrooms}>
            {post?.bedroom} {post?.bedroom > 1 ? 'Beds' : 'Bed'} {post?.bathroom} {post?.bathroom > 1 ? 'Bathrooms' : 'Bathroom'}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post?.type} - {post?.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${post?.newPrice} </Text>
            / Night
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PostCarouselItem
