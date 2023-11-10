import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { auth } from '../../services/firebaseConfig';
import Logo from '../../components/Logo';
import { getRandomReminder } from '../../utils/Reminders';
import HubStyling from '../../CSS/HubStyling';
import Auth from '../../CSS/AuthStyling';

export default function LandingPage({ navigation }) {
    const [reminder, setReminder] = useState('');

    useEffect(() => {
        const randomReminder = getRandomReminder();
        setReminder(randomReminder.text);
    }, []);

    return (
        <SafeAreaView style={HubStyling.container}>
            <Logo />
            <Text style={HubStyling.welcomeText}>{`Welcome ${auth.currentUser.displayName}!`}</Text>

            <Text style={HubStyling.reminderText}>{reminder}</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Find Help')} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Find Support Near You</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
