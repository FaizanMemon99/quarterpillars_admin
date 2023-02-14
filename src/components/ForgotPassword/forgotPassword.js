import React,{useState} from "react"
import { View,TextInput,StyleSheet,Pressable,Text,Platform, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import Pageformat from "../../../common/Pageformat";
import Constants from "../../../common/Constants";
import globalStyles from "../../../common/globalStyles";
import { ToastMsg } from "../../../common/ToastMsg";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const ForgotPassword=()=>{
    const [showPass, setShowPass] = useState(false)
    const [showCPass, setShowCPass] = useState(false)
    const [Password, setPassword] = useState('')
    const [CPassword, setCPassword] = useState('')
    const [loader,setloader]=useState(false)
    const navigation=useNavigation()
    const changePassword=()=>{
        if(!Password){
            ToastMsg("Error! Please Enter Password","Error!","Please enter password.")
        }
        else if(!CPassword){
            ToastMsg("Error! Please Re-Enter Password","Error!","Please re-enter password.")
        }
        else if(Password!==CPassword){
            ToastMsg("Error! Password does not match","Error!","Password does not match.")
        }
        else {
            setloader(true)
            axios.post(`${Constants.BASE_URL}Change/Password`,{
                id:1,
                newpassword:Password
            })
            .then((response)=>{
                setloader(false)
                ToastMsg("Password updated successfully","Success!","Password updated successfully")
                navigation.navigate("/")
            }).catch((error)=>{
                setloader(false)
                ToastMsg("Error! Change password failed. Please try again.","Error!","Change password failed. Please try again.")
            })
        }
    }
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
                    {loader?
                        <ActivityIndicator size={30} style={{marginTop:35}} color={Constants.colors.primaryColor} />
                        :
                        <Pressable style={[globalStyles.button, {width: '80%', margin: 35}]}
                 onPress={changePassword}
                 ><Text style={[globalStyles.btnText]}>Set Password</Text></Pressable>}
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
