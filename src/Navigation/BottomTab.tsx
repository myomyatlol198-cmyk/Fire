import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Upload from '../Screens/Upload';
import Community from '../Screens/Community';
import Profile from '../Screens/Profile';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { s } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{    
                animation: 'fade',
                headerShown: false,            
                tabBarActiveTintColor: '#b52100',
                tabBarInactiveTintColor: '#c4b9b7',
                tabBarLabelStyle: {
                    fontSize: s(10),
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                }
            }}
        >
            <Tab.Screen options={{ title: 'Home', tabBarIcon: ({color}) => <Feather name="home" size={24} color={color} />}}
            name='Home' component={Home}/>
            <Tab.Screen options={{ title: 'Upload', tabBarIcon: ({color}) => <Feather name="upload-cloud" size={24} color={color} />}}
            name='Upload' component={Upload}/>
            <Tab.Screen options={{ title: 'Community', tabBarIcon: ({color}) => <FontAwesome6 name="people-group" size={24} color={color} />}}
            name='Community' component={Community}/>
            <Tab.Screen options={{ title: 'Profile', tabBarIcon: ({color}) => <AntDesign name="profile" size={24} color={color} />}}
            name='Profile' component={Profile}/>
        </Tab.Navigator>
    );
};

export default BottomTab;

const styles = StyleSheet.create({});