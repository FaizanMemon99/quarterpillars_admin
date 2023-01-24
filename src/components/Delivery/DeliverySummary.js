import React, { useEffect } from 'react'
import { ScrollView, View,StyleSheet,Text,Image, Pressable} from 'react-native'
import Pageformat from '../../../common/Pageformat'
import Constants from '../../../common/Constants'
import Images from '../../assets/images/Images'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import globalStyles from '../../../common/globalStyles'
const DeliverySummary = (props) => {
    
    return(
        <View style={{width:"100%",height:"100%"}}>
        <Pageformat
        goBackLink="/home"
        headText={props?.route?.params?.headText}
        type="delivery"
        />
        <ScrollView style={{marginStart:32,marginEnd:32,flex:1,height:"100%"}}>
        <View style={{flexDirection:"row"}}>
<Text style={styles.inBoxText}>
Ref#
</Text>
<Text style={[styles.inBoxText,{paddingStart:10}]}>
123423
</Text>
<View style={styles.textboxStyle}>
                                        <Text style={styles.boxText}>
                                        {props?.route?.params?.status}
                                        </Text>
                                        </View>
                                        <View style={[styles.textboxStyle,{backgroundColor:"rgba(123, 123, 123, 0.14)"}]}>
                                        <Text style={[styles.boxText,{color:"#030303"}]}>
                                        {props?.route?.params?.payment}
                                        </Text>
                                        </View>
</View>
<View style={{marginTop:24,flexDirection:"row",width:"100%",justifyContent:"space-between",width:"60%"}}>
<View >
<Text style={[styles.inBoxText,{fontSize:14}]}>
Robert Phan
</Text>
<Text style={styles.inBoxText2}>
Business Owner
</Text>
</View>
<View
style={{borderLeftWidth:1,borderLeftColor:"#000000"}}
/>
<View >
<Text style={[styles.inBoxText,{fontSize:14}]}>
John Doe
</Text>
<Text style={styles.inBoxText2}>
Customer</Text>
</View>
</View>
<View style={{marginTop:24,flexDirection:"row"}}>
<View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
<Image source={Images.recentOrdersOne}
/>
</View>
<View style={{marginStart:10}}>
<Text style={[styles.boxText,{fontSize:14,color:"#424242"}]}>
Statue of Boris
</Text>
<View style={{flexDirection:"row",marginTop:10}}>
<Text style={[styles.boxText,{fontSize:14,color:"#979797",textDecorationLine:"line-through"}]}>
<FontAwesome size={14} name='rupee'/>
1500
</Text>
<Text style={[styles.boxText,{fontSize:14,color:"#030303",marginStart:10}]}>
<FontAwesome size={14} name='rupee'/>
1200
</Text>
<Text style={[styles.boxText,{fontSize:12,color:Constants.colors.primaryColor,marginStart:10}]}>
<FontAwesome size={12} name='rupee'/>
300 off
</Text>
</View>
<Text style={[styles.boxText,{fontSize:12,color:"#030303",marginTop:10}]}>
1 item
</Text>
<Text style={[styles.inBoxDateText,{marginTop:10}]}>
ordered on: 12/08/2021, 2:04pm
</Text>
</View>

</View>
<Text style={[styles.inBoxText2,{marginTop:22}]}>
reason: <Text style={{color:"#000000"}}>
lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci diduntLorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt.</Text>
</Text>
<Pressable style={[globalStyles.button, {width: '100%', marginTop: 30,backgroundColor:Constants.colors.whiteColor,borderWidth:1,borderColor:Constants.colors.primaryColor}]}
                //  onPress={signInVerification}
                 ><Text style={[globalStyles.btnText,{color:Constants.colors.primaryColor,textTransform:"none",alignSelf:"flex-start"}]}>Contact Business Owner</Text></Pressable>
                 <Pressable style={[globalStyles.button, {width: '100%', marginTop: 22,}]}
                 //  onPress={signInVerification}
                  ><Text style={[globalStyles.btnText,{textTransform:"none",alignSelf:"flex-start"}]}>Send Mail to Customer</Text></Pressable>
 
                 </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    inBoxText:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "800",
fontSize: 16,
color: "#1D1D28"
    },
    inBoxText2:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "500",
fontSize: 12,
color: "#A4A4B2"
    },
    inBoxDateText:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "300",
fontSize: 12,
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
        "color": "#00A928",
    },
    boxStyle:{
        backgroundColor: Constants.colors.whiteColor,
        padding: Constants.padding,
        borderRadius: 20,
        marginTop:32,
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
      "color": "#676767",
        marginEnd:16,
        paddingBottom:2,
        borderBottomColor:Constants.colors.primaryColor
    },
})
export default DeliverySummary