import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import MapScreen from "../screens/MapScreen";
import PlaceDetailScScreen from "../screens/PlaceDetailsScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import Colors from "../constants/Colors";

const PlaceNavigation = createStackNavigator({
     placeList:PlaceListScreen,
      Map:{
          screen:MapScreen
      },
      PlaceDetail:PlaceDetailScScreen,
      newPlace:NewPlaceScreen,


},{
    defaultNavigation:{
         headerStyle:{
             backgroundColor:Colors.primary,
             headerTintColor:'white',
         }
    }
});


export default createAppContainer(PlaceNavigation);