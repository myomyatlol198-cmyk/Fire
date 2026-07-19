/**
 * all commented codes must not be deleted, they are for future use
 * setting user = true for initial UI development, will be removed in future when UI is ready to be connected with firebase auth 
 */
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { onAuthStateChanged, User } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from '../../config/firebaseConfig';
// import { ActivityIndicator, View } from 'react-native';

import Intro from '../Screens/Intro';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import BottomTab from './BottomTab';
import Comment from '../components/Comment'
// import { useNotifications } from '../hooks/useNotifications';

const Stack = createStackNavigator();

function MainStackNavigator() {
    // for development of UI, will be removed in future when UI is ready to be connected with firebase auth
    // TODO: uncomment the code below when ready to connect with firebase auth
    const user = true; 
    // const { expoPushToken } = useNotifications();
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState<User | null>(null);

    // useEffect(() => {
    //     const subscriber = onAuthStateChanged(auth, (authenticatedUser) => {
    //         setUser(authenticatedUser);
    //         if (initializing) setInitializing(false);
    //     });
    //     return subscriber;
    // }, [initializing]);

    // useEffect(() => {
    //     if (user && expoPushToken) {
    //         const saveTokenToFirestore = async () => {
    //             try {
    //                 const userRef = doc(db, 'users', user.uid);
    //                 await setDoc(userRef, { pushToken: expoPushToken }, { merge: true });
    //                 console.log('Push token saved/updated successfully');
    //             } catch (error) {
    //                 const err = error as Error;
    //                 console.error('Error saving push token to firestore:', err.message);
    //             }
    //         };
    //         saveTokenToFirestore();
    //     }
    // }, [user, expoPushToken]);

    // if (initializing) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" color="#FF0000" />
    //         </View>
    //     );
    // }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <>
                    <Stack.Screen name='MainTabs' component={BottomTab} />
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