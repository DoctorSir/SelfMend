import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FAB } from "react-native-paper"
import { useNavigation } from '@react-navigation/native';
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { auth, db } from '../../../services/firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';

import HubStyling from '../../../CSS/HubStyling';

export default function ShowExercises() {
    const navigation = useNavigation();
    const [exercises, setExercises] = useState([]);

    const fetchExercises = async () => {
        const user = auth.currentUser;
        const entriesQuery = query(collection(db, "Exercises"), where("uid", "==", user.uid), orderBy("exerciseName", "asc"));

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

    return (
        <SafeAreaView style={HubStyling.exerciseContainer}>
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>Exercise Management</Text>
            </View>

            <ScrollView contentContainerStyle={HubStyling.exerciseAction}>
                {exercises.map((exercise) => (
                    <View key={exercise.id}>

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
            <FAB
                style={HubStyling.fab}
                icon="plus"
                color="#FCF6EE"
                onPress={() => navigation.navigate('Add Exercise')}
            />

        </SafeAreaView>
    );
}
