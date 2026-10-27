import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Exercise #1 - #4: Component accepting title, year, icon_name, and poster props
const Movie = ({ title, year, icon_name, poster }) => {
    return (
        <View style={styles.movieCard}>
            <Image source={poster} style={styles.poster} />
            <Text style={styles.titleText}>
                {title} {year} <FontAwesome6 name={icon_name} size={24} color="#B23B23" />
            </Text>
        </View>
    );
};

// Exercise #5 & #6: Main App component using ScrollView and required movie items
export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Movie
                title="Doctor Sleep"
                year="2019"
                icon_name="skull"
                poster={require('./img/doctor-sleep.jpg')}
            />
            <Movie
                title="Midway"
                year="2020"
                icon_name="person-rifle"
                poster={require('./img/midway.jpg')}
            />
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        alignItems: 'center',
    },
    movieCard: {
        marginBottom: 30,
        alignItems: 'center',
    },
    poster: {
        width: 350,
        height: 450,
        resizeMode: 'contain',
    },
    titleText: {
        fontSize: 18,
        marginTop: 10,
    },
});