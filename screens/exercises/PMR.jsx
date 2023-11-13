import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import HubStyling from "../../CSS/HubStyling";
import YoutubePlayer from "react-native-youtube-iframe";

export default function PMR() {
    return (
        <SafeAreaView style={HubStyling.exerciseContainer}>
            <View style={HubStyling.exerciseHeader}>
                <Text style={HubStyling.exerciseTitle}>Progressive Muscle Relaxation</Text>
            </View>

            <View style={HubStyling.exerciseSteps}>
                <Text style={HubStyling.exerciseStep}>
                    1. Choose a quiet, comfortable place to sit or lie down. Take a few deep breaths to relax your body and mind.
                </Text >

                <Text style={HubStyling.exerciseStep}>
                    2. Mentally scan your body from head to toe, identifying areas of tension or discomfort. Tense a specific muscle group for 5-10 seconds, then release and focus on the relaxation.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    3. Suddenly release the tension in that muscle group. Pay attention to the sensation of relaxation as the tension leaves your muscles. Let go of the tightness completely.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    4. Take a moment to breathe deeply, then move on to the next muscle group. Repeat the tension and relaxation process.
                </Text>

                <Text style={HubStyling.exerciseStep}>
                    5. Take a minute to be mindful of the present moment. Notice how your body feels and appreciate the sense of relaxation you've created.
                </Text>
            </View>

            <View style={HubStyling.ytVideo}>
                <YoutubePlayer height={300} videoId={"CERsn4gX9qc"} />
            </View>
        </SafeAreaView>
    );
}