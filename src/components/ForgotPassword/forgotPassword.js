import React,{useState} from "react"
import { View,TextInput,StyleSheet,Pressable,Text,Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import Pageformat from "../../../common/Pageformat";
import Constants from "../../../common/Constants";
import globalStyles from "../../../common/globalStyles";
const ForgotPassword=()=>{
    const [showPass, setShowPass] = useState(false)
    const [showCPass, setShowCPass] = useState(false)
    const [Password, setPassword] = useState('')
    const [CPassword, setCPassword] = useState('')
    return (
        <View style={{height:"100%",backgroundColor:"#fff"}}>
        <Pageformat
        headText={"Set Password"}
        />
        <View style={{width: '100%', alignItems: 'center',position:"relative"}}>
                        <TextInput value={Password} style={styles.textInput} placeholder='Password' secureTextEntry={!showPass} onChangeText={setPassword}/>
                        <Icon name={showPass?'eye-slash':'eye'} style={styles.eyeIcon} onPress={()=>setShowPass(!showPass)} />
                    </View>
                    <View style={{width: '100%', alignItems: 'center',position:"relative"}}>
                        <TextInput value={CPassword} style={styles.textInput} placeholder='Confirm Password' secureTextEntry={!showCPass} onChangeText={setCPassword}/>
                        <Icon name={showCPass?'eye-slash':'eye'} style={styles.eyeIcon} onPress={()=>setShowCPass(!showCPass)} />

                    </View>
                    <Pressable style={[globalStyles.button, {width: '80%', margin: 35}]}
                //  onPress={signinverificatoin}
                 ><Text style={[globalStyles.btnText]}>Set Password</Text></Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: Constants.colors.inputBgColor,
        width: '90%',
        borderRadius: Constants.borderRadius,
        marginTop: 20,
        padding: 12,
    },
    eyeIcon: {
        position: 'absolute',
        top: Platform.OS=='android'?34:30,
        right: 25,
        color: '#999999',
        fontSize: Platform.OS=='android'?24:20,
    },
})

export default ForgotPassword
