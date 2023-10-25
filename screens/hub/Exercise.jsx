
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

// import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling';

export default function ExercisePage() {

    return (
        <SafeAreaView style={Hub.container}>

            <Text style={Hub.actionButtonText}>Exercise is FUN!</Text>

        </SafeAreaView>

    )
}