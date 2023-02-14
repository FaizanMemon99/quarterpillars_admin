import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Image, View, Text,TextInput, Platform } from 'react-native'
import Images from '../../assets/images/Images'
import Constants from '../../../common/Constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
 const Profile = (props) => {
    const [loader,setloader]=useState(false)
    const [userData,setuserData]=useState()
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [phone,setphone]=useState()
    const [gender,setgender]=useState()
    const [userage,setuserage]=useState()
    const [dob,setdob]=useState()
    const getUserData=async()=>{
        const data=await AsyncStorage.getItem("UserData")
        if(data!==null)
        {
            setuserData(JSON.parse(data))
            setname(JSON.parse(data).username)
            setemail(JSON.parse(data).email)
            setphone(JSON.parse(data).number)
            setgender(JSON.parse(data).gender)
            setuserage(parseInt(JSON.parse(data).age))
            setdob(JSON.parse(data).dob)
        }

    }
    useEffect(()=>{
        getUserData()
    },[])
    
    return(
        <View>
        <Pressable style={styles.cameraContainer} >
                                <Image source={
                                    userData?.image?
                                    {url:`${Constants.BASE_IMAGE_URL}${JSON.parse(userData.image)}`}
                                    :
                                    Images.userInfoLogo} style={styles.logo} />
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
                                value={name} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Name' 
                                onChangeText={setname}
                                 />
                                :
                                <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            {gender==="Male"?`Mr. ${name}`:`Miss. ${name}`}
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Email
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                value={email} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Email' 
                                onChangeText={setemail}
                                 />
                                :<Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            {email?email:"-"}
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Phone Number
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                value={phone} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Phone Number' 
                                onChangeText={setphone}
                                 />
                                :<Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            +91 {phone?phone:'-'}
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Gender
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                value={gender} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Gender' 
                                onChangeText={setgender}
                                 />
                                :<Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            {gender?gender:"-"}
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            Age
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                value={userage.toString()} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,                                    width:"60%"}} placeholder='Age' 
                                onChangeText={setuserage}
                                 />
                                : <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            {userage?userage:"-"}
                            </Text>}
                            </View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
                            <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"300",width:"40%"}]}>
                            DOB
                            </Text>
                            {props?.editStatus?
                                <TextInput 
                                value={dob} 
                                style={{
                                    marginTop: Platform.OS=="android"?-15:0,
                                    width:"60%"}} placeholder='DOB' 
                                onChangeText={setdob}
                                 />
                                : <Text style={[styles.text,{fontSize:14,color:"#484848",fontWeight:"700",width:"60%"}]}>
                            {dob?dob:"-"}
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