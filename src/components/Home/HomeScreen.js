import React, { useEffect, useRef, useState } from "react";
import { Animated, View,StyleSheet, StatusBar,Pressable,Image, ScrollView,Text } from "react-native";
import globalStyles from "../../../common/globalStyles";
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from "react-native-vector-icons/Entypo"
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Images from "../../assets/images/Images";
import { useNavigation } from "@react-navigation/native";
import Constants from "../../../common/Constants";
import Home from "./Home";
import Delivery from "../Delivery/Delivery"
import Settings from "../Settings/Settings"
import Profile from "../Profile/Profile"
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeScreen=(props)=>{
    const scaleValue = useRef(new Animated.Value(1)).current
    const offsetValue = useRef(new Animated.Value(0)).current
    const navigation=useNavigation()
    const [showDrawer,setshowDrawer]=useState(false)
    const [activeMenu, setActiveMenu] = useState('')
    const [activeTab,setactiveTab]=useState("home")
    const [editStatus,seteditStatus]=useState(false)
    const [UserData,setUserData]=useState()
    const getUserData=async()=>{
        setUserData(JSON.parse(await AsyncStorage.getItem("UserData")))
    }
    useEffect(()=>{
        getUserData()
        if(props?.route?.params?.type)
        setactiveTab(props?.route?.params?.type)
        seteditStatus(false)
    },[props])
    useEffect(()=>{
        seteditStatus(false)
        console.log("user data=>",UserData);
    },[activeTab,UserData])
    return(
        <View style={[globalStyles.wrapper,{backgroundColor:"#e5e5e5",height:"100%"}]}>
        {
            Animated?.timing(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
        {
            Animated?.timing(offsetValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
        {showDrawer && 
            <View style={styles.menubg}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.header}>

                <View style={styles.profileDetails}>
                    <Pressable onPress={()=>setshowDrawer(!showDrawer)} style={{ zIndex: 999,position:"absolute",left:"120%",top:0 }}><AntDesign name='close' size={26}/></Pressable>
                    <View style={styles.profileIcon}>
                        <Image source={
                            UserData?.image?{
                                uri:`${Constants.BASE_IMAGE_URL}${JSON.parse(UserData?.image)}`
                            }:
                            Images.avatar} 
                        // style={{resizeMode:"stretch"}}
                        style={{ width: 60, height: '100%' }}
                         />
                    </View>
                    <View style={{marginStart:10}}>
                        <Text style={styles.preofileName}>{UserData?.gender==="Male"?"Mr":"Miss"}. {UserData?.username}</Text>
                        <Text style={styles.founder}>Admin</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.drawerItemContainer}>
                {
                    setMenuItem(setActiveMenu, activeMenu, 'mailIcon', 'MailIcon', 'Support Emails', navigation, '/support-emails', props)
                }
                {
                    setMenuItem(setActiveMenu, activeMenu, 'ant', 'team', 'User Management', navigation, '/user-management', props)
                }
                {
                    setMenuItem(setActiveMenu, activeMenu, 'material', 'ticket-outline', 'Bulk Promotions', navigation, '/bulk-promotions', props)
                }
                {
                    setMenuItem(setActiveMenu, activeMenu, 'star', 'star', 'App Ratings', navigation, '/app-ratings', props)
                }
                {
                    setMenuItem(setActiveMenu, activeMenu, 'material', 'repeat', 'Transaction List', navigation, '/trans-list', props)

                }
                {
                    setMenuItem(setActiveMenu, activeMenu, 'feather', 'alert-octagon', 'About', navigation, '/About', props)
                }

            </ScrollView>
            <Pressable
                onPress={() => {
                    AsyncStorage.clear()
                    navigation.navigate('/')}}
                style={{ flexDirection: 'row', margin: 12, marginLeft: 0,marginEnd:0, backgroundColor: Constants.colors.primaryColor, padding: 16, paddingRight: 0 }}>
                <AntDesign name='logout' size={22} color={'#fff'} style={{ marginLeft: 12 }} />
                <Text style={{ color: '#fff', fontFamily: Constants.fontFamily, fontWeight: '700', fontSize: 18, marginLeft: 12 }}>Logout</Text>
            </Pressable>
        </View>}
        <Animated.View style={{
            opacity: showDrawer ? Platform.OS=="android"?0.3:.3 : 1, position: 'absolute',top:0, zIndex: 1,right: 0, bottom: 0, left: showDrawer?"60%":0,height:"100%", backgroundColor: '#E5E5E5', transform: [
                { scale: scaleValue ? scaleValue : 0 },
                { translateX: offsetValue ? offsetValue : 0 },
            ],
            width:"100%",
        }}>
        <View style={[styles.logoContainer, {marginTop:27,marginStart:24,marginBottom:25,}]}>
                      <Pressable onPress={()=>setshowDrawer(!showDrawer)} style={{zIndex: 999,marginTop:10}}>
                            {
                                !showDrawer?<Image source={Images.hamburgerMenuIcon} />:<AntDesign name='close' size={26} />
                            }
                            
                        </Pressable> 
                        
                                <View style={{marginStart: 26}}>
                                    <View style={{width:Constants.width,display:'flex',alignItems:'center',flexDirection:'row'}}>
                                    <Text style={styles.welcome}>Hello!</Text>
                                    {activeTab==="profile"&&!editStatus&&<Feather name="edit-2" size={20} style={{paddingStart:200}}
                                    onPress={()=>seteditStatus(true)}
                                    />}
                                    {editStatus&&activeTab==="profile"&&
<Pressable style={[globalStyles.button, { width:"auto",marginTop: 0,marginStart:170,backgroundColor:"transparent",borderColor:Constants.colors.primaryColor,borderWidth:1}]}
                 onPress={()=>seteditStatus(false)}
                 ><Text style={[globalStyles.btnText,{textTransform:"none",color:Constants.colors.primaryColor}]}>Save</Text></Pressable>
                                    }
                                    {/* <FontAwesome5Icon name="pen" size={20} style={{paddingLeft:100}}/> */}
                                    </View>
                                    <Text style={styles.companyName}>{UserData?.gender==="Male"?"Mr":"Miss"}. {UserData?.username}</Text>
                                </View>
                                
                    </View>
                    <ScrollView style={{height:"100%",flex:1,marginBottom:5}}>
                    {activeTab==="profile"?
                    <Profile
                    editStatus={editStatus}
                    seteditStatus={seteditStatus}
                    />
                    :
                    activeTab==="delivery"?
                    <Delivery/>:
                    activeTab==="settings"?
                    <Settings/>:
                    <Home/>
                    }
                    </ScrollView>
                    <View style={[styles.container, {borderBottomLeftRadius: showDrawer?0:0}]}>
            <Pressable onPress={()=>setactiveTab('home')} style={[styles.tabItem]}>
                <AntDesign name='home' style={[styles.tabIcon, {color: activeTab==='home'?Constants.colors.primaryColor:'#BBBBBB',}]} />
                <Text style={[styles.tabLabel, {color: activeTab==='home'?Constants.colors.primaryColor:'#BBBBBB', }]}>Home</Text>
            </Pressable>
            <Pressable onPress={()=>setactiveTab('delivery')} style={styles.tabItem}>
                <AntDesign name='shoppingcart' style={[styles.tabIcon, {color: activeTab==='delivery'?Constants.colors.primaryColor:'#BBBBBB', }]} />
                <Text style={[styles.tabLabel, {color: activeTab==='delivery'?Constants.colors.primaryColor:'#BBBBBB', }]}>Delivery</Text>
            </Pressable>
            <Pressable onPress={()=>setactiveTab('settings')} style={styles.tabItem}>
                <Feather name='settings' style={[styles.tabIcon, {color: activeTab==='settings'?Constants.colors.primaryColor:'#BBBBBB', }]} />
                <Text style={[styles.tabLabel, , {color: activeTab==='settings'?Constants.colors.primaryColor:'#BBBBBB', }]}>Settings</Text>
            </Pressable>
            {<Pressable onPress={()=>setactiveTab('profile')} style={styles.tabItem}>
                <Feather name='user' style={[styles.tabIcon, {color: activeTab==='profile'?Constants.colors.primaryColor:'#BBBBBB', }]} />
                <Text style={[styles.tabLabel, {color: activeTab==='profile'?Constants.colors.primaryColor:'#BBBBBB', }]}>Profile</Text>
                        </Pressable>}
        </View>
        </Animated.View>
        </View>
    );
}

const setMenuItem = (setActiveMenu, activeMenu, icon, iconName, title, navigation, url, props, setModalVisible, modalVisible, setShowDrawer) => {
    const modalFunction = () => {
        setModalVisible(!modalVisible)
        setShowDrawer(false)
    }
    return (
        <Pressable style={[styles.drawerItem, { backgroundColor: activeMenu === title ? 'rgba(0, 169, 40, 0.1);' : 'transparent', padding: 14 }]} onPress={() => {
            setActiveMenu(title)
                navigation.navigate(url)
        }}>
            {
                icon === 'feather' ? <Feather name={iconName} size={26} color={'#fff'} /> : null
            }
            {
                icon === 'fa5' ? <FontAwesome5 name={iconName} size={26} color={'#fff'} /> : null
            }
            {
                icon === 'material' ? <MaterialCommunityIcons name={iconName} size={26} color={'#fff'} /> : null
            }
            {
                icon === 'ant' ? <AntDesign name={iconName} size={26} color={'#fff'} /> : null
            }
            {
                icon === 'en' ? <Entypo name={iconName} size={26} color={'#fff'} /> : null
            }
            {
                icon === 'oct' ? <Octicons name={iconName} size={26} color={'#fff'} /> : null
            }
            {
                icon === 'fa' ? <FontAwesome name={iconName} size={26} color={'#fff'} /> : null
            }
            {
                icon === 'mailIcon' ? <Image source={Images.MailIcon} /> : null
            }
            {
                icon === 'star' ? <Image source={Images.StarIcon} /> : null
            }
            <Text style={[styles.menuName]}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    logoContainer:{
        flexDirection:"row"
    },
    menuName: {
        fontFamily: Constants.fontFamily,
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 12,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menubg: {
        flex: 1,
        zIndex: 9999,
        width: '60%',
        color:Constants.colors.whiteColor,
        backgroundColor: Constants.colors.panelColor,
    },          
    header: {
        padding: Constants.padding,
        paddingStart: 12,
        height: 120,
        marginTop: 20,
    },
    profileDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        // width: '62%',
        paddingBottom: Constants.padding,
    },
    profileIcon: {
        borderRadius: Constants.borderRadius,
        borderWidth: 1,
        borderColor: '#fff',
        // padding: 8,
        marginEnd: 6,
        marginTop: 10
    },
    preofileName: {
        fontFamily: Constants.fontFamily,
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        textTransform: "capitalize"
    },
    founder: {
        color: '#fff',
        opacity: 0.78,
        fontFamily: Constants.fontFamily,
        // color: Constants.colors.whiteColor,
        textTransform: "capitalize"
    },
    drawerItemContainer: {
        marginTop: 12,
        padding: 12,
        // paddingLeft: 0,
        flexGrow: 1,
        opacity:1,
        zIndex:9
    },
    welcome: {
        "fontFamily": "Avenir",
        "fontStyle": "normal",
        "fontWeight": "900",
        "fontSize": 28,
        "color": "#424242"
    },
    companyName: {
        "fontFamily": "Avenir",
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": 28,
        "color": "#424242"
    },
    container: {
        width:"100%",
        backgroundColor: Constants.colors.whiteColor,
        padding: Constants.padding,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    tabItem: {
        alignItems: 'center',
    },
    tabIcon: {
        fontSize: 28,
        color: '#BBBBBB',
    },
    tabLabel: {
        fontFamily: Constants.fontFamily,
        fontSize: 16,
        color: '#BBBBBB',
        marginTop: 4,
    },
})

export default HomeScreen