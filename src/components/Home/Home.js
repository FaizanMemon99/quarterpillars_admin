import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet,Image, ActivityIndicator } from 'react-native'
import Images from '../../assets/images/Images'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Constants from '../../../common/Constants'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const Home = (props) => {
    const navigation=useNavigation()
    const[UserData,setUserData]=useState()
    const [dashboardData,setdashboardData]=useState()
    const [loader,setloader]=useState(false)
    const getUserData=async()=>{
        setloader(true)
        setUserData(JSON.parse(await AsyncStorage.getItem("UserData")))
        axios.post(`${Constants.BASE_URL}Get/Dashboard/Details`)
        .then((response)=>{
            setloader(false)
            if(response.data.Data)
            console.log("repson",response.data.Data);
            setdashboardData(response.data.Data)
        })
        .catch((error)=>{
            setloader(false)
            console.log("error=>",error);
        })
    }
    
    useEffect(()=>{
        getUserData()
    },[])
    return(
        <View >
        
        <View style={styles.revenueBox}>
        <View style={styles.totalRevenue}>
        <View>
            <Text style={styles.totalRTevinueText}>Total Users</Text>
    <View style={{alignItems:"center",height:30,width:"150%",backgroundColor: "linear-gradient(90deg, rgba(1, 170, 41, 0.09), rgba(196, 196, 196, 0) 102.22%)"}}>
    <Image source={Images.lineGraphIcon} style={{width:"100%",resizeMode:"stretch"}}/>
    </View>
        </View>
            <View>
                <Text style={[styles.totalRevinue,{textAlign:"center"}]}>{dashboardData?.TotalUser?dashboardData?.TotalUser:0}</Text>
                <View style={styles.percentage}>
                    <AntDesign name={dashboardData?.Arrow?dashboardData?.Arrow==="Down"?'arrowdown':"arrowup":""} size={22} 
                    color={dashboardData?.Arrow?dashboardData?.Arrow==="Down"?"red":Constants.colors.primaryColor:Constants.colors.primaryColor}
                    />
                    <Text style={[styles.numberInPercentage,{color:dashboardData?.Arrow?dashboardData?.Arrow==="Down"?"red":Constants.colors.primaryColor:Constants.colors.primaryColor}]}>
                    {dashboardData?.Percentage?parseFloat(dashboardData?.Percentage).toFixed(2):"0.00"}
                    %</Text>
                </View>
            </View>
            
    </View>
{
    loader?
    <ActivityIndicator size={60} color={Constants.colors.primaryColor} style={{marginTop:20}}/>
    :
    <>    
    <View style={[styles.tabContent,{marginTop:18}]}>
                                                        <Text style={styles.cityName}>Explore</Text>
                                                        <View style={styles.progressBar}>
                                                            <View style={{ flex: 5 }}>
                                                                <View style={styles.progressBarBg}></View>
                                                                <View style={{
                                                                    ...styles.progressBarFront, width:
                                                                        (parseInt(dashboardData?.UserData?.Explorer)/
                                                                        parseInt(dashboardData?.TotalUser))*100
                                                                }}></View></View>
                                                            <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 
                                                            {dashboardData?.UserData?.Explorer?parseInt(dashboardData?.UserData?.Explorer).toLocaleString():"0"}
                                                            </Text>
                                                        </View>
                                        </View>
                                        <View style={styles.tabContent}>
                                                        <Text style={styles.cityName}>Influencer</Text>
                                                        <View style={styles.progressBar}>
                                                            <View style={{ flex: 5 }}>
                                                                <View style={styles.progressBarBg}></View>
                                                                <View style={{
                                                                    ...styles.progressBarFront, width:
                                                                    (parseInt(dashboardData?.UserData?.Influencer)/
                                                                    parseInt(dashboardData?.TotalUser))*100
                                                                }}></View></View>
                                                            <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 
                                                            {dashboardData?.UserData?.Influencer?parseInt(dashboardData?.UserData?.Influencer).toLocaleString():"0"}
                                                            </Text>
                                                        </View>
                                        </View>
                                        <View style={styles.tabContent}>
                                                        <Text style={styles.cityName}>Advertiser</Text>
                                                        <View style={styles.progressBar}>
                                                            <View style={{ flex: 5 }}>
                                                                <View style={styles.progressBarBg}></View>
                                                                <View style={{
                                                                    ...styles.progressBarFront, width:
                                                                    (parseInt(dashboardData?.UserData?.Advertiser)/
                                                                    parseInt(dashboardData?.TotalUser))*100
                                                                }}></View></View>
                                                            <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 
                                                            {dashboardData?.UserData?.Advertiser?parseInt(dashboardData?.UserData?.Advertiser).toLocaleString():"0"}
                                                            </Text>
                                                        </View>
                                        </View>
                                        <View style={styles.tabContent}>
                                                        <Text style={styles.cityName}>Business</Text>
                                                        <View style={styles.progressBar}>
                                                            <View style={{ flex: 5 }}>
                                                                <View style={styles.progressBarBg}></View>
                                                                <View style={{
                                                                    ...styles.progressBarFront, width:
                                                                    (parseInt(dashboardData?.UserData?.Bussiness)/
                                                                    parseInt(dashboardData?.TotalUser))*100
                                                                }}></View></View>
                                                            <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 
                                                            {dashboardData?.UserData?.Bussiness?parseInt(dashboardData?.UserData?.Bussiness).toLocaleString():"0"}
                                                            </Text>
                                                        </View>
                                        </View></>}
                                        </View>
                                        <View style={{marginTop:32,marginLeft:30,marginRight:30}}>
                                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                        <Text style={styles.compaintText}>
                                        New Complaints ({dashboardData?.TotalComplaints?dashboardData?.TotalComplaints:0})
                                        </Text>
                                        <Text style={styles.viewAllText} onPress={()=>navigation.navigate("/view-user")}>
                                        View All
                                        </Text>
                                        </View>
                                        {loader?
                                            <ActivityIndicator
                                            color={Constants.colors.primaryColor}
                                            size={60}
                                            style={{marginTop:20}}
                                            />
                                            :
                                            dashboardData?.Complaints?.length>0?
                                            dashboardData?.Complaints?.map((data,index)=><>
                                            <View style={{flexDirection:"row",marginTop:20,borderBottom: "3px solid rgba(204, 204, 204, 0.19)"}}>
                                        <View >
                                        <Image style={styles.profileIcon} source={Images.avatar}/>
                                        </View>
                                        <View style={{flex:6,marginStart:14}}>
                                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                        <View style={{flexDirection:"row",alignItems:"center"}}>
                                        <Text style={styles.complaintInText}>
                                        {data?.UserName?data?.UserName:"-"}
                                        </Text>
                                        <View style={styles.boxStyle}>
                                        <Text style={styles.boxText}>
                                        {data?.Type?data?.Type:"-"}
                                        </Text>
                                        </View>
                                        </View>
                                        <Text style={styles.minText}>
                                        {data?.Timedif?data?.Timedif:"-"}
                                        </Text>
                                        </View>
                                        <View>
                                        <Text style={styles.mailText}>
                                        {data?.UserEmail?data?.UserEmail:"-"}
                                        </Text>
                                        </View>
                                        <View style={{marginTop:6}}>
                                        <Text style={styles.minText}>
                                        {data?.ComplaintDesc?data?.ComplaintDesc:"-"}
                                        </Text>
                                        </View>
                                        </View>
                                        </View>
{index!==dashboardData?.Complaints?.length-1?                                        <View
                                        style={{borderWidth: 2,
                                            borderColor: 'rgba(204, 204, 204, 0.49)',marginTop:20}}
                                        />:null}
                                        </>):
                                        <Text>
                                        No Complaints found
                                        </Text>
                                    }
                                        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mailText:{
        "fontFamily": "Avenir",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 19,
        "color": "#484848",paddingTop:3
    },
    minText:{
        "fontFamily": "Avenir",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": 12,
        "lineHeight": 16,
        "color": "#000000",
        "mixBlendMode": "normal",
        "opacity": 0.5
    },
    complaintInText:{
        "fontFamily": "'Avenir'",
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": 13,
        "color": "#424242",
    },
    boxStyle:{
        marginStart:12,
        backgroundColor: "rgba(0, 169, 40, 0.14)",
        borderRadius: 4,
        paddingStart:8,
        paddingEnd:8,
        paddingTop:3,
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
    profileIcon: {
        // flex:1,
        borderRadius: Constants.borderRadius,
        borderWidth: 1,
        borderColor: 'black',
        // padding: 8,
        // marginEnd: 6,
        // marginTop: 10
    },
    viewAllText:{
        "fontFamily": "'Avenir'",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": 14,
        "lineHeight": 19,
        "textDecorationLine": "underline",
        "color": "#01AA29"
    },
    compaintText:{
        "fontFamily": "'Avenir'",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 18,
      "lineHeight": 25,
      "color": "#000000"
    },
    cityName: {
        fontFamily: Constants.fontFamily,
        fontSize: 14,
        color:"#676767",
        fontWeight:"500"
    },
    totalRevenue: {
        
        // marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    revenueBox:{
        backgroundColor: Constants.colors.whiteColor,
        padding: Constants.padding,
        borderRadius: 20,
        boxShadow: "0px 0px 11px rgba(39, 113, 72, 0.21)",
        marginStart:20,marginEnd:20,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'rgba(39, 113, 72)',  
        shadowOpacity: 0.21,  
        shadowRadius: 5,
    },
    totalRTevinueText: {
        fontFamily: Constants.fontFamily,
        fontSize: 24,
        fontWeight: '400',
        marginEnd:5,
        marginBottom:5
    },
    gradientBg: {
        padding: 10,
    },
    totalRevinue: {
        fontSize: 22,
        fontFamily: Constants.fontFamily,
        fontWeight: '800',
        marginBottom: 12,
    },
    percentage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    numberInPercentage: {
        fontFamily: Constants.fontFamily,
        fontSize: 20,
        color: Constants.colors.primaryColor,
        fontWeight: '400',
    },
    tabContent: {
        padding: Constants.padding-10,
    },
    progressBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressBarBg: {
        width: '90%',
        height: 8,
        backgroundColor: '#E1E1E1',
        borderRadius: Constants.borderRadius,
    },
    progressBarFront: {
        backgroundColor: Constants.colors.primaryColor,
        borderRadius: Constants.borderRadius,
        height: 8,
        position: 'absolute',
    },
})
export default Home