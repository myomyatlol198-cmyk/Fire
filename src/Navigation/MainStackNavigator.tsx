import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../Screens/Intro';
import Home from '../Screens/Home';
import Upload from '../Screens/Upload';
import Community from '../Screens/Community';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator()

function MainStackNavigator(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,

            }}
            initialRouteName='Home'
        >
            {/* <Stack.Screen name='Intro' component={Intro}/> */}
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Upload' component={Upload}/>
            <Stack.Screen name='Community' component={Community}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
    );
}

export default MainStackNavigator