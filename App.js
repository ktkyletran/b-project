import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/navigation/Router';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}
