import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './src/Screens/Intro';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/Navigation/MainStackNavigator'
import BottomTab from './src/Navigation/BottomTab';

export default function App() {
  return (
    <NavigationContainer >
      {/* <MainStackNavigator/> */}
      <BottomTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
