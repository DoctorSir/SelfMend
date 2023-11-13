import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import HubStyling from "../../CSS/HubStyling";
import YoutubePlayer from "react-native-youtube-iframe";

export default function FSE() {
    return (
        <SafeAreaView style={HubStyling.exerciseContainer}>
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>4-7-8 Breathing</Text>
            </View>

            <View style={HubStyling.exerciseSteps}>
                <Text style={HubStyling.exerciseStep}>
                    1. Find a quiet place, sit or lie in a comfortable position, and close your eyes
                </Text >

                <Text style={HubStyling.exerciseStep}>
                    2. Take a deep breathe: Inhale quietly and deeply for 4 seconds.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    3. Hold your breathe: Hold your breathe for a count of 7 seconds.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    4. Exhale slowly: Exhale slowly through your mouth for a count of 8 seconds.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    5. Repeat the cycle, maintain a rhythm, and practice regularly.
                </Text>
            </View>

            <View style={HubStyling.ytVideo}>
                <YoutubePlayer height={300} videoId={"YRPh_GaiL8s"} />
            </View>
        </SafeAreaView>
    );
}