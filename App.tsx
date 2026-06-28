import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './src/Screens/Intro';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';

import BottomTab from './src/Navigation/BottomTab';
import ProfileDetailsSection from './src/components/ProfileDetailsSection';
import Register from './src/Screens/Register';
import MainStackNavigator from './src/Navigation/MainStackNavigator';

const Stack = MainStackNavigator();

export default function App() {
  return (
    // <NavigationContainer >
    //   <MainStackNavigator/>  
    //   <BottomTab/>
    // </NavigationContainer>
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({});
