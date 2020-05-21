import React from "react";
import {StyleSheet,View,Text} from "react-native";


const PlaceDetailScScreen = props=>{

    return(
        <View>
           <Text>Place Detail</Text>
        </View>
    )
}

PlaceDetailScScreen.navigationOptions = navData=>{
    return{
        headerTitle:navData.navigation.getParam("placeTitle")
    }
}

export default PlaceDetailScScreen;