import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Search Bar */}
      <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination Search')}>
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
