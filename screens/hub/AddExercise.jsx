import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import Settings from "../../CSS/SettingsStyling";

export default function ExerciseAddPage({ navigation }) {
    const [exerciseName, setExerciseName] = useState('');
    const [numSteps, setNumSteps] = useState('');
    const [steps, setSteps] = useState([]);
    const [videoId, setVideoId] = useState('');
    const [error, setError] = useState('');

    const handleAddExercise = async () => {
        if (!exerciseName || !numSteps || !videoId || steps.some(step => !step)) {
            setError("Please ensure all fields are completed");
            return;
        }

        const exerciseData = {
            exerciseName: exerciseName,
            videoId: videoId,
            steps: Object.fromEntries(steps.map((step, index) => [`Step ${index + 1}`, step])),
        };

        await addDoc(collection(db, 'Exercises'), exerciseData);

        setError("");

        navigation.goBack();
    };

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

    return (
        <SafeAreaView style={Settings.container}>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <View>
                        <Text style={Settings.title}>New Exercise</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter exercise name"
                            onChangeText={(text) => setExerciseName(text)}
                            style={Settings.addExerciseInput}
                        />

                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter number of steps"
                            onChangeText={(text) => setNumSteps(parseInt(text, 10) || 0)}
                            keyboardType="numeric"
                            style={Settings.addExerciseInput}
                        />

                        {renderStepInputs()}

                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter video ID"
                            onChangeText={(text) => setVideoId(text)}
                            style={Settings.addExerciseInput}
                        />

                        <TouchableOpacity onPress={handleAddExercise} style={Settings.addExerciseOpac}>
                            <Text style={Settings.addExerciseOpacText}>Create</Text>
                        </TouchableOpacity>

                        <Text style={Settings.errorText}>{error}</Text>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
