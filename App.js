import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/navigation/Router';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(config)

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}

export default withAuthenticator(App);
