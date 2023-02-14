import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet,Image, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import Constants from '../../../common/Constants'
import Pageformat from '../../../common/Pageformat'
import Images from '../../assets/images/Images'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import axios from 'axios'
// import PieChart from 'react-native-pie-chart';
// import LineChart from 'react-native-chart-kit'

const ViewUser = (props) => {
    const [tabval,settabval]=useState(1)
    const [tabs, setTabs] = useState('city')
    const [userDetails,setuserDetails]=useState()
    const [loader,setloader]=useState(false)
    const chartConfig = {
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 10,
        useShadowColorFromDataset: false // optional
    }

    const data = {
        labels: ["15-25", "26-35", "36-45", "46-55", "56-65", "65+"],
        datasets: [
            {
                data: [0,0,0,10,30,40],
                color: (opacity = 1) => `#04751F`, // optional
                strokeWidth: 2 // optional
            },
            {
                data: [],
                color: (opacity = 1) => `#70CF87`, // optional
                strokeWidth: 2 // optional
            }
        ],
    }
const getUserDetails=()=>{
    setloader(true)
    axios.post(`${Constants.BASE_URL}Get/UsersDetails`)
    .then((response)=>{
        setloader(false)
        if(response.data.data)
        {
            
            setuserDetails(response.data.data)
        }
        
    })
    .catch((error)=>{
        setloader(false)
        console.log("error=>",error);
    })
}
useEffect(()=>{
    getUserDetails()
},[])

    return(
<View style={{height:"100%"}}>
<Pageformat
headText="Users"
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
<ScrollView style={{height:"100%",marginBottom:10}}>
<View style={styles.revenueBox}>
<View style={styles.totalRevenue}>
<View>
    <Text style={styles.totalRTevinueText}>No. of Users</Text>
<View style={{alignItems:"center",height:30,width:"120%",backgroundColor: "linear-gradient(90deg, rgba(1, 170, 41, 0.09), rgba(196, 196, 196, 0) 102.22%)"}}>
<Image source={Images.lineGraphIcon} style={{width:"100%",resizeMode:"stretch"}}/>
</View>
</View>
    <View>
        <Text style={[styles.totalRevinue,{textAlign:"center"}]}>
        {tabval===1?userDetails?.Explore?.TotalUser:
            tabval===2?userDetails?.Influencer?.TotalUser:
            tabval===3?userDetails?.Advertiser?.TotalUser:
            tabval===4?userDetails?.Business?.TotalUser:"0"}
        </Text>
        <View style={styles.percentage}>
            <AntDesign name={tabval===1?userDetails?.Explore?.Arrow==="down"?"arrowdown":"arrowup":
            tabval===2?userDetails?.Influencer?.Arrow==="down"?"arrowdown":"arrowup":
            tabval===3?userDetails?.Advertiser?.Arrow==="down"?"arrowdown":"arrowup":
            tabval===4?userDetails?.Business?.Arrow==="down"?"arrowdown":"arrowup":""} size={22} 
            color={tabval===1?userDetails?.Explore?.Arrow==="down"?"red":Constants.colors.primaryColor:
            tabval===2?userDetails?.Influencer?.Arrow==="down"?"red":Constants.colors.primaryColor:
            tabval===3?userDetails?.Advertiser?.Arrow==="down"?"red":Constants.colors.primaryColor:
            tabval===4?userDetails?.Business?.Arrow==="down"?"red":Constants.colors.primaryColor:"red"}
            />
            <Text style={styles.numberInPercentage}>
            {tabval===1?userDetails?.Explore?.Percentage?parseFloat(userDetails?.Explore?.Percentage).toFixed(2):"0.00":
                tabval===2?userDetails?.Influencer?.Percentage?parseFloat(userDetails?.Influencer?.Percentage).toFixed(2):"0.00":
                tabval===3?userDetails?.Advertiser?.Percentage?parseFloat(userDetails?.Advertiser?.Percentage).toFixed(2):"0.00":
                tabval===4?userDetails?.Business?.Percentage?parseFloat(userDetails?.Business?.Percentage).toFixed(2):"0.00":"0.00"}
            %</Text>
        </View>
    </View>
    
</View>
{loader?
    <ActivityIndicator
    size={60}
    color={Constants.colors.primaryColor}
    />
    :<>
    <View style={[styles.tabContent,{marginTop:18}]}>
                                                <Text style={styles.cityName}>Travel</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "50%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 9,434</Text>
                                                </View>
                                </View>
                                <View style={styles.tabContent}>
                                                <Text style={styles.cityName}>Fashion</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "40%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 12,344</Text>
                                                </View>
                                </View>
                                <View style={styles.tabContent}>
                                                <Text style={styles.cityName}>Lifestyle</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "70%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 23,456</Text>
                                                </View>
                                </View>
                                <View style={styles.tabContent}>
                                                <Text style={styles.cityName}>Food</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "60%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 15,343</Text>
                                                </View>
                                </View>
                            </>
                        }
                                </View>
                                <View style={styles.countryWise}>
                                <View style={styles.tabContainer}>
                                    <Pressable onPress={() => setTabs('city')} style={{ ...styles.tabs, backgroundColor: tabs === 'city' ? Constants.whiteColor : 'rgba(229, 235, 237, 0.38)', }}><Text style={{ ...styles.tabText, fontWeight: tabs === 'city' ? '800' : '400', }}>Cities</Text></Pressable>
                                    <Pressable onPress={() => setTabs('country')} style={{ ...styles.tabs, backgroundColor: tabs === 'country' ? Constants.whiteColor : 'rgba(229, 235, 237, 0.38)', }}><Text style={{ ...styles.tabText, fontWeight: tabs === 'country' ? '800' : '400', }}>Countries</Text></Pressable>
                                </View>
                                {loader?
                                    <ActivityIndicator
                                    size={60}
    color={Constants.colors.primaryColor}
                                    />
                                    :
                                    
                                    tabs==="city"?
                                <>
                                <View style={[styles.tabContent,{marginTop:18,marginEnd:20,
                                    marginStart:20}]}>
                                                <Text style={styles.cityName}>Pune</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "50%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 9,434</Text>
                                                </View>
                                </View>
                                <View style={[styles.tabContent,{marginEnd:20,
                                    marginStart:20}]}>
                                                <Text style={styles.cityName}>Mumbai</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "40%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 12,344</Text>
                                                </View>
                                </View>
                                <View style={[styles.tabContent,{marginEnd:20,
                                    marginStart:20}]}>
                                                <Text style={styles.cityName}>Delhi</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "70%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 23,456</Text>
                                                </View>
                                </View>
                                <View style={[styles.tabContent,{marginEnd:20,
                                    marginStart:20}]}>
                                                <Text style={styles.cityName}>Banglore</Text>
                                                <View style={styles.progressBar}>
                                                    <View style={{ flex: 5 }}>
                                                        <View style={styles.progressBarBg}></View>
                                                        <View style={{
                                                            ...styles.progressBarFront, width:
                                                                "60%"
                                                        }}></View></View>
                                                    <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 15,343</Text>
                                                </View>
                                </View>
                                </>
                                            :
                                            <>
                                            <View style={[styles.tabContent,{marginTop:18,marginEnd:20,
                                                marginStart:20}]}>
                                                            <Text style={styles.cityName}>Africa</Text>
                                                            <View style={styles.progressBar}>
                                                                <View style={{ flex: 5 }}>
                                                                    <View style={styles.progressBarBg}></View>
                                                                    <View style={{
                                                                        ...styles.progressBarFront, width:
                                                                            "50%"
                                                                    }}></View></View>
                                                                <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 9,434</Text>
                                                            </View>
                                            </View>
                                            <View style={[styles.tabContent,{marginEnd:20,
                                                marginStart:20}]}>
                                                            <Text style={styles.cityName}>India</Text>
                                                            <View style={styles.progressBar}>
                                                                <View style={{ flex: 5 }}>
                                                                    <View style={styles.progressBarBg}></View>
                                                                    <View style={{
                                                                        ...styles.progressBarFront, width:
                                                                            "40%"
                                                                    }}></View></View>
                                                                <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 12,344</Text>
                                                            </View>
                                            </View>
                                            <View style={[styles.tabContent,{marginEnd:20,
                                                marginStart:20}]}>
                                                            <Text style={styles.cityName}>China</Text>
                                                            <View style={styles.progressBar}>
                                                                <View style={{ flex: 5 }}>
                                                                    <View style={styles.progressBarBg}></View>
                                                                    <View style={{
                                                                        ...styles.progressBarFront, width:
                                                                            "70%"
                                                                    }}></View></View>
                                                                <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 23,456</Text>
                                                            </View>
                                            </View>
                                            <View style={[styles.tabContent,{marginEnd:20,
                                                marginStart:20}]}>
                                                            <Text style={styles.cityName}>USA</Text>
                                                            <View style={styles.progressBar}>
                                                                <View style={{ flex: 5 }}>
                                                                    <View style={styles.progressBarBg}></View>
                                                                    <View style={{
                                                                        ...styles.progressBarFront, width:
                                                                            "60%"
                                                                    }}></View></View>
                                                                <Text style={{ flex: 1,color:Constants.colors.primaryColor,fontWeight:"500" }}> 15,343</Text>
                                                            </View>
                                            </View>
                                            </>
                                }
                            </View>
                            <View style={styles.ageAndGender}>
                            <Text style={styles.ageAndGenderHeading}>Age Range & Gender</Text>
                            {/*<LineChart
                                data={data}
                                width={Constants.width}
                                fromZero={true}
                                height={220}
                                chartConfig={chartConfig}
                                yAxisSuffix='%'
                                barPercentage='10'
                                withInnerLines={false}
                                withOuterLines={true}
                                withShadow={false}
                                style={{
                                    marginLeft: -26,
                                }}
                            />*/} 
                            <View style={styles.circularChartContainer}>
                                <View>
                                    <View style={styles.circularBarLabel}>
                                        <View style={styles.graphColorMale}></View>
                                        <Text style={styles.label}>Men</Text>
                                        <Text styles={styles.value}>
                                         0.0%
                                        </Text>
                                    </View>
                                    <View style={styles.circularBarLabel}>
                                        <View style={styles.graphColorFemale}></View>
                                        <Text style={styles.label}>Women</Text>
                                        <Text styles={styles.value}>0.0%</Text>
                                    </View>
                                </View>
                                    {/*<PieChart
                                        widthAndHeight={100}
                                        series={[40, 20]}
                                        doughnut={true}
                                        sliceColor={["#04751F", "#70CF87"]}
                                        coverFill={'#FFF'}
                                    /> 
                                    :
                                    <View style={styles.tabContent}>
                                        <View style={[globatStyles.noData, { minHeight: 50 }]}>
                                            <AntDesign name='delete' size={26} color='#F1F1F1' />
                                            <Text>No Data Found</Text>
                                        </View>
                            </View>*/}
                                
                            </View>
                        </View>
                                </ScrollView>
</View>
    )
}
const styles=StyleSheet.create({
    ageAndGender: {
        marginTop: 32,
        backgroundColor: Constants.colors.whiteColor,
        borderRadius: 20,
        padding: Constants.padding,
        marginStart:20,
        marginEnd:20,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'rgba(39, 113, 72)',  
        shadowOpacity: 0.21,  
        shadowRadius: 5,
    },
    ageAndGenderHeading: {
        fontFamily: Constants.fontFamily,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: Constants.margin,
    },
    circularChartContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    circularBarLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    graphColorMale: {
        width: 10,
        height: 10,
        backgroundColor: '#04751F',
        borderRadius: 10,
    },
    label: {
        fontFamily: Constants.fontFamily,
        marginStart: Constants.margin | +20,
        marginEnd: Constants.margin,
        fontSize: 16,
    },
    value: {
        fontFamily: Constants.fontFamily,
        marginStart: Constants.margin,
        fontWeight: '800',
        fontSize: 16,
    },
    graphColorFemale: {
        width: 10,
        height: 10,
        backgroundColor: '#70CF87',
        borderRadius: 10,
    },
    countryWise: {
        backgroundColor: Constants.colors.whiteColor,
        borderRadius: 20,
        marginStart:20,
        marginEnd:20,
        marginTop:32,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: 'rgba(39, 113, 72)',  
        shadowOpacity: 0.21,  
        shadowRadius: 5,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabs: {
        padding: Constants.padding,
        fontFamily: Constants.fontFamily,
        fontSize: 20,
        width: '50%',
        backgroundColor: 'rgba(229, 235, 237, 0.38)'
    },
    tabText: {
        fontFamily: Constants.fontFamily,
        fontSize: 19,
    },
    
    cityName: {
        fontFamily: Constants.fontFamily,
        fontSize: 18,
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
    },totalRevenue: {
        
        // marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    revenueBox:{
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
export default ViewUser