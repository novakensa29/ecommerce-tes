import { CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Splash,
  Login,
  Home,
} from '../pages';
import MainApp from './MainApp';
//const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Router = () => {
  const fadeConfig = ({ current }) => {
    return {
        cardStyle: {
            opacity: current.progress,
        },
    }
};
  return (
    <Stack.Navigator initialRouteName="Splash"  
   //  <Stack.Navigator initialRouteName="Notification" 
    // <Stack.Navigator initialRouteName="MapTravel"  
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        // options={{headerShown: false}}
         options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
        
      />
      {/* <Stack.Screen
        name="Intro"
        component={Intro}
        // options={{headerShown: false}}
         options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
      /> */}
      {/* <Stack.Screen name="AuthRoute" component={AuthRoute} options={{ headerShown: false }} /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{headerShown: false}}
         options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
      />
     
     
      {/* <Stack.Screen
        name="Register"
        component={Register}
        // options={{headerShown: false}}
         options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
      />
       */}
      <Stack.Screen
        name="MainApp"
        component={Home}
        // options={{headerShown: false}}
         options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
      />
        
      
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
