import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Upload from '../Screens/Upload'
import Community from '../Screens/Community'
import Profile from '../Screens/Profile'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Upload' component={Upload}/>
            <Tab.Screen name='Community' component={Community}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})