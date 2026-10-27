import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// Movie Component accepting title, year, icon_name, and poster
const Movie = ({ title, year, icon_name, poster }) => {
  return (
      <View style={styles.movieContainer}>
        <Image source={poster} style={styles.posterImage} />
        <Text style={styles.movieText}>
          {title} {year} <FontAwesome6 name={icon_name} size={20} color="#B23B23" />
        </Text>
      </View>
  );
};

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
    paddingVertical: 40,
    alignItems: 'center',
  },
  movieContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  posterImage: {
    width: 350,
    height: 450,
    resizeMode: 'contain',
  },
  movieText: {
    fontSize: 18,
    marginTop: 8,
  },
});