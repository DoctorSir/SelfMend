// Import necessary modules and components from React and React Native
import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { auth } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Animatable from "react-native-animatable";
import { Vibration } from "react-native";
import KeyboardAvoidingComponent from "../../components/KeboardAvoidingComponent";

import Logo from "../../components/Logo";
import Theme from "../../CSS/AppTheme";
import Auth from "../../CSS/AuthStyling";
import AuthStyling from "../../CSS/AuthStyling";

// Functional component for the LoginScreen
export default function LoginScreen({ navigation }) {
    // State variables to manage email, password, error messages, and shake animation
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [shakeKey, setShakeKey] = useState(0);

    // Function to handle the login process
    const handleLogin = async () => {
        try {
            // Attempting to sign in with the provided email and password
            await signInWithEmailAndPassword(auth, email, password);
            // Clearing error, email, and password after successful login
            setError("");
            setEmail("");
            setPassword("");
            // Navigating to the Hub Navigator screen
            navigation.navigate("Hub Navigator");
        } catch (error) {
            // Handling login failures
            setError("Sign In Failed. Please check your Email and Password.");

            // Triggering shake animation on the error text
            setShakeKey((prevKey) => prevKey + 1);

            // Vibrate on every login error
            Vibration.vibrate();

            // Using Animatable library to shake the error text
            errorTextRef.current && errorTextRef.current.shake();
        }
    };

    // Ref for the Animatable.View to trigger shake animation
    const errorTextRef = React.createRef();

    // Function to handle changes in the email input
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    // Function to handle changes in the password input
    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    // Rendering the UI components
    return (
        <SafeAreaView style={Theme.container}>
            {/* Using a custom KeyboardAvoidingComponent for better user experience */}
            <KeyboardAvoidingComponent style={AuthStyling.keyboardAdj}>
                {/* Logo component for the screen */}
                <Logo style={Auth.logo} />

                {/* Title for the sign-in screen */}
                <Text style={Theme.title}>SelfMend Sign In</Text>

                {/* TextInput for entering the email address */}
                <TextInput
                    style={Theme.userInput}
                    placeholder="Email"
                    placeholderTextColor={"#000000"}
                    onChangeText={handleEmailChange}
                    value={email}
                    mode="flat"
                    activeUnderlineColor="#5194b8"
                />

                {/* TextInput for entering the password */}
                <TextInput
                    style={Theme.userInput}
                    placeholder="Password"
                    placeholderTextColor={"#000000"}
                    secureTextEntry
                    onChangeText={handlePasswordChange}
                    value={password}
                    mode="flat"
                    activeUnderlineColor="#5194b8"
                />

                {/* Animatable.View for shaking the error text */}
                <Animatable.View animation="shake" key={shakeKey} ref={errorTextRef}>
                    <Text style={Theme.errorText}>{error}</Text>
                </Animatable.View>

                {/* TouchableOpacity for triggering the login process */}
                <TouchableOpacity onPress={handleLogin} style={Auth.loginOpac}>
                    <Text style={Auth.actionButtonText}>Sign In</Text>
                </TouchableOpacity>

                {/* TouchableOpacity for navigating to the Forgot Password screen */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Forgot Password")}
                    style={Auth.additionalOptions}
                >
                    <Text style={Auth.additionalOptionsText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* TouchableOpacity for navigating to the Create Account screen */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Create Account")}
                    style={Auth.additionalOptions}
                >
                    <Text style={Auth.additionalOptionsText}>Create Account</Text>
                </TouchableOpacity>
            </KeyboardAvoidingComponent>
        </SafeAreaView>
    );
}
