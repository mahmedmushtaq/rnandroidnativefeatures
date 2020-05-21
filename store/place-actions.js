export const NEW_PLACE="NEW_PLACE";
export const SET_PLACE="SET_PLACE";

import * as FileSystem from "expo-file-system";
import {insertPlace,fetchPlaces} from "../helpers/db";


export const newPlace = (title,image)=>async dispatch=>{
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try{
        await FileSystem.moveAsync({
            from:image,
            to:newPath
         });

       const dbResult =  await insertPlace(title,newPath,'Dummy Address',12.5,15.6);



        dispatch({
            type:NEW_PLACE,
            placeData:{  id:dbResult.insertId.toString(),title,image:newPath}
        });
    }catch(err){
        console.log("image move error = ",err);
        throw err;
    }


};

export const loadPlaces = () => async dispatch=>{

    try{
        const dbResult = await fetchPlaces();

        dispatch({
            type:SET_PLACE,
            places:dbResult.rows._array,
        });
    }catch(err){
        console.log("err loading places from db = ",err);
        throw err;
    }
}