import React, { useState } from "react";
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

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [shakeKey, setShakeKey] = useState(0); // Add shakeKey state


    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError("");
            setEmail("");
            setPassword("");
            navigation.navigate("Hub Navigator");
        } catch (error) {
            setError("Sign In Failed. Please check your Email and Password.");

            // Shake the error text on every error
            setShakeKey((prevKey) => prevKey + 1);

            // Vibrate on every error
            Vibration.vibrate();

            errorTextRef.current && errorTextRef.current.shake();
        }
    };
    const errorTextRef = React.createRef();

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    return (
        <SafeAreaView style={Theme.container}>
            <KeyboardAvoidingComponent style={AuthStyling.keyboardAdj}>
                    <Logo style={Auth.logo} />
                    <Text style={Theme.title}>SelfMend Sign In</Text>
                    <TextInput
                        style={Theme.userInput}
                        placeholder="Email"
                        placeholderTextColor={"#000000"}
                        onChangeText={handleEmailChange}
                        value={email}
                        mode="flat"
                        activeUnderlineColor="#5194b8"
                        returnKeyType="next"
                    />

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

                    <Animatable.View animation="shake" key={shakeKey} ref={errorTextRef}>
                        <Text style={Theme.errorText}>{error}</Text>
                    </Animatable.View>

                    <TouchableOpacity onPress={handleLogin} style={Auth.loginOpac}>
                        <Text style={Auth.actionButtonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Forgot Password")}
                        style={Auth.additionalOptions}
                    >
                        <Text style={Auth.additionalOptionsText}>Forgot Password?</Text>
                    </TouchableOpacity>

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
