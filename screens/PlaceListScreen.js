import React,{useEffect} from "react";
import {FlatList} from "react-native";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/CustomHeaderButton";
import {useDispatch, useSelector} from "react-redux";
import PlaceItem from "../components/PlaceItem";
import {loadPlaces} from "../store/place-actions";


const PlaceListScreen = props=>{

    const places = useSelector(store=>store.places.placeData);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(loadPlaces());
    }, [dispatch]);

    return(
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PlaceItem
                    image={itemData.item.imageUri}
                    title={itemData.item.title}
                    address={null}
                    onSelect={() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                />
            )}
        />
    )
}

PlaceListScreen.navigationOptions = navData=>{

    return{
        headerTitle:"All Places",
        headerRight:()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>

                <Item
                    title={"New"}
                    iconName={"md-add"}
                    onPress={()=>{
                        navData.navigation.navigate("newPlace")
                    }}
                    />

            </HeaderButtons>

        )
    }
}

export default PlaceListScreen;