import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  return (
    <View>
      {/* Search Bar */}
      <Pressable style={styles.searchButton} onPress={() => console.warn( 'search clicked' )}>
        <FontAwesome name="search" size={24} color="#f15454" />
        <Text style={styles.searchText}> Choose A Destination</Text>
      </Pressable>

      <ImageBackground  source={require('../../../assets/images/wallpaper.jpg')}  style={styles.image}>
        <Text style={styles.title}>
          Go Near
        </Text>

        <Pressable style={styles.button} onPress={() => console.warn( 'clicked' )}>
          <Text style={styles.buttonText}>Explore Nearby Places</Text>
        </Pressable>
      </ImageBackground>

    </View>
  )
}

export default Home;
