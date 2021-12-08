import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = (props) => {
  const post = props?.post;
  
  return (
    <View style={styles.container}>
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
        <Text style={styles.totalPrice}>Total - ${post?.totalPrice}</Text>
    </View>
  )
}

export default Post
