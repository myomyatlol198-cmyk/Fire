import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/Navigation/MainStackNavigator';
import BottomTab from './src/Navigation/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({});