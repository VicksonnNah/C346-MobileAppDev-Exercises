import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const QuizQuestion = ({ imageSource,questionText, options, selectedValue, onValueChange }) => {
    return (
        <View style={styles.questionCard}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.questionText}>{questionText}</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                >
                    <Picker.Item label="Select an answer..." value="" />
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default function App() {
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');

    const correctAnswers = {
        q1: 'Elephant',
        q2: 'Leopard',
        q3: 'Stork',
        q4: 'Blue Whale',
        q5: 'True'
    };

    const handleSubmit = () => {
        let score = 0;
        if (q1 === correctAnswers.q1) score++;
        if (q2 === correctAnswers.q2) score++;
        if (q3 === correctAnswers.q3) score++;
        if (q4 === correctAnswers.q4) score++;
        if (q5 === correctAnswers.q5) score++;

        let feedback = '';

        if (score === 5) {
            feedback = "Well done! You got a perfect score!";
        } else if (score >= 2) {
            feedback = "Good effort! Keep practicing!";
        } else {
            feedback = "You can do better next time! Give it another try!";
        }

        Alert.alert(`Score: ${score}/5`, feedback);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <FontAwesome6 name="paw" size={24} color="#333" style={styles.headerIcon} />
                <Text style={styles.headerTitle}>Animal Quiz</Text>
            </View>

            <QuizQuestion
                questionText="What animal is this?"
                imageSource={require('../img/elephant.jpg')}
                options={['Elephant', 'Rhino', 'Hippo']}
                selectedValue={q1}
                onValueChange={(itemValue) => setQ1(itemValue)}
            />

            <QuizQuestion
                questionText="What animal is this?"
                imageSource={require('../img/leopard.jpg')}
                options={['Cheetah', 'Leopard', 'Tiger']}
                selectedValue={q2}
                onValueChange={(itemValue) => setQ2(itemValue)}
            />

            <QuizQuestion
                questionText="What animal is this?"
                imageSource={require('../img/stork.jpg')}
                options={['Stork', 'Eagle', 'Kingfisher']}
                selectedValue={q3}
                onValueChange={(itemValue) => setQ3(itemValue)}
            />

            <QuizQuestion
                questionText="What animal is this?"
                imageSource={require('../img/bluewhale.jpg')}
                options={['Blue Whale', 'Sperm Whale', 'Fin Whale']}
                selectedValue={q4}
                onValueChange={(itemValue) => setQ4(itemValue)}
            />

            <QuizQuestion
                questionText="True or False: A platypus is a mammal."
                imageSource={require('../img/platypus.jpg')}
                options={['True', 'False']}
                selectedValue={q5}
                onValueChange={(itemValue) => setQ5(itemValue)}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 40,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    headerIcon: {
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    questionCard: {
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    questionText: {
        fontSize: 16,
        color: '#666',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    pickerContainer: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginTop: 5,
    },
    submitButton: {
        backgroundColor: '#4682B4',
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});