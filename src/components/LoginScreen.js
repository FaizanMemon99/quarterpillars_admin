import React, { useEffect, useState } from 'react'
import { 
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    TextInput,
    ActivityIndicator,
    Platform,
    ImageBackground,
    ToastAndroid,
    Alert
 } from 'react-native'

 import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Videos from "../assets/staticVideos/Videos"
import Constants from '../../common/Constants'
import Images from "../assets/images/Images"
import Video from 'react-native-video'
import globalStyles from "../../common/globalStyles"
const LoginScreen=(props)=>{
    const navigation  = useNavigation()
    const [showPass, setShowPass] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)
    const [LoginId, setLoginId] = useState('')
    const [Password, setPassword] = useState('')
    const signInVerification=()=>{
        if(!LoginId||LoginId==""){
            if(Platform.OS=="android")
            ToastAndroid.show('Please Enter Login Id', ToastAndroid.SHORT);
            else
            Alert.alert("Please Enter Login Id",{cancelable:true})
        }
        else if(!Password||Password==""){
            if(Platform.OS=="android")
            ToastAndroid.show('Please Enter Password', ToastAndroid.SHORT);
            else 
            Alert.alert("Please Enter Password",{cancelable:true})
        }
        else {
            if(Platform.OS=="android")
            ToastAndroid.show('Login Successful.', ToastAndroid.SHORT);
            else 
            Alert.alert("Login Successful.",{cancelable:true})
            navigation.navigate("/home")
        }
    }
    return (
        <View style={styles.background}>
        
        {Platform.OS=="android"?
            <Video
        source={Videos.businessVideo}
        // onBandwidthUpdate={()=>console.log("bandwidht")}
        // onBuffer={()=>console.log("buffering...")}
        // onReadyForDisplay={(e)=>console.log("ready display",e)}
        autoplay
        repeat={true}
        loop
        muted
        disableSeek
        // onVideoBuffer={(e)=>console.log("bueeee",e)}
        resizeMode={'cover'}
        fullscreen
        style={{ width: "100%", height: "100%" }}
        customStyles={{
            wrapper: {
                width: '100%',
                height: '100%',
                paddingBottom: Constants.padding,
            },
            video: {
                width: '100%',
                height: '103%',
            },
            controls: {
                display: 'none',
            },
            seekBarBackground: {
                backgroundColor: 'transparent',
            },
            seekBarProgress: {
                backgroundColor: 'transparent',
            },

        }} />
    :
    <Image
    source={Images.adminBackgroundImage}
    style={{width:"100%",resizeMode:"cover"}}
    /> 
    }

                
            <View style={globalStyles.overlay}></View>
            <View style={styles.container}>
                <Image source={Images.logo} />
                <Text style={styles.textBelowLogo}>Welcome to Quarterpillars</Text>
                <View style={styles.business}>
                <Text style={styles.businessText}>Admin</Text>
                    <Image source={Images.adminIcon} />
                </View>
                {/* <Text style={styles.textBelowBusiness}>Enter Mobile Number/Email Id/Username</Text> */}
                <View style={styles.phoneNumberContainer}>
                    <TextInput value={LoginId} style={styles.textInput} placeholder='Email ID' onChangeText={setLoginId} autoFocus/>
                    <View style={{flex: 1, width: '100%', alignItems: 'center',}}>
                        <TextInput value={Password} style={styles.textInput} placeholder='Password' secureTextEntry={!showPass} onChangeText={setPassword}/>
                        <Icon name={showPass?'eye-slash':'eye'} style={styles.eyeIcon} onPress={()=>setShowPass(!showPass)} />

                    </View>
                    <View style={{flex:1,width:"100%",alignItems:"flex-end"}}>
                    <Text style={styles.forgotPassLink} 
                    onPress={()=>navigation.navigate("/forgotPassword")}
                    >Forgot Password</Text>
                    </View>
                </View>
                <Text style={styles.belowPhoneNumber}></Text>
                {IsLoading?<ActivityIndicator size={30} color={Constants.colors.whiteColor} />:<Pressable style={[globalStyles.button, {width: '92%', marginTop: 0,}]}
                 onPress={signInVerification}
                 ><Text style={[globalStyles.btnText,{textTransform:"none"}]}>Sign In</Text></Pressable>}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: Constants.height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        padding: Constants.padding,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    textBelowLogo: {
        fontFamily: Constants.fontFamily,
        fontSize: 26,
        fontWeight: '700',
        color: Constants.colors.whiteColor,
        maxWidth: '70%',
        textAlign: 'center',
        marginTop: 12,
        textTransform:'uppercase',
    },
    business: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center', textTransform:'uppercase',
        padding:8,
        paddingStart: 16,
        paddingEnd: 16,
        borderRadius: 5,
       
    },
    businessText: {
        fontFamily: Constants.fontFamily,
        fontSize: 24,
        color: Constants.colors.whiteColor,
        fontWeight: '700',
        marginRight: Constants.margin,
        // textTransform:'capitalize'
        textTransform:'uppercase',
    },
    textBelowBusiness: {
        fontFamily: Constants.fontFamily,
        color: Constants.colors.whiteColor,
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 20,
    },
    phoneNumberContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: Constants.colors.whiteColor,
        width: '90%',
        borderRadius: Constants.borderRadius,
        marginTop: 20,
        padding: 12,
    },
    belowPhoneNumber: {
        fontSize: 13,
        color: Constants.colors.whiteColor,
        marginTop: 12,
        fontFamily: Constants.fontFamily,
    },
    eyeIcon: {
        position: 'absolute',
        top: 30,
        right: 25,
        color: '#999999',
        fontSize: 24,
    },
    forgotPassLink: {
        alignSelf: 'flex-end',
        // marginEnd: '%',
        fontSize: 12,
        padding:5,
        marginRight:18,
        fontWeight:"500",
        color: Constants.colors.primaryColor,
        fontFamily: Constants.fontFamily,
        textDecorationLine: 'underline',
        textDecorationColor: Constants.colors.primaryColor,
    },
    otploginPassLink: {
        alignSelf: 'flex-start',
        marginEnd: '28%',
        fontSize: 16,
        color: Constants.colors.primaryColor,
        fontFamily: Constants.fontFamily,
        textDecorationLine: 'underline',
        textDecorationColor: Constants.colors.primaryColor,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: Constants.colors.whiteColor,
        width: '20%',
    },
})

export default LoginScreen