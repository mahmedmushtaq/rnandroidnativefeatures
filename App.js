import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlaceNavigation from "./navigation/PlacesNavigaiton";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import placeReducer from "./store/place-reducer";
import {init} from "./helpers/db";


init().catch(err=>{
    console.log("cannot be able to initialize db");
    console.log("err is = ",err)
})

const rootReducer = combineReducers({
  places:placeReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));


export default function App() {
  return (
     <Provider store={store}>
       <PlaceNavigation/>
     </Provider>
  );
}

const styles = StyleSheet.create({

});
