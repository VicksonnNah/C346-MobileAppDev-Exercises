import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { ToastAndroid } from 'react-native';

// Ex E : Replace the LOG IN Button with TouchableOpacity on Text that is also labelled as "LOG IN". When the text is pressed, an Alert with the message "Welcome!" will appear.
// Ex F : Assuming that this app is for Android, modify the code so that a Toast with the message "Welcome!" will appear when the text LOG IN is pressed on

// Ex G : Create a second TextInput labelled as "User Name" and place it above the password one. Modify your code so that when LOG IN is clicked, the
// Toast will display according to what is the value of the User Type's Picker, and what is the value of the User Name TextInput. So if the User Type is
// "Admin" and the User Name is "Bob", the Toast will display "Welcome Admin Bob".

const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = ()=>{
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    return (
        <View>
            <Text>User Type:</Text>
            <Picker onValueChange={(itemValue)=> setType(itemValue)}>
                <Picker.Item label='Admin' value='Admin' />
                <Picker.Item label='Guest' value='Guest' />
            </Picker>
            <Text>User Name:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText = {(text)=>setName(text)}/>
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText = {(text) => setPw(text)} />
            <TouchableOpacity onPress={() => ToastAndroid.show('Welcome, ' + type + ' ' + name,ToastAndroid.SHORT)}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
            <Text>{pw}</Text>
        </View>
    )
}

export default MyApp;