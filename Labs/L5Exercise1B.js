import React from 'react'
import { View, Text, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Above the password text input box, add a Picker that is labeled "User Type:". It has 2 possible options -
// Admin and Guest. For each option, the value is the same as the label.

const MyApp = ()=>{
    return (
        <View>
            <Text>User Type:</Text>
            <Picker
                onValueChange={(itemValue)=>console.log(itemValue)}>
                <Picker.Item label='Admin' value='Admin' />
                <Picker.Item label='Guest' value='Guest' />
            </Picker>
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}}/>
        </View>
    )
}

export default MyApp;