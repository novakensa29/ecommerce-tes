import React, { useEffect } from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Diorder,
  Favorite,
  Splash,
  Login,
  // PengaturanAkun,
} from '../pages';
import {ButtonNavigator} from '../components';
// import { showMessage, showToast } from '../utils';
// import socket from '../config/socket';
// import { useDispatch, useSelector } from 'react-redux';

// import NotificationSounds, { playSampleSound } from 'react-native-notification-sounds';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const fadeConfig = ({ current }) => {
  return {
      cardStyle: {
          opacity: current.progress,
      },
  }
}
const HomeStack = ({navigation}) => {
  
  // const dispatch = useDispatch();
  // const { authUser } = useSelector((state) => state.authReducer);
 
  // const { advanceServer, isLoading } = useSelector((state) => state.globalReducer);
  // const initOrderTravel = async () => {
  //   if(!isLoading){
  //     // showToast('Memeriksan...')
  //   }
  // };
  // useEffect(()=>{
   
  // },[])
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
        options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
      />
     
    </Stack.Navigator>
  );
};
const DiorderStack = () => {
  return (
    <Stack.Navigator initialRouteName="Diorder">
      <Stack.Screen
        name="Diorder"
        component={Diorder}
        // options={{headerShown: false}}
        options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
      />
    </Stack.Navigator>
  );
};
const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen
        name="Favorite"
        component={Splash}
        // options={{headerShown: false}}
        options={{ headerShown: false, cardStyleInterpolator: fadeConfig }}
      />
      
    </Stack.Navigator>
  );
};
const MainApp = ({navigation}) => {
  
 
  return (
    <Tab.Navigator
      tabBar={(props) => <ButtonNavigator {...props} />}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#c4461c',
        backgroundColor: 'rgba(34,36,40,1)',
        inactiveBackgroundColor: '#b55031',
            style: {
                  backgroundColor: '#CE4418',
                  paddingBottom: 3
            }
     }}
      
      >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Diorder" component={DiorderStack} />
      <Tab.Screen name="Favorite" component={FavoriteStack} />
    </Tab.Navigator>
  );
};
export default MainApp;
