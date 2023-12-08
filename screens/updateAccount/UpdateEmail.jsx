// Import necessary dependencies and components from React and React Native
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { signOut, verifyBeforeUpdateEmail } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';
import Logo from '../../components/Logo';

// Define the ChangeEmailScreen component
export default function ChangeEmail({ navigation }) {
    // State variables for the new email and error message
    const [newEmail, setNewEmail] = useState('');
    const [error, setError] = useState('');

    // Get the current user
    const user = auth.currentUser;

    // Function to handle the email change
    const handleEmailChange = async () => {
        try {
            // Verify the new email and send a verification email
            await verifyBeforeUpdateEmail(user, newEmail).then(() => {
                Alert.alert(`Please verify your new email address at ${newEmail}`);
            });

            // Sign out and navigate to the login screen
            await signOut(auth).then(() => {
                navigation.navigate("Login")
            }).catch((error) => {
                console.error(error)
            });
        } catch (error) {
            // Handle errors related to sending the verification email
            setError("Unable to send verification email");
        }
    }

    // Function to validate the email format
    const validateEmail = () => {
        // Regular expression for validating email format
        const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // Check if the new email matches the expected format
        if (!emailFormat.test(newEmail)) {
            setError("Invalid Email Format");
            setNewEmail('');
        } else {
            setError('');
        }
    }

    // Render the ChangePasswordScreen component
    return (
        <SafeAreaView style={Theme.container}>
            <Logo />

            <Text style={Theme.title}>Change Email</Text>

            {/* Input field for entering the new email */}
            <TextInput
                style={Theme.userInput}
                placeholder="Enter New Email"
                value={newEmail}
                onChangeText={setNewEmail}
                onBlur={validateEmail}
                activeUnderlineColor="#5194b8"
            />

            {/* Button to trigger the email change */}
            <TouchableOpacity onPress={(handleEmailChange)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Change</Text>
            </TouchableOpacity>

            {/* Display error message if there is an error */}
            <Text style={Theme.errorText}>{error}</Text>
        </SafeAreaView>
    );
};
