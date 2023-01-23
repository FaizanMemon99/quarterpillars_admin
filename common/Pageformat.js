import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View,StyleSheet, Pressable } from "react-native";
import Fontawesome from "react-native-vector-icons/AntDesign"
const Pageformat=(props)=>{
    const navigation = useNavigation()
    return(
    <View style={styles.pageWrapper}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => navigation.navigate(props?.goBackLink ? props?.goBackLink : "/")}>
                <Fontawesome name="left" size={24} color="black" style={{ paddingLeft: 20 }} />
            </Pressable>
            <Text style={styles.headText}>
                {props?.headText ? props?.headText : ""}
            </Text>
        </View><View>
                <Text style={styles.descriptionText}>
                    {props?.descText ? props?.descText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ."}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageWrapper:{
        padding:30,
        paddingLeft:25,
        paddingRight:25
    },
    headText:{
        "fontFamily": "Avenir",
      "fontStyle": "normal",
      "fontWeight": "800",
      "fontSize": 24,
      "lineHeight":33,
      "color": "#000000",
      paddingLeft:20
    },
    descriptionText:{
        "fontFamily": "Avenir",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 12,
      "lineHeight": 16,
      "textTransform": "lowercase",
      "color": "#000000",
      paddingTop:22
    }
})

export default Pageformat