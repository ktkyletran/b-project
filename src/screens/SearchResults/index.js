import React, {useEffect, useState} from 'react'
import { View, FlatList } from 'react-native'
import Post from '../../components/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'

const SearchResults = (props) => {
  const [posts, setPosts] = useState([]);
  const { guests } = props;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsList = await API.graphql(graphqlOperation(listPosts, {
          filter: {
            maxGuests: {
              ge: guests
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
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  )
}

export default SearchResults
