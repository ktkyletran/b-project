import React, {useEffect, useState} from 'react'
import { View, FlatList } from 'react-native'
import Post from '../../components/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'

const SearchResults = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsList = await API.graphql(graphqlOperation(listPosts));
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
