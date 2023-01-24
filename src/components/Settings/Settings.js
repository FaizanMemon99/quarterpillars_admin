import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import Constants from '../../../common/Constants'
 const Settings = (props) => {
    const [isEnabled,setisEnabled]=useState(false)
    const [isEnabled1,setisEnabled1]=useState(false)
const [isEnabled2,setisEnabled2]=useState(false)
const [isEnabled3,setisEnabled3]=useState(true)
return(
        <View style={{marginStart:24,marginEnd:24,marginBottom:"30%"}}>
        <View style={[styles.boxStyle,{flexDirection:"row",justifyContent:"space-between"}]}>
        <View style={{width:"70%"}}>
        <Text style={styles.textStyle}>
        Chat Configuration
        </Text>
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:10}]}>
        Change your chat preferences
        </Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled(!isEnabled)}
        value={isEnabled}
      />
        </View>
        </View>
        <View style={[styles.boxStyle,{flexDirection:"row",justifyContent:"space-between",backgroundColor:"transparent",marginTop:20}]}>
        <View style={{width:"70%"}}>
        <Text style={styles.textStyle}>
        Accept chat from customers        </Text>
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:10}]}>
        Turn on to allow users to start a chart with via dashboard/mobile        </Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled1 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled1(!isEnabled1)}
        value={isEnabled1}
      />
        </View>
        </View>
        <View style={[styles.boxStyle,{flexDirection:"row",justifyContent:"space-between",backgroundColor:"transparent",marginTop:20}]}>
        <View style={{width:"70%"}}>
        <Text style={styles.textStyle}>
        Send auto-reply in chat</Text>
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:10}]}>
        Enable to send self-defined reply messages to users when they chat with you.</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled2 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled2(!isEnabled2)}
        value={isEnabled2}
      />
        </View>
        </View>
        <View
      style={{
        backgroundColor: "#f5f5f5",
        borderWidth: 0.3,
        borderColor: "#d2d2d2",
        height:"20%",
        marginStart:20,
        marginEnd:20,
        borderRadius:7
        // flex:1
      }}>
      <TextInput
        editable
        placeholder='Text your message here ...'
        multiline
        numberOfLines={4}
        maxLength={40}
        // onChangeText={text => onChangeText(text)}
        // value={value}
        style={{padding: 10}}
      />
    </View>
    <View
    style={{backgroundColor:"#d2d2d2",height:6,marginTop:30,marginStart:10,marginEnd:10}}
    />
        <View style={[styles.boxStyle,{justifyContent:"space-between",marginTop:20}]}>
        <Text style={styles.textStyle}>
        Notifications</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{width:"70%"}}>
        
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:10}]}>
        Accepted</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled3 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled3(!isEnabled3)}
        value={isEnabled3}
      />
      </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{width:"70%"}}>
        
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:Platform.OS=="android"?10:20}]}>
        Rejected</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled3 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled3(!isEnabled3)}
        value={isEnabled3}
      />
      </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{width:"70%"}}>
        
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:Platform.OS=="android"?10:20}]}>
        Payments</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled3 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled3(!isEnabled3)}
        value={isEnabled3}
      />
      </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{width:"70%"}}>
        
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:Platform.OS=="android"?10:20}]}>
        Delayed</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled3 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled3(!isEnabled3)}
        value={isEnabled3}
      />
      </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{width:"70%"}}>
        
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:Platform.OS=="android"?10:20}]}>
        New registration</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled3 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled3(!isEnabled3)}
        value={isEnabled3}
      />
      </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{width:"70%"}}>
        
        <Text style={[styles.textStyle,{fontSize:11,fontWeight:"300",marginTop:Platform.OS=="android"?10:20}]}>
        Account deleted</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Switch
        trackColor={{false: '#9b9b9b', true: Constants.colors.primaryColor}}
        thumbColor={isEnabled3 ? '#fff' : '#fff'}
        ios_backgroundColor="#9b9b9b"
        onValueChange={()=>setisEnabled3(!isEnabled3)}
        value={isEnabled3}
      />
      </View>
        </View>
        </View>
        </View>
    )
}

const styles= StyleSheet.create({
boxStyle:{
    backgroundColor: "#EAEAEA",
        padding: Constants.padding,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'rgba(39, 113, 72)',  
        shadowOpacity: 0.21,  
        shadowRadius: 5,
},
textStyle:{
    fontFamily:Constants.fontFamily,
    fontStyle: "normal",
fontWeight: "500",
fontSize: 14,
color: "#484848"
}
})
export default Settings