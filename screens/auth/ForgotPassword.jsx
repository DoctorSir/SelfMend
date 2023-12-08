// Import necessary modules and components from React and React Native
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { auth } from '../../services/firebaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";
import KeyboardAvoidingComponent from '../../components/KeboardAvoidingComponent';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

// Functional component for the ForgotPasswordScreen
export default function ForgotPasswordScreen({ navigation }) {
    // State variables to manage email input and error messages
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Function to handle the password reset process
    const handlePasswordReset = () => {
        // Using Firebase's authentication service to send a password reset email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Navigating to the Login screen after successful password reset email send
                navigation.navigate('Login');
            })
            .catch(() => {
                // Handling errors if password reset email fails to send
                setError("Reset failed to send! Try again");
            });
    }

    // Function to validate the email format
    const validateEmail = () => {
        // Regular expression for a valid email format
        const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        // Checking if the entered email matches the valid format
        if (!emailFormat.test(email)) {
            // Setting an error message and clearing the email input if the format is invalid
            setError("Invalid Email Format");
            setEmail('');
        } else {
            // Clearing the error message if the email format is valid
            setError('');
        }
    }

    // Rendering the UI components
    return (
        <SafeAreaView style={Theme.container}>
            {/* Using a custom KeyboardAvoidingComponent for better user experience */}
            <KeyboardAvoidingComponent style={Auth.keyboardAdj}>
                {/* Logo component for the screen */}
                <Logo style={Auth.logo} />
                
                {/* Title for the password reset screen */}
                <Text style={Theme.title}>SelfMend Password Reset</Text>
                
                {/* TextInput for entering the email address */}
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={"#000000"}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    onBlur={validateEmail}
                    style={Theme.userInput}
                    activeUnderlineColor="#5194b8"
                />

                {/* TouchableOpacity for triggering the password reset process */}
                <TouchableOpacity onPress={handlePasswordReset} style={Auth.loginOpac}>
                    <Text style={Auth.actionButtonText}>Send Email</Text>
                </TouchableOpacity>

                {/* Displaying any error messages */}
                <Text style={Theme.errorText}>{error}</Text>
            </KeyboardAvoidingComponent>
        </SafeAreaView>
    );
}
