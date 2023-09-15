import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import React, { useEffect } from 'react';
import ms from '../../utils/ms';
import {useDispatch} from 'react-redux';
import { IconBatur } from '../../assets/icon';
import {useState} from 'react';
import {windowHeight, windowWidth} from '../../utils/constants';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  setTimeout(() => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  }, 3000)

  return (
    <ImageBackground
      source={IconBatur}
      style={{flex:1}}
    >

    </ImageBackground>
  );
};

export default Splash;

