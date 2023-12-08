// Import necessary modules and components from React and React Native
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { setDoc, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../../services/firebaseConfig';
import Settings from "../../../CSS/SettingsStyling";

// Functional component for the ExerciseModifyPage
export default function ExerciseModifyPage({ navigation, route }) {
    // Destructuring parameters from the route
    const { exerciseName, videoId, steps, documentID } = route.params;

    // State variable to manage exercise information, error messages, and modifications
    const [manageExercise, setManageExercise] = useState({
        exerciseNameModify: exerciseName || "",
        numSteps: Array.isArray(steps) ? steps.length : 0,
        stepsModify: Array.isArray(steps) ? [...steps] : [],
        videoIdModify: videoId || ""
    });
    const [error, setError] = useState('');

    // Function to render step input text fields dynamically based on the number of steps
    const renderStepInputs = () => {
        const stepInputs = [];
        for (let i = 0; i < manageExercise.numSteps; i++) {
            stepInputs.push(
                <TextInput
                    style={Settings.addExerciseInput}
                    mode='flat'
                    activeUnderlineColor="#5194b8"
                    placeholderTextColor="#000000"
                    key={i}
                    placeholder={`Step ${i + 1}`}
                    value={manageExercise.stepsModify[i] || ""}
                    onChangeText={(text) => {
                        const newSteps = [...manageExercise.stepsModify];
                        newSteps[i] = text;
                        setManageExercise({ ...manageExercise, stepsModify: newSteps });
                    }}
                />
            );
        }
        return stepInputs;
    };

    // Function to handle editing an existing exercise
    const handleEditExercise = async () => {
        try {
            // Checking if all required fields are filled
            if (!manageExercise.exerciseNameModify || manageExercise.numSteps < 0 || !manageExercise.videoIdModify || manageExercise.stepsModify.some(step => !step)) {
                setError("Please ensure all fields are completed");
                return;
            }

            // Adjust stepsModify based on the user's input
            const adjustedStepsModify = manageExercise.stepsModify.slice(0, manageExercise.numSteps);

            // Constructing updated exercise data object
            const updatedExerciseData = {
                exerciseName: manageExercise.exerciseNameModify,
                videoId: manageExercise.videoIdModify,
                steps: Object.fromEntries(adjustedStepsModify.map((step, index) => [`Step ${index + 1}`, step])),
                uid: auth.currentUser.uid
            };

            // Updating the exercise data in the Firestore collection
            await setDoc(doc(db, 'Exercises', documentID), updatedExerciseData);

            setError("");

            // Navigating back after successful exercise update
            navigation.goBack();
        } catch (error) {
            console.error('Error updating exercise:', error);
        }

        setError("");

        // Navigating back after handling errors
        navigation.goBack();
    };

    // Function to handle deleting an existing exercise
    const handleDeleteExercise = async () => {
        try {
            // Deleting the exercise document from the Firestore collection
            const exerciseRef = doc(db, 'Exercises', documentID);
            await deleteDoc(exerciseRef);

            // Navigating back after successful exercise deletion
            navigation.goBack();
        } catch (error) {
            console.error('Error deleting exercise:', error);
        }
    }

    // Rendering the UI components
    return (
        <SafeAreaView style={Settings.container}>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <View>
                        {/* Displaying the exercise name in the title */}
                        <Text style={Settings.title}>{exerciseName}</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        {/* TextInput for entering modified exercise name */}
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter exercise name"
                            value={manageExercise.exerciseNameModify}
                            onChangeText={(text) => setManageExercise({ ...manageExercise, exerciseNameModify: text })}
                            style={Settings.addExerciseInput}
                        />

                        {/* TextInput for entering the modified number of steps */}
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter number of steps"
                            value={manageExercise.numSteps.toString() || 0}
                            onChangeText={(text) => setManageExercise({ ...manageExercise, numSteps: parseInt(text, 10) || "" })}
                            keyboardType="numeric"
                            style={Settings.addExerciseInput}
                        />

                        {/* Dynamically rendering modified step input text fields */}
                        {renderStepInputs()}

                        {/* TextInput for entering modified video ID */}
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter video ID"
                            value={manageExercise.videoIdModify}
                            onChangeText={(text) => setManageExercise({ ...manageExercise, videoIdModify: text })}
                            style={Settings.addExerciseInput}
                        />

                        {/* TouchableOpacity for triggering the exercise update */}
                        <TouchableOpacity onPress={handleEditExercise} style={Settings.addExerciseOpac}>
                            <Text style={Settings.addExerciseOpacText}>Save</Text>
                        </TouchableOpacity>

                        {/* TouchableOpacity for triggering the exercise deletion */}
                        <TouchableOpacity onPress={handleDeleteExercise} style={Settings.deleteExerOpac}>
                            <Text style={Settings.addExerciseOpacText}>Delete</Text>
                        </TouchableOpacity>

                        {/* Displaying any error messages */}
                        <Text style={Settings.errorText}>{error}</Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
