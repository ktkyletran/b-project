import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import Map from '../screens/Map';
import { useRoute } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();

const SearchResultsTab = () => {
  const route = useRoute();
  const { guests } = route.params;
  console.log(guests)
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#f15454', tabBarIndicatorStyle: { backgroundColor: '#f15454' } }}>
      <Tab.Screen name={"List"}>
        {()=> (
          <SearchResults guests={guests}/>
        )}
      </Tab.Screen>
        <Tab.Screen name={"Map"}>
        {() => (
          <Map guests={guests}/>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default SearchResultsTab
