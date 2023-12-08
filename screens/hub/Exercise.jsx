// Import necessary modules and components from React and React Native
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';

import HubStyling from '../../CSS/HubStyling';

// Functional component for displaying mental health exercises
export default function ExerciseScreen() {
    // Use navigation hook to navigate to other screens
    const navigation = useNavigation();
    
    // State variable to store the list of exercises
    const [exercises, setExercises] = useState([]);

    // Function to fetch exercises from Firestore
    const fetchExercises = async () => {
        // Define a Firestore query to get exercises ordered by exerciseName
        const entriesQuery = query(collection(db, "Exercises"), orderBy("exerciseName", "asc"));

        try {
            // Execute the query and get the snapshot of the documents
            const querySnapshot = await getDocs(entriesQuery);
            
            // Extract data from the documents and update the state
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setExercises(data);
        } catch (error) {
            console.error('Error fetching exercises:', error);
        }
    };

    // Use the useFocusEffect hook to fetch exercises when the screen is focused
    useFocusEffect(
        React.useCallback(() => {
            fetchExercises();
        }, [])
    );

    // Function to get the sorted list of steps from an exercise
    const getSteps = (exercise) => {
        const stepKeys = Object.keys(exercise.steps);

        if (stepKeys.length > 0) {
            // Sort the step keys based on the step number
            stepKeys.sort((a, b) => {
                const aNum = parseInt(a.replace('Step ', ''));
                const bNum = parseInt(b.replace('Step ', ''));
                return aNum - bNum;
            });

            // Map the sorted keys to the corresponding steps
            return stepKeys.map((key) => exercise.steps[key]);
        } else {
            return [];
        }
    };

    // Rendering the UI components
    return (
        <SafeAreaView style={HubStyling.exerciseContainer}>
            <View style={HubStyling.exerciseHeader}>
                {/* Header text for the ExerciseScreen */}
                <Text style={HubStyling.exerciseTitle}>Mental Health Exercises</Text>
            </View>

            {/* ScrollView to display the list of exercises */}
            <ScrollView contentContainerStyle={HubStyling.exerciseAction}>
                {exercises.map((exercise) => (
                    <View key={exercise.id}>

                        {/* TouchableOpacity for each exercise item */}
                        <TouchableOpacity
                            style={HubStyling.exerciseOpac}
                            onPress={() =>
                                navigation.navigate('Exercise Details', {
                                    exerciseName: exercise.exerciseName,
                                    videoId: exercise.videoId,
                                    steps: getSteps(exercise),
                                })
                            }
                        >
                            {/* Display the exercise name as text */}
                            <Text style={HubStyling.exerciseOpacText}>{exercise.exerciseName}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
