import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Guests from '../screens/Guests';
import Search from '../screens/Search';
import HomeTab from './HomeTab';
import Post from '../components/Post';
import PostDetails from '../components/PostDetails';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name={'Destination Search'} component={Search} options={{ title: 'Search for a destination' }} />
        <Stack.Screen name={'Guests'} component={Guests} options={{ title: 'How many guests?' }} />
        <Stack.Screen name={'Details'} component={Details} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
