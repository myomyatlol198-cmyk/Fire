import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../Screens/Intro';
import Home from '../Screens/Home';
import Upload from '../Screens/Upload';
import Community from '../Screens/Community';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import Register from '../Screens/Register';

const Stack = createStackNavigator()

function MainStackNavigator(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,

            }}
            initialRouteName='Register'
        >
            {/* <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Upload' component={Upload}/>
            <Stack.Screen name='Community' component={Community}/>
            <Stack.Screen name='Profile' component={Profile}/> */}
            
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Intro' component={Intro}/>


            
        </Stack.Navigator>
    );
}

export default MainStackNavigator