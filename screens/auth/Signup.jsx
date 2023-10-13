import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

export default function SignupScreen({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        // Add account creation logic here

        // With no additonal logic this simulates signup
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={Theme.container}>

            <Logo style={Auth.logo} />

            <TextInput
                placeholder="Name"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setName(text)}
                value={name}
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Email"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Who is your favorite instructor?"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setSecurityAnswer(text)}
                value={securityAnswer}
                style={Theme.userInput}
            />

            <TouchableOpacity onPress={(handleSignup)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Create Account</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>

        </SafeAreaView>
    );
}