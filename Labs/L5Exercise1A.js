import React from 'react'
import { View, Text, TextInput } from 'react-native';

// Display the text "Password:" with a simple
// TextInput underneath.

const MyApp = () => {
    return (
        <View>
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}}/>
        </View>

    )
}

export default MyApp;