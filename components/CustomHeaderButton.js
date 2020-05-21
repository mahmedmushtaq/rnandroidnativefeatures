import React from "react";
import {Stylesheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {HeaderButton} from "react-navigation-header-buttons";


export default props=>{

    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            Iconsize={45}
            color={"black"}

        />
    )
}