import React,{useState} from 'react'
import { Text, View, StyleSheet, Pressable} from 'react-native'
import Constants from '../../../common/Constants'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native'
 const Delivery = (props) => {
    const [tabval,settabval]=useState(1)
    const navigation=useNavigation()
    return(
        <View>
        <View style={{flexDirection:"row",marginStart:34,marginEnd:30,justifyContent:"space-between"}}>
<Text style={[styles.headText,{color:tabval===1?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===1?2:0}]} onPress={()=>settabval(1)}>
Ongoing
</Text>
<Text style={[styles.headText,{color:tabval===2?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===2?2:0}]} onPress={()=>settabval(2)}>
Delivered
</Text>
<Text style={[styles.headText,{color:tabval===3?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===3?2:0}]} onPress={()=>settabval(3)}>
Returns
</Text>
<Text style={[styles.headText,{color:tabval===4?Constants.colors.primaryColor:"#676767",borderBottomWidth:tabval===4?2:0}]} onPress={()=>settabval(4)}>
Cancelled
</Text>
</View>
<Pressable
onPress={()=>navigation.navigate("/delivery-summary",{
    headText:tabval===1?"Ongoing":tabval===2?"Delivered":tabval===3?"Returns":"Cancelled",
    refNo:"123423",
    payment:"COD",
    status:tabval===3?"Refund Initiated":
    tabval===2?
    "Delivered"
    :tabval===4?
    "Cancelled"
    :
    "Delivery"
})}>
<View style={styles.boxStyle}
>
<View style={{flexDirection:"row"}}>
<Text style={styles.inBoxText}>
Ref#
</Text>
<Text style={[styles.inBoxText,{paddingStart:10}]}>
123423
</Text>
<View style={styles.textboxStyle}>
                                        <Text style={styles.boxText}>
                                        {tabval===3?"Refund Initiated":
                                        tabval===2?
                                        "Delivered"
                                        :tabval===4?
                                        "Cancelled"
                                        :
                                        "Delivery"}
                                        </Text>
                                        </View>
                                        <View style={[styles.textboxStyle,{backgroundColor:"rgba(123, 123, 123, 0.14)"}]}>
                                        <Text style={[styles.boxText,{color:"#030303"}]}>
                                        COD
                                        </Text>
                                        </View>
</View>
<View style={{marginTop:9,flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
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
<View
style={{borderLeftWidth:1,borderLeftColor:"#000000"}}
/>
<View >
<Text style={[styles.inBoxText,{fontSize:14}]}>
<FontAwesome size={14} name='rupee'/>
1200
</Text>
<Text style={styles.inBoxText2}>
1 Item
</Text>
</View>
</View>
<View style={{marginTop:10}}>
<Text style={styles.inBoxDateText}>
2:04pm, 12/08/2021
</Text>
</View>
</View>
</Pressable>
<Pressable
onPress={()=>navigation.navigate("/delivery-summary",{
    headText:tabval===1?"Ongoing":tabval===2?"Delivered":tabval===3?"Returns":"Cancelled",
    refNo:"123423",
    payment:"Online",
    status:tabval===3?"Refund Cancelled":tabval===2?"Delivered":tabval===4?
    "Cancelled"
    :"Pickup"
})}>
<View style={styles.boxStyle}>
<View style={{flexDirection:"row"}}>
<Text style={styles.inBoxText}>
Ref#
</Text>
<Text style={[styles.inBoxText,{paddingStart:10}]}>
123423
</Text>
<View style={styles.textboxStyle}>
                                        <Text style={styles.boxText}>
                                        {tabval===3?"Refund Cancelled":tabval===2?"Delivered":tabval===4?
                                        "Cancelled"
                                        :"Pickup"}
                                        </Text>
                                        </View>
                                        <View style={[styles.textboxStyle,{backgroundColor:"rgba(123, 123, 123, 0.14)"}]}>
                                        <Text style={[styles.boxText,{color:"#030303"}]}>
                                        Online
                                        </Text>
                                        </View>
</View>
<View style={{marginTop:9,flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
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
<View
style={{borderLeftWidth:1,borderLeftColor:"#000000"}}
/>
<View >
<Text style={[styles.inBoxText,{fontSize:14}]}>
<FontAwesome size={14} name='rupee'/>
1200
</Text>
<Text style={styles.inBoxText2}>
1 Item
</Text>
</View>
</View>
<View style={{marginTop:6}}>
<Text style={styles.inBoxText2}>
reason: <Text style={{color:"#000000"}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
</Text>
</Text>
</View>
<View style={{marginTop:10}}>
<Text style={styles.inBoxDateText}>
2:04pm, 12/08/2021
</Text>
</View>
</View>
</Pressable>
<Pressable
onPress={()=>navigation.navigate("/delivery-summary",{
    headText:tabval===1?"Ongoing":tabval===2?"Delivered":tabval===3?"Returns":"Cancelled",
    refNo:"123423",
    payment:"Online",
    status:tabval===3?"Refund Initiated":
                                        tabval===2?
                                        "Delivered"
                                        :tabval===4?
                                        "Cancelled"
                                        :
                                        "Delivery"
})}>
<View style={styles.boxStyle}>
<View style={{flexDirection:"row"}}>
<Text style={styles.inBoxText}>
Ref#
</Text>
<Text style={[styles.inBoxText,{paddingStart:10}]}>
123423
</Text>
<View style={styles.textboxStyle}>
                                        <Text style={styles.boxText}>
                                        {tabval===3?"Refund Initiated":
                                        tabval===2?
                                        "Delivered"
                                        :tabval===4?
                                        "Cancelled"
                                        :
                                        "Delivery"}
                                        </Text>
                                        </View>
                                        <View style={[styles.textboxStyle,{backgroundColor:"rgba(123, 123, 123, 0.14)"}]}>
                                        <Text style={[styles.boxText,{color:"#030303"}]}>
                                        COD
                                        </Text>
                                        </View>
</View>
<View style={{marginTop:9,flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
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
<View
style={{borderLeftWidth:1,borderLeftColor:"#000000"}}
/>
<View >
<Text style={[styles.inBoxText,{fontSize:14}]}>
<FontAwesome size={14} name='rupee'/>
1200
</Text>
<Text style={styles.inBoxText2}>
1 Item
</Text>
</View>
</View>
<View style={{marginTop:10}}>
<Text style={styles.inBoxDateText}>
2:04pm, 12/08/2021
</Text>
</View>
</View>
</Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    inBoxText:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "800",
fontSize: 16,
lineHeight: 24,
color: "#1D1D28"
    },
    inBoxText2:{
        fontFamily:Constants.fontFamily,
        fontStyle: "normal",
fontWeight: "500",
fontSize: 12,
lineHeight: 20,
color: "#A4A4B2"
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
      "lineHeight": 19,
      "color": "#676767",
        marginEnd:16,
        paddingBottom:2,
        borderBottomColor:Constants.colors.primaryColor
    },
})
export default Delivery