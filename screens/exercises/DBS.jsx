import React, {useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Logo from "../../components/Logo";
import HubStyling from "../../CSS/HubStyling";
import YoutubePlayer from "react-native-youtube-iframe";

export default function DBS() {

    return (
        <SafeAreaView style={HubStyling.exerciseContainer}>
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>Diaphragmatic Breathing</Text>
            </View>

            <View style={HubStyling.exerciseSteps}>
                <Text style={HubStyling.exerciseStep}>
                    1. Find a Comfortable Position: Start by finding a quiet and comfortable place to sit or lie down.
                </Text >

                <Text style={HubStyling.exerciseStep}>
                    2. Relax Your Body: Relax your shoulders, facial muscles, jaw, and neck.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    3. Inhale Slowly Through Your Nose: Breathe in slowly and deeply through your nose.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    4. Exhale Slowly Through Your Mouth: Exhale slowly through your mouth."
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    5. Continue the Breathing Cycle: Inhale slowly for a count of 4-6 seconds and exhale for a similar count.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    6. Practice Regularly: Practice diaphragmatic breathing for at least a few minutes each day.
                </Text>
            </View>

            <View style={HubStyling.ytVideo}>
                <YoutubePlayer height={300} videoId={"UB3tSaiEbNY"} />
            </View>
        </SafeAreaView>
    );
}