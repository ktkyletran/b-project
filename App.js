import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Post from './src/components/Post';
import SearchResults from './src/screens/SearchResults';
import feed from './assets/data/feed';
import Search from './src/screens/Search';
import Guests from './src/screens/Guests';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];
const post4 = feed[3];

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        {/* <Home /> */}
        {/* <Post post={post1}/>
        <Post post={post2}/>
        <Post post={post3}/>
        <Post post={post4}/> */}
        {/* <SearchResults /> */}
        {/* <Search /> */}
        <Guests />
      </SafeAreaView>
    </>
  );
}
