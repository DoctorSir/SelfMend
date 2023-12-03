import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';
import Logo from '../../components/Logo';

export default function ChangePasswordScreen({ navigation }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = async () => {
        const user = auth.currentUser;

        try {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential).then(() => {
                updatePassword(user, newPassword).then(() => {
                    navigation.navigate("Settings");
                    user.reload();
                })
            });
        } catch (error) {
            console.error(error)
        }

    };

    const validateNewPassword = () => {
        if ((newPassword !== confirmNewPassword)) {
            setError("Password and Confirm Password Must Match");
            setNewPassword('');
            setConfirmNewPassword('');
        } else if (newPassword.length < 8 || confirmNewPassword.length < 8) {
            setError("Password Must Be at Least 8 Characters Long");
            setNewPassword('');
            setConfirmNewPassword('');
        } else setError('');
    }

    return (
        <SafeAreaView style={Theme.container}>
            <Logo />
            <Text style={Theme.title}>Change Password</Text>
            <TextInput
                style={Theme.userInput}
                placeholder="Enter Current Password"
                secureTextEntry={true}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                activeUnderlineColor="#5194b8"
            />
            <TextInput
                style={Theme.userInput}
                placeholder="Enter New Password"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
                activeUnderlineColor="#5194b8"
            />
            <TextInput
                style={Theme.userInput}
                placeholder="Confirm New Password"
                secureTextEntry={true}
                onBlur={validateNewPassword}
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                activeUnderlineColor="#5194b8"
            />

            <TouchableOpacity onPress={(handleChangePassword)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Change Password</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>

        </SafeAreaView>
    );
};

