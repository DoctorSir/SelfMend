// Import necessary modules from React, React Native, and other libraries
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

// Import Firebase authentication configuration
import { auth } from '../../services/firebaseConfig';

// Import custom Logo component and utility function for getting random reminders
import Logo from '../../components/Logo';
import { getRandomReminder } from '../../utils/Reminders';

// Import styles for the Hub and authentication screens
import HubStyling from '../../CSS/HubStyling';
import Auth from '../../CSS/AuthStyling';

// Main component for the Landing Page
export default function LandingPage({ navigation }) {
    // State variable for the random reminder
    const [reminder, setReminder] = useState('');

    // useEffect hook to set a random reminder when the component mounts
    useEffect(() => {
        // Call utility function to get a random reminder
        const randomReminder = getRandomReminder();
        // Set the reminder text in the state
        setReminder(randomReminder.text);
    }, []);

    return (
        <SafeAreaView style={HubStyling.container}>
            {/* Display the custom Logo component */}
            <Logo />

            {/* Display a welcome message with the user's display name */}
            <Text style={HubStyling.welcomeText}>{`Welcome ${auth.currentUser.displayName}!`}</Text>

            {/* Display the random reminder text */}
            <Text style={HubStyling.reminderText}>{reminder}</Text>

            {/* Button to navigate to the 'Find Help' screen */}
            <TouchableOpacity onPress={() => navigation.navigate('Find Help')} style={HubStyling.helpOpac}>
                <Text style={Auth.actionButtonText}>Find Support Near You</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
