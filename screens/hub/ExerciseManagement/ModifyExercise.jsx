import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { setDoc, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../../services/firebaseConfig';
import Settings from "../../../CSS/SettingsStyling";

export default function ExerciseModifyPage({ navigation, route }) {
    const { exerciseName, videoId, steps, documentID } = route.params;

    const [manageExercise, setManageExercise] = useState({
        exerciseNameModify: exerciseName || "",
        numSteps: Array.isArray(steps) ? steps.length : 0,
        stepsModify: Array.isArray(steps) ? [...steps] : [],
        videoIdModify: videoId || ""
    });
    const [error, setError] = useState('');

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
    
    const handleEditExercise = async () => {
        try {
            if (!manageExercise.exerciseNameModify || manageExercise.numSteps < 0 || !manageExercise.videoIdModify || manageExercise.stepsModify.some(step => !step)) {
                setError("Please ensure all fields are completed");
                return;
            }
    
            // Adjust stepsModify based on the user's input
            const adjustedStepsModify = manageExercise.stepsModify.slice(0, manageExercise.numSteps);
    
            const updatedExerciseData = {
                exerciseName: manageExercise.exerciseNameModify,
                videoId: manageExercise.videoIdModify,
                steps: Object.fromEntries(adjustedStepsModify.map((step, index) => [`Step ${index + 1}`, step])),
                uid: auth.currentUser.uid
            };
    
            await setDoc(doc(db, 'Exercises', documentID), updatedExerciseData);
    
            setError("");
    
            navigation.goBack();
        } catch (error) {
            console.error('Error updating exercise:', error);
        }
    
        setError("");
    
        navigation.goBack();
    };
    

    const handleDeleteExercise = async () => {
        try {
            const exerciseRef = doc(db, 'Exercises', documentID);
            await deleteDoc(exerciseRef);
            navigation.goBack();
        } catch (error) {
            console.error('Error deleting exercise:', error);
        }
    }

    return (
        <SafeAreaView style={Settings.container}>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <View>
                        <Text style={Settings.title}>{exerciseName}</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter exercise name"
                            value={manageExercise.exerciseNameModify}
                            onChangeText={(text) => setManageExercise({ ...manageExercise, exerciseNameModify: text })}
                            style={Settings.addExerciseInput}
                        />

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

                        {renderStepInputs()}

                        <TextInput
                            mode='flat'
                            activeUnderlineColor="#5194b8"
                            placeholderTextColor="#421018"
                            placeholder="Enter video ID"
                            value={manageExercise.videoIdModify}
                            onChangeText={(text) => setManageExercise({ ...manageExercise, videoIdModify: text })}
                            style={Settings.addExerciseInput}
                        />

                        <TouchableOpacity onPress={handleEditExercise} style={Settings.addExerciseOpac}>
                            <Text style={Settings.addExerciseOpacText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDeleteExercise} style={Settings.deleteExerOpac}>
                            <Text style={Settings.addExerciseOpacText}>Delete</Text>
                        </TouchableOpacity>

                        <Text style={Settings.errorText}>{error}</Text>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
