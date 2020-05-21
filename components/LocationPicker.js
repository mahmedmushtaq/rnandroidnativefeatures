import React from "react";
import {View,Button,Text,ActivityIndicator,Alert,StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';


const LocationPicker = props=>{

    const [pickedLocation,setPickedLocation] = React.useState('');
    const [isFetching,setFetching] = React.useState(false);


    const verifyPermissions = async ()=>{
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if(result.status !== 'granted'){
            Alert.alert("Required Location Permissions",[
                {text:'Okay'}
            ])

            return false;
        }

        return true;

    }

    const getLocationHandler =  async ()=>{
        const hasPermission = await verifyPermissions();
        if(!hasPermission){
            return;
        }

        try{
            setFetching(true);
           const location =  await Location.getCurrentPositionAsync({
                timeout: 5000
            });
           console.log(location);
           // console.log(location);
            setFetching(false);

        }catch(err){
           // console.log("err occur = ",err);
            Alert.alert("Could not be able to fetch location",[{
                text:'Okay'
            }])
        }

    }



    return(
        <View style={styles.locationPicker}>
            <View style={styles.mapPreview}>
                {
                    isFetching ? (
                        <ActivityIndicator color={Colors.primary} size={"large"}/>
                    ):( <Text>No location chosen yet!</Text>)
                }

            </View>
            <Button
                title="Get User Location"
                color={Colors.primary}
                onPress={getLocationHandler}

            />
        </View>

    )
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LocationPicker;