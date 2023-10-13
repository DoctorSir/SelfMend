import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

export default function ForgotPasswordScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [error, setError] = useState('');


    const handlePasswordReset = () => {
        // Add logic to validate text input to database info

        // With no additional logic this simulates a correct reset and redirects to change password
        navigation.navigate('Change Password');
    }

    return (
        <SafeAreaView style={Theme.container}>
            <Logo />
            <TextInput
                placeholder="Email"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={Theme.userInput}
            />
            <TextInput
                placeholder="Who is your favorite instructor?"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setSecurityAnswer(text)}
                value={securityAnswer}
                style={Theme.userInput}
            />

            <TouchableOpacity onPress={(handlePasswordReset)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Submit</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>
        </SafeAreaView>

    );
}