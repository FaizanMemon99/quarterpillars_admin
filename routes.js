import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="/"
          component={HomeScreen}
        />
        
      </Stack.Navigator>
  );
};
export default Routes