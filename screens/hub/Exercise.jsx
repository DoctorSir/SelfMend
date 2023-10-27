
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

// import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/ExerStyling';

export default function ExercisePage() {

    return (
      <SafeAreaView style={Hub.container}>
        <Text style={Hub.titleText}>Wellness Exercises</Text>
        <Text style={Hub.exerciseText}>
          Here are some mental health techniques to improve your emotional
          well-being, reduce stress and induce relaxation:
        </Text>

        <Text style={Hub.subText}>4-7-8 Breathing</Text>
        <Text style={Hub.subText}>Diaphragmatic Breathing</Text>
        <Text style={Hub.subText}>Progressive Muscle Relaxation</Text>
        <Text style={Hub.subText}>Positive Affirmations</Text>
        <Text style={Hub.subText}>Mindfulness Meditation</Text>
      </SafeAreaView>
    );
}