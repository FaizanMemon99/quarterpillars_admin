import React, { useState } from 'react'
import { View,StyleSheet,Text, Image, ScrollView} from 'react-native'
import Pageformat from "../../../common/Pageformat"
import Constants from '../../../common/Constants'
import Images from '../../assets/images/Images'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native'
const SupportEmail = (props) => {
    const [tabval,settabval]=useState(1)
    const navigation=useNavigation()
    return(
        <View style={{height:"100%"}}>
        <Pageformat
        headText="Support Emails"
        goBackLink="/home"
        />
        <View style={{flexDirection:"row",marginStart:34,marginEnd:30,justifyContent:"space-between"}}>
        <Text style={[styles.headText,{color:tabval===1?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===1?2:0}]} onPress={()=>settabval(1)}>
        Explore
        </Text>
        <Text style={[styles.headText,{color:tabval===2?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===2?2:0}]} onPress={()=>settabval(2)}>
        Influencer
        </Text>
        <Text style={[styles.headText,{color:tabval===3?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===3?2:0}]} onPress={()=>settabval(3)}>
        Advertiser
        </Text>
        <Text style={[styles.headText,{color:tabval===4?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===4?2:0}]} onPress={()=>settabval(4)}>
        Business
        </Text>
        </View>
        <ScrollView style={{height:"100%"}}>
         <View style={styles.boxStyle}>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <View style={styles.profileDetails}>
         <View style={styles.profileIcon}>
             <Image source={Images.avatar} 
             // style={{resizeMode:"stretch"}}
             // style={{ width: 60, height: '100%' }}
              />
         </View>
         <View style={{marginStart:10}}>
             <Text style={styles.preofileName}>Robert Phan</Text>
             <Text style={styles.founder}>Designer</Text>
         </View>
     </View>
     <View>
     <Text style={styles.inBoxText}>
     Unseen
     </Text>
     </View>
     </View>
     <Text style={styles.inBoxText2}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .
     </Text>
     <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:10}}>
     <Text style={[styles.inBoxText2,{color:"#747474"}]}>
     received on: 12/08/2021
     </Text>
        <MaterialCommunityIcons
        name="reply-outline"
        onPress={()=>navigation.navigate("/email-summary")}
        size={30}
        color={Constants.colors.primaryColor}
        />
     </View>
        </View>
        <View style={styles.boxStyle}>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <View style={styles.profileDetails}>
         <View style={styles.profileIcon}>
             <Image source={Images.avatar} 
             // style={{resizeMode:"stretch"}}
             // style={{ width: 60, height: '100%' }}
              />
         </View>
         <View style={{marginStart:10}}>
             <Text style={styles.preofileName}>Robert Phan</Text>
             <Text style={styles.founder}>Designer</Text>
         </View>
     </View>
     <View>
     <Text style={styles.inBoxText}>
     Unseen
     </Text>
     </View>
     </View>
     <Text style={styles.inBoxText2}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .
     </Text>
     <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:10}}>
     <Text style={[styles.inBoxText2,{color:"#747474"}]}>
     received on: 12/08/2021
     </Text>
        <MaterialCommunityIcons
        name="reply-outline"
        onPress={()=>navigation.navigate("/email-summary")}
        size={30}
        color={Constants.colors.primaryColor}
        />
     </View>
        </View>
        <View style={styles.boxStyle}>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <View style={styles.profileDetails}>
         <View style={styles.profileIcon}>
             <Image source={Images.avatar} 
             // style={{resizeMode:"stretch"}}
             // style={{ width: 60, height: '100%' }}
              />
         </View>
         <View style={{marginStart:10}}>
             <Text style={styles.preofileName}>Robert Phan</Text>
             <Text style={styles.founder}>Designer</Text>
         </View>
     </View>
     <View>
     <Text style={styles.inBoxText}>
     Unseen
     </Text>
     </View>
     </View>
     <Text style={styles.inBoxText2}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .
     </Text>
     <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:10}}>
     <Text style={[styles.inBoxText2,{color:"#747474"}]}>
     received on: 12/08/2021
     </Text>
        <MaterialCommunityIcons
        name="reply-outline"
        onPress={()=>navigation.navigate("/email-summary")}
        size={30}
        color={Constants.colors.primaryColor}
        />
     </View>
        </View>
        <View style={styles.boxStyle}>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <View style={styles.profileDetails}>
         <View style={styles.profileIcon}>
             <Image source={Images.avatar} 
             // style={{resizeMode:"stretch"}}
             // style={{ width: 60, height: '100%' }}
              />
         </View>
         <View style={{marginStart:10}}>
             <Text style={styles.preofileName}>Robert Phan</Text>
             <Text style={styles.founder}>Designer</Text>
         </View>
     </View>
     <View>
     <Text style={styles.inBoxText}>
     Unseen
     </Text>
     </View>
     </View>
     <Text style={styles.inBoxText2}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .
     </Text>
     <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:10}}>
     <Text style={[styles.inBoxText2,{color:"#747474"}]}>
     received on: 12/08/2021
     </Text>
        <MaterialCommunityIcons
        onPress={()=>navigation.navigate("/email-summary")}
        name="reply-outline"
        size={30}
        color={Constants.colors.primaryColor}
        />
     </View>
        </View>
        </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    profileDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: '#fff',
        // width: '62%',
        paddingBottom: Constants.padding,
    },
    profileIcon: {
        borderRadius: Constants.borderRadius+5,
        borderWidth: 1,
        borderColor: '#fff',
        // padding: 8,
        marginEnd: 6,
        // marginTop: 10
    },
    preofileName: {
        fontFamily: Constants.fontFamily,
        fontSize: 20,
        fontWeight: '700',
        textTransform: "capitalize"
    },
    founder: {
        color: '#a4a4b2',
        opacity: 0.78,
        fontFamily: Constants.fontFamily,
        // color: Constants.colors.whiteColor,
        textTransform: "capitalize"
    },
    inBoxText:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "800",
fontSize: 14,
color: "#00a928"
    },
    inBoxText2:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "500",
fontSize: 12,
color: "#000000"
    },
    inBoxDateText:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "300",
fontSize: 12,
lineHeight: 20,
color: "#747474"
    },
    textboxStyle:{
        marginStart:12,
        backgroundColor: "rgba(0, 169, 40, 0.14)",
        borderRadius: 4,
        paddingStart:8,
        paddingEnd:8,
        paddingTop:3,
        alignItems:"center",
        paddingBottom:3
    },
    boxText:{
        "fontFamily": "Avenir",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": 10,
        "lineHeight": 14,
        "color": "#00A928",
    },
    boxStyle:{
        backgroundColor: "transparent",
        padding: Constants.padding,
        borderColor:"#fff",
        borderRadius: 15,
        borderWidth:1,
        marginTop:20,
        boxShadow: "0px 0px 11px rgba(39, 113, 72, 0.21)",
        marginStart:20,marginEnd:20,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'rgba(39, 113, 72)',  
        shadowOpacity: 0.21,  
        shadowRadius: 5,  
    },
    headText:{
        fontFamily:Constants.fontFamily,
        "fontStyle": "normal",
      "fontWeight": "500",
      "fontSize": 14,
      "lineHeight": 19,
      "color": "#676767",
        marginEnd:16,
        paddingBottom:2,
        borderBottomColor:Constants.colors.primaryColor
    },
})
export default SupportEmail