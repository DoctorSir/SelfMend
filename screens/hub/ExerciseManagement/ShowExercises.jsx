// Import necessary modules and components from React and React Native
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FAB } from "react-native-paper"
import { useNavigation } from '@react-navigation/native';
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { auth, db } from '../../../services/firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';

import HubStyling from '../../../CSS/HubStyling';

// Functional component for displaying and managing exercises
export default function ShowExercises() {
    // Accessing navigation hook for navigating between screens
    const navigation = useNavigation();

    // State variable to store the list of exercises
    const [exercises, setExercises] = useState([]);

    // Function to fetch exercises from Firestore based on the user's ID
    const fetchExercises = async () => {
        const user = auth.currentUser;
        const entriesQuery = query(collection(db, "Exercises"), where("uid", "==", user.uid), orderBy("exerciseName", "asc"));

        try {
            const querySnapshot = await getDocs(entriesQuery);
            // Extracting exercise data from the query snapshot
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setExercises(data);
        } catch (error) {
            console.error('Error fetching exercises:', error);
        }
    };

    // Using the useFocusEffect hook to fetch exercises when the screen is focused
    useFocusEffect(
        React.useCallback(() => {
            fetchExercises();
        }, [])
    );

    // Function to extract steps from an exercise object
    const getSteps = (exercise) => {
        const stepKeys = Object.keys(exercise.steps);

        if (stepKeys.length > 0) {
            stepKeys.sort((a, b) => {
                const aNum = parseInt(a.replace('Step ', ''));
                const bNum = parseInt(b.replace('Step ', ''));
                return aNum - bNum;
            });

            return stepKeys.map((key) => exercise.steps[key]);
        } else {
            return [];
        }
    };

    // Rendering the UI components
    return (
        <SafeAreaView style={HubStyling.exerciseContainer}>
            {/* Header section for exercise management */}
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>Exercise Management</Text>
            </View>

            {/* ScrollView to display the list of exercises */}
            <ScrollView contentContainerStyle={HubStyling.exerciseAction}>
                {exercises.map((exercise) => (
                    <View key={exercise.id}>
                        {/* TouchableOpacity for each exercise, navigating to Modify Exercise screen on press */}
                        <TouchableOpacity
                            style={HubStyling.exerciseOpac}
                            onPress={() =>
                                navigation.navigate('Modify Exercise', {
                                    exerciseName: exercise.exerciseName,
                                    videoId: exercise.videoId,
                                    steps: getSteps(exercise),
                                    documentID: exercise.id
                                })
                            }
                        >
                            <Text style={HubStyling.exerciseOpacText}>{exercise.exerciseName}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Floating Action Button (FAB) for adding a new exercise */}
            <FAB
                style={HubStyling.fab}
                icon="plus"
                color="#FCF6EE"
                onPress={() => navigation.navigate('Add Exercise')}
            />
        </SafeAreaView>
    );
}
