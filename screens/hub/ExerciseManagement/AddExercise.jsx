// Import necessary modules and components from React and React Native
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../../services/firebaseConfig';
import Settings from "../../../CSS/SettingsStyling";

// Functional component for the ExerciseAddPage
export default function ExerciseAddPage({ navigation }) {
    // State variables to manage exercise information and error messages
    const [exerciseName, setExerciseName] = useState('');
    const [numSteps, setNumSteps] = useState('');
    const [steps, setSteps] = useState([]);
    const [videoId, setVideoId] = useState('');
    const [error, setError] = useState('');

    // Function to handle adding a new exercise
    const handleAddExercise = async () => {
        // Checking if all required fields are filled
        if (!exerciseName || !numSteps || !videoId || steps.some(step => !step)) {
            setError("Please ensure all fields are completed");
            return;
        }

        // Constructing exercise data object
        const exerciseData = {
            exerciseName: exerciseName,
            videoId: videoId,
            steps: Object.fromEntries(steps.map((step, index) => [`Step ${index + 1}`, step])),
            uid: auth.currentUser.uid
        };

        // Adding exercise data to the 'Exercises' collection in Firestore
        await addDoc(collection(db, 'Exercises'), exerciseData);

        // Clearing error and navigating back after successful exercise addition
        setError("");
        navigation.goBack();
    };

    // Function to render step input text fields dynamically based on the number of steps
    const renderStepInputs = () => {
        const stepInputs = [];
        for (let i = 0; i < numSteps; i++) {
            stepInputs.push(
                <TextInput
                    style={Settings.addExerciseInput}
                    mode='flat'
                    activeUnderlineColor="#5194b8"
                    placeholderTextColor="#000000"
                    key={i}
                    placeholder={`Step ${i + 1}`}
                    onChangeText={(text) => {
                        const newSteps = [...steps];
                        newSteps[i] = text;
                        setSteps(newSteps);
                    }}
                />
            );
        }
        return stepInputs;
    };

    // Rendering the UI components
    return (
        <SafeAreaView style={Settings.container}>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <View>
                        {/* Title for the new exercise screen */}
                        <Text style={Settings.title}>New Exercise</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        {/* TextInput for entering exercise name */}
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter exercise name"
                            onChangeText={(text) => setExerciseName(text)}
                            style={Settings.addExerciseInput}
                        />

                        {/* TextInput for entering the number of steps */}
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter number of steps"
                            onChangeText={(text) => setNumSteps(parseInt(text, 10) || 0)}
                            keyboardType="numeric"
                            style={Settings.addExerciseInput}
                        />

                        {/* Dynamically rendering step input text fields */}
                        {renderStepInputs()}

                        {/* TextInput for entering video ID */}
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter video ID"
                            onChangeText={(text) => setVideoId(text)}
                            style={Settings.addExerciseInput}
                        />

                        {/* TouchableOpacity for triggering the exercise addition */}
                        <TouchableOpacity onPress={handleAddExercise} style={Settings.addExerciseOpac}>
                            <Text style={Settings.addExerciseOpacText}>Create</Text>
                        </TouchableOpacity>

                        {/* Displaying any error messages */}
                        <Text style={Settings.errorText}>{error}</Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
