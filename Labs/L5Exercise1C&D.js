import React from 'react'
import {View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// Exercise C : Add a Button with the title "LOG IN" below the password TextInput box.
// Exercise D : Add code that will make an Alert appear with the message "Welcome!" when the LOG IN button pressed.

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
            <Button title = "Log In"
                    onPress={()=>Alert.alert('Welcome!')}

            />
        </View>
    )
}

export default MyApp;