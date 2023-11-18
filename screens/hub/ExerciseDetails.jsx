// ExerciseDetails.js
import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import HubStyling from '../../CSS/HubStyling';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function ExerciseDetails({ route }) {
    const { exerciseName, videoId, steps } = route.params;

    return (
        <SafeAreaView style={HubStyling.container}>
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>{exerciseName}</Text>
            </View>

            <ScrollView style={HubStyling.exerciseDetailsScrollContainer}>
                <View style={HubStyling.exerciseSteps}>
                    {steps.map((step, index) => (
                        <Text key={index} style={HubStyling.exerciseStep}>
                            {`${index + 1}. ${step}`}
                        </Text>
                    ))}
                </View>

                <View style={HubStyling.ytVideo}>
                    <YoutubePlayer height={300} videoId={videoId} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
