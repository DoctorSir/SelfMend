import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

export default function ChangePasswordScreen({ navigation }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = () => {
        // Add change password logic to update password in database

        // Without additional logic this simulates a password change
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={Theme.container}>
            <Logo />
            <TextInput
                placeholder="New Password"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setNewPassword(text)}
                value={newPassword}
                secureTextEntry
                style={Theme.userInput}
            />
            <TextInput
                placeholder="Confirm New Password"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setConfirmNewPassword(text)}
                value={confirmNewPassword}
                secureTextEntry
                style={Theme.userInput}
            />

            <TouchableOpacity onPress={(handleChangePassword)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Change Password</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>
        </SafeAreaView>
    );
}