import React from 'react'
import { Pressable, StyleSheet, Image, View, Text,TextInput, Platform } from 'react-native'
import Images from '../../assets/images/Images'
import Constants from '../../../common/Constants'
 const Profile = (props) => {
    return(
        <View>
        <Pressable style={styles.cameraContainer} >
                                <Image source={Images.userInfoLogo} style={styles.logo} />
                                <Image source={Images.cameraIcontTwo} style={styles.cameraIcon} />
                            </Pressable>
                            <View style={{justifyContent:"center",alignItems:"center",marginTop:26,marginBottom:28}}>
                            <View style={{backgroundColor:"rgba(0, 169, 40, 0.14)",padding:10,borderRadius:4}}>
                            <Text style={styles.text}>
                            Moderator
                            </Text>
                            </View>
                            </View>
                            <View style={{marginStart:44,marginEnd:44}}>
                            <View style={{flexDirection:"row",width:"100%"}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Name
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                // value={LoginId} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Name' 
                                // onChangeText={setLoginId}
                                 />
                                :
                                <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            Mr. User Admin
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Email
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                // value={LoginId} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Email' 
                                // onChangeText={setLoginId}
                                 />
                                :<Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            johndoe@gmail.com
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Phone Number
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                // value={LoginId} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Phone Number' 
                                // onChangeText={setLoginId}
                                 />
                                :<Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            +91 9827336473
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Gender
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                // value={LoginId} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Gender' 
                                // onChangeText={setLoginId}
                                 />
                                :<Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            -
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Age
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                // value={LoginId} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Age' 
                                // onChangeText={setLoginId}
                                 />
                                : <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            -
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            DOB
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                // value={LoginId} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,
                                    width:"60%"}} placeholder='DOB' 
                                // onChangeText={setLoginId}
                                 />
                                : <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            -
                            </Text>}
                            </View>
                            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
fontFamily:Constants.fontFamily,
fontWeight: "500",
fontSize: 20,
color: "#00A928"
    },
    logo: {
        alignSelf: 'center',
        marginTop: Constants.margin,
        // marginBottom: Constants.margin+30,
        borderWidth: 2,
        borderColor:"transparent",
        borderRadius:20,
        width: 175,
        height: 175,
    },
    cameraIcon: {
        position: 'relative',
        top: '-5%',
        left: '45%',
        width: 42,
        height: 32,
        zIndex:999
    },
})
export default Profile