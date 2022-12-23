

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './routes';
import SplashScreen from "react-native-splash-screen"; //import SplashScreen

const App = () => {

useEffect(()=>{
  if(Platform.OS==='android')
  SplashScreen.hide(); //hides the splash screen on app load.
},[])
  return (
        <SafeAreaView style={{flex:1}}>
        <NavigationContainer style={{flex:1}}>
      <Routes/>
      </NavigationContainer>
      </SafeAreaView>
  );
};


export default App;
