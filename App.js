import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}
