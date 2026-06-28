import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebaseConfig';
import { ActivityIndicator, View } from 'react-native';

import Intro from '../Screens/Intro';
import Home from '../Screens/Home';
import Upload from '../Screens/Upload';
import Community from '../Screens/Community';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import { useNotifications } from '../hooks/useNotifications';

const Stack = createStackNavigator();

function MainStackNavigator() {
    const { expoPushToken } = useNotifications();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (authenticatedUser) => {
            setUser(authenticatedUser);
            if (initializing) setInitializing(false);
        });
        return subscriber;
    }, [initializing]);

    useEffect(() => {
        if (user && expoPushToken) {
            const saveTokenToFirestore = async () => {
                try {
                    const userRef = doc(db, 'users', user.uid);
                    await setDoc(userRef, { pushToken: expoPushToken }, { merge: true });
                    console.log('Push token saved/updated successfully');
                } catch (error) {
                    console.error('Error saving push token to firestore:', error);
                }
            };
            saveTokenToFirestore();
        }
    }, [user, expoPushToken]);

    if (initializing) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FF0000" />
            </View>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Upload' component={Upload} />
                    <Stack.Screen name='Community' component={Community} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='Intro' component={Intro} />
                </>
            ) : (
                <>
                    <Stack.Screen name='Register' component={Register} />
                    <Stack.Screen name="Login" component={Login} />
                </>
            )}
        </Stack.Navigator>
    );
}

export default MainStackNavigator;