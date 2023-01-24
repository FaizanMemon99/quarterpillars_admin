import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/components/LoginScreen';
import ForgotPassword from './src/components/ForgotPassword/forgotPassword';
import HomeScreen from './src/components/Home/HomeScreen';
import ViewUser from './src/components/Home/ViewUser';
import DeliverySummary from './src/components/Delivery/DeliverySummary';
import SupportEmail from './src/components/SupportEmail/supportEmail';
import EmailSummary from './src/components/SupportEmail/EmailSummary';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen
           name="/"
           component={LoginScreen}
         />
        <Stack.Screen
          name="/forgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
        name="/home"
        component={HomeScreen}
        />
        <Stack.Screen
        name="/view-user"
        component={ViewUser}
        />
        <Stack.Screen
        name="/delivery-summary"
        component={DeliverySummary}
        />
        <Stack.Screen
        name="/support-emails"
        component={SupportEmail}
        />
        <Stack.Screen
        name='/email-summary'
        component={EmailSummary}
        />
      </Stack.Navigator>
  );
};
export default Routes