import {NEW_PLACE, SET_PLACE} from "./place-actions";
import Place from "../models/place";

const initialState = {
    placeData:[]
};

export default (state=initialState,action)=>{
    switch (action.type) {
       case NEW_PLACE:

            const newPlace = new Place(action.placeData.id,action.placeData.title,action.placeData.image);
            return{
                placeData: state.placeData.concat(newPlace)
            }

       case SET_PLACE:
            return {
                placeData: action.places.map(
                    pl => new Place(pl.id.toString(), pl.title, pl.imageUri)
                )
            }
       default:
            return state;
    }
}
