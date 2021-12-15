import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const days = 7;

const Post = (props) => {
  const post = props?.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Details', {postId: post.id})
  }
  
  return (
    <Pressable style={styles.container} onPress={goToPostPage}>
      {/* Image */}
        <Image style={styles.image} source={{ uri: post?.image }} />
      {/* Bed & Bedroom */}
        <Text style={styles.bedrooms}>
          {post?.bedroom} {post?.bedroom > 1 ? 'Beds' : 'Bed'} {post?.bathroom} {post?.bathroom > 1 ? 'Bathrooms' : 'Bathroom'}
        </Text>
      {/* Type/Description */}
        <Text style={styles.description} numberOfLines={2}>
          {post?.type} - {post?.title}
        </Text>
      {/* Prices */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post?.oldPrice} </Text>
          <Text style={styles.newPrice}>${post?.newPrice} </Text>
          / Night
        </Text>
        <Text style={styles.totalPrice}>Total - ${post?.newPrice * days}</Text>
    </Pressable>
  )
}

export default Post
