import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Button,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import Colors from '../constants/Colors';
import {useDispatch} from "react-redux";
import {newPlace} from "../store/place-actions";
import ImgPicker from "../components/ImgPicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage,setSelectedImage] = useState('');
    const dispatch = useDispatch();

    const imageTakeHandler = (imgUri)=>{
        setSelectedImage(imgUri);
    }

    const titleChangeHandler = text => {
        // you could add validation
        setTitleValue(text);
    };

    const savePlace  = ()=>{
        dispatch(newPlace(titleValue,selectedImage));
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                />
                <ImgPicker onImagePick={imageTakeHandler}/>
                <LocationPicker/>

                <Button title="Save Place" color={Colors.primary} onPress={savePlace} />
            </View>
        </ScrollView>
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;