import  React,{useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/components/LoginScreen';
import ForgotPassword from './src/components/ForgotPassword/forgotPassword';
import HomeScreen from './src/components/Home/HomeScreen';
import ViewUser from './src/components/Home/ViewUser';
import DeliverySummary from './src/components/Delivery/DeliverySummary';
import SupportEmail from './src/components/SupportEmail/supportEmail';
import EmailSummary from './src/components/SupportEmail/EmailSummary';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const navigation=useNavigation()
  const getUserData=async()=>{
    try{
      const value = await AsyncStorage.getItem('UserData');
      if (value !== null) {
        navigation.navigate("/home")
      }
    }
    catch(err){
      console.log("error=>",err);
    }
  }
  
  useEffect(()=>{
    getUserData()
  },[])
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