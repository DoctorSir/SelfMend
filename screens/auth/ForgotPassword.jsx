import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { auth } from '../../services/firebaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

export default function ForgotPasswordScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');


    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                navigation.navigate('Login')
            })
            .catch(() => {
                setError("Reset failed to send! Try again")
            });
    }

    return (
        <SafeAreaView style={Theme.container}>
            <Logo />
            <Text style={Theme.title}>Password Reset</Text>
            <TextInput
                placeholder="Email"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={Theme.userInput}
            />

            <TouchableOpacity onPress={(handlePasswordReset)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Send Email</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>
        </SafeAreaView>

    );
}