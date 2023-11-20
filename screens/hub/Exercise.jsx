import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, orderBy, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';

import HubStyling from '../../CSS/HubStyling';

export default function ExerciseScreen() {
    const navigation = useNavigation();
    const [exercises, setExercises] = useState([]);

    const fetchExercises = async () => {
        const entriesQuery = query(collection(db, "Exercises"), orderBy("exerciseName", "asc"));

        try {
            const querySnapshot = await getDocs(entriesQuery);
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setExercises(data);
        } catch (error) {
            console.error('Error fetching exercises:', error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchExercises();
        }, [])
    );

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
    
    // const handleDeleteExercise = async (exerciseId) => {
    //     try {
    //         // Delete the exercise document from Firestore using the exerciseId
    //         // ...
    //         // Update with actual implementation...
    
    //         // After successful deletion, fetch the updated list of exercises
    //         fetchExercises();
    //     } catch (error) {
    //         console.error('Error deleting exercise:', error);
    //     }
    // };

    return (
        <SafeAreaView style={HubStyling.exerciseContainer}>
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>Mental Health Exercises</Text>
            </View>

            <ScrollView contentContainerStyle={HubStyling.exerciseAction}>
                {exercises.map((exercise) => (
                                    <View key={exercise.id}>

                    <TouchableOpacity
                        style={HubStyling.exerciseOpac}
                       
                        // Uncomment line below to include exercise ID for deleting exercises  
                        // key={exercise.id} 

                        onPress={() =>
                            navigation.navigate('Exercise Details', {
                                exerciseName: exercise.exerciseName,
                                videoId: exercise.videoId,
                                steps: getSteps(exercise),
                            })
                        }
                    >
                        <Text style={HubStyling.exerciseOpacText}>{exercise.exerciseName}</Text>
                    </TouchableOpacity>

                    {/* New delete button
                    <TouchableOpacity
                        style={HubStyling.exerciseDeleteOpac}
                        onPress={() => handleDeleteExercise(exercise.id)}
                    >
                        <Text style={HubStyling.exerciseDeleteText}>Delete</Text>
                    </TouchableOpacity> */}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
