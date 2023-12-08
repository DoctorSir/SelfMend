// Import necessary modules and components from React and React Native
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import { auth } from '../../services/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import KeyboardAvoidingComponent from '../../components/KeboardAvoidingComponent';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

// Functional component for the SignupScreen
export default function SignupScreen({ navigation }) {
    // State variables to manage user input fields, password confirmation, and error messages
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Function to validate the format of the first name
    const validateFName = () => {
        const letters = /^[A-Za-z]+$/;
        if (!letters.test(firstName)) {
            setError("First Name Can Only Be Letters");
            setFirstName('');
        } else {
            setError('');
        }
    }

    // Function to validate the format of the last name
    const validateLName = () => {
        const letters = /^[A-Za-z]+$/;
        if (!letters.test(lastName)) {
            setError("Last Name Can Only Be Letters");
            setLastName('');
        } else {
            setError('');
        }
    }

    // Function to validate the format of the email
    const validateEmail = () => {
        const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailFormat.test(email)) {
            setError("Invalid Email Format");
            setEmail('');
        } else {
            setError('');
        }
    }

    // Function to validate the password and confirm password fields
    const validatePassword = () => {
        if (password !== confirmPassword) {
            setError("Password and Confirm Password Must Match");
            setPassword('');
            setConfirmPassword('');
        } else if (password.length < 8 || confirmPassword.length < 8) {
            setError("Password Must Be at Least 8 Characters Long");
            setPassword('');
            setConfirmPassword('');
        } else {
            setError('');
        }
    }

    // Function to handle the signup process
    const handleSignup = async () => {
        // Checking if all required fields are filled
        if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && confirmPassword !== "") {
            try {
                // Creating a new user with the provided email and password
                await createUserWithEmailAndPassword(auth, email, password);

                // Updating the user profile with the combined first and last name
                await updateProfile(auth.currentUser, { displayName: `${firstName} ${lastName}` });

                // Clearing error and navigating to the Login screen after successful signup
                setError('');
                navigation.navigate('Login');
            } catch (error) {
                // Handling signup failures and updating the error state
                console.error(error);
                setError('Account Creation failed! Please try again');
            } finally {
                // Reloading the current user data
                auth.currentUser.reload();
            }
        }
    }

    // Rendering the UI components
    return (
        <SafeAreaView style={Theme.container}>
            {/* Using a custom KeyboardAvoidingComponent for better user experience */}
            <KeyboardAvoidingComponent style={Auth.keyboardAdj}>
                {/* Logo component for the screen */}
                <Logo style={Auth.logo} />

                {/* Title for the sign-up screen */}
                <Text style={Theme.title}>SelfMend Sign Up</Text>

                {/* TextInput for entering the first name */}
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor={"#000000"}
                    onChangeText={(text) => setFirstName(text)}
                    onBlur={validateFName}
                    value={firstName}
                    style={Theme.userInput}
                    activeUnderlineColor="#5194b8"
                />

                {/* TextInput for entering the last name */}
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor={"#000000"}
                    onChangeText={(text) => setLastName(text)}
                    onBlur={validateLName}
                    value={lastName}
                    style={Theme.userInput}
                    activeUnderlineColor="#5194b8"
                />

                {/* TextInput for entering the email address */}
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={"#000000"}
                    onChangeText={(text) => setEmail(text)}
                    onBlur={validateEmail}
                    value={email}
                    style={Theme.userInput}
                    activeUnderlineColor="#5194b8"
                />

                {/* TextInput for entering the password */}
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={"#000000"}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                    style={Theme.userInput}
                    activeUnderlineColor="#5194b8"
                />

                {/* TextInput for confirming the password */}
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={"#000000"}
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    onBlur={validatePassword}
                    secureTextEntry
                    style={Theme.userInput}
                    activeUnderlineColor="#5194b8"
                />

                {/* TouchableOpacity for triggering the signup process */}
                <TouchableOpacity onPress={handleSignup} style={Auth.loginOpac}>
                    <Text style={Auth.actionButtonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Displaying any error messages */}
                <Text style={Theme.errorText}>{error}</Text>
            </KeyboardAvoidingComponent>
        </SafeAreaView>
    );
}
