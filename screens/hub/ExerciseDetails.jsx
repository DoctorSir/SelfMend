// Import necessary modules and components from React and React Native
import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import HubStyling from '../../CSS/HubStyling';
import YoutubePlayer from 'react-native-youtube-iframe';

// Functional component for displaying exercise details
export default function ExerciseDetails({ route }) {
    // Extract exercise details from the route parameters
    const { exerciseName, videoId, steps } = route.params;

    // Rendering the UI components
    return (
        <SafeAreaView style={HubStyling.container}>
            {/* Header section with the exercise title */}
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>{exerciseName}</Text>
            </View>

            {/* ScrollView to allow scrolling for exercise details */}
            <ScrollView style={HubStyling.exerciseDetailsScrollContainer}>
                {/* View to display exercise steps */}
                <View style={HubStyling.exerciseSteps}>
                    {/* Map through each step and display its index and text */}
                    {steps.map((step, index) => (
                        <View key={index} style={HubStyling.stepContainer}>
                            <Text style={HubStyling.stepText}>{`${index + 1}.`}</Text>
                            <Text style={HubStyling.exerciseStep}>{step}</Text>
                        </View>
                    ))}
                </View>

                {/* View to display the YouTube video player */}
                <View style={HubStyling.ytVideo}>
                    <YoutubePlayer height={300} videoId={videoId} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
