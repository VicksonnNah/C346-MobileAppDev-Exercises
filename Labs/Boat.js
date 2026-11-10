import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <FontAwesome6 name={icon_name} size={22} color="#4A6A8B" style={styles.icon} />
                <Text style={styles.title}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={poster} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 25,
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    icon: {
        marginRight: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'uppercase',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
        lineHeight: 20,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 4,
    },
});

export default Boat;