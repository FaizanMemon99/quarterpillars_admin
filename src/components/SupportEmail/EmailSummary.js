import React from 'react'
import { StyleSheet, View,Image,Text} from 'react-native'
import Constants from '../../../common/Constants'
import Images from '../../assets/images/Images'
import Pageformat from '../../../common/Pageformat'
const EmailSummary = (props) => {
    return(
        <View>
            <Pageformat
            headText="Support Emails"
            goBackLink="/support-emails"
            />
            <View style={{flexDirection:"row",justifyContent:"space-between",marginStart:30,marginEnd:30}}>
         <View style={[styles.profileIcon,{width:"20%",alignItems:"center",justifyContent:"center"}]}>
             <Image source={Images.avatar} 
            //  style={{width:"100%",height:"100%"}}
             style={{resizeMode:"cover"}}
             // style={{ width: 60, height: '100%' }}
              />
         </View>
         <View style={{flex:7}}>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <View >
             <Text style={styles.preofileName}>Robert Phan</Text>
             <Text style={styles.founder}>Designer</Text>
         </View>
         <View >
         <Text style={styles.preofileName}>Robert Phan</Text>
         <Text style={styles.founder}>Designer</Text>
     </View>
         </View>
         <View style={{flexDirection:"row",justifyContent:"space-between",width:"70%",marginTop:7}}>
         <Text style={[styles.founder,{color:"#000"}]}>
         1.2M Followers
         </Text> 
         <View style={{borderLeftWidth:1,borderLeftColor:"#000000"}}/> 
         <Text style={[styles.founder,{color:"#000"}]}>
         234 Posts
         </Text>
         </View>
         </View>
     </View>
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
export default EmailSummary