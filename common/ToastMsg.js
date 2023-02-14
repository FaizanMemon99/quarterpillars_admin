import React from "react";
import { Alert, ToastAndroid } from "react-native";

export const ToastMsg=(androidText,iosText,subiosText)=>{
    if(Platform.OS=="android")
                ToastAndroid.show(androidText, ToastAndroid.SHORT);
                else 
                Alert.alert(iosText,subiosText,{cancelable:true})
}