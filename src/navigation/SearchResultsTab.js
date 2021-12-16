import React, {useState, useEffect} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import Map from '../screens/Map';
import { useRoute } from '@react-navigation/native'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries'

const Tab = createMaterialTopTabNavigator();

const SearchResultsTab = () => {
  const [posts, setPosts] = useState([]);
  const route = useRoute();
  const { guests, viewport, locationLat, locationLng } = route.params;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsList = await API.graphql(graphqlOperation(listPosts, {
          filter: {
            and: {
              maxGuests: {
                ge: guests
              },
              latitude: {
                between: [viewport.southwest.lat, viewport.northeast.lat],
              },
              longitude: {
                between: [viewport.southwest.lng, viewport.northeast.lng],
              }
            }
          }
        }));
        setPosts(postsList.data.listPosts.items)

      } catch (err) {
        console.log(err)
      }
    }
    fetchPosts();
  },[]);

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#f15454', tabBarIndicatorStyle: { backgroundColor: '#f15454' } }}>
      <Tab.Screen name={"List"}>
        {()=> (
          <SearchResults posts={posts}/>
        )}
      </Tab.Screen>
        <Tab.Screen name={"Map"}>
        {() => (
          <Map posts={posts} locationLat={locationLat} locationLng={locationLng} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default SearchResultsTab
