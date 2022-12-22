

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './routes';


const App = () => {


  return (

        <NavigationContainer style={{flex:1}}>
      <Routes/>
      </NavigationContainer>
  );
};


export default App;
