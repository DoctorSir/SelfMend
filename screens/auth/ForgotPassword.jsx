import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { auth } from '../../services/firebaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";
import KeyboardAvoidingComponent from '../../components/KeboardAvoidingComponent';

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

    const validateEmail = () => {
        const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailFormat.test(email)) {
            setError("Invalid Email Format");
            setEmail('');
        } else setError('');
    }

    return (
        <SafeAreaView style={Theme.container}>
            <KeyboardAvoidingComponent style={Auth.keyboardAdj}>
                <Logo style={Auth.logo} />
                <Text style={Theme.title}>SelfMend Password Reset</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={"#000000"}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    onBlur={validateEmail}
                    style={Theme.userInput}
                    activeUnderlineColor="#5194b8"
                />

                <TouchableOpacity onPress={(handlePasswordReset)} style={Auth.loginOpac}>
                    <Text style={Auth.actionButtonText}>Send Email</Text>
                </TouchableOpacity>

                <Text style={Theme.errorText}>{error}</Text>
            </KeyboardAvoidingComponent>

        </SafeAreaView>

    );
}