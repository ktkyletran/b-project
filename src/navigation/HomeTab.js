import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Explore from './Explore';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#f15454' }}>
      <Tab.Screen name={'Explore'} component={Explore} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <Ionicons name="md-search" size={24} color={color} />
      ) }} />

      <Tab.Screen name={'Saved'} component={Home} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <Ionicons name="md-heart-circle-outline" size={24} color={color} />
      ) }} />

      <Tab.Screen name={'Airbnb'} component={Home} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <FontAwesome5 name="airbnb" size={24} color={color} />
      ) }} />

      <Tab.Screen name={'Messages'} component={Home} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <AntDesign name="message1" size={24} color={color} />
      ) }} />

      <Tab.Screen name={'User'} component={Home} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <AntDesign name="user" size={24} color={color} />
      ) }} />
    </Tab.Navigator>
  )
}

export default HomeTab
