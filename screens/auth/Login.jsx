import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, StyleSheet } from 'react-native-paper';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // add auth logic here
    }

    return (
        <SafeAreaView style={Theme.container}>

            <Logo style={Auth.logo} />

            <TextInput
                style={Theme.userInput}
                placeholder="Email"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setEmail(text)}
                value={email}
                mode='flat'
            />

            <TextInput
                style={Theme.userInput}
                placeholder="Password"
                placeholderTextColor={"#000000"}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
                mode='flat'
            />

            <TouchableOpacity onPress={(handleLogin)} style={Auth.loginOpac}>
                <Text style={Auth.LoginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')} style={Auth.additionalOptions}>
                <Text style={Auth.additionalOptionsText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Create Account')} style={Auth.additionalOptions}>
                <Text style={Auth.additionalOptionsText}>Create Account</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>

        </SafeAreaView>
    );
}