import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { signOut, verifyBeforeUpdateEmail } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';
import Logo from '../../components/Logo';

export default function ChangePasswordScreen({ navigation }) {
    const [newEmail, setNewEmail] = useState('');
    const [error, setError] = useState('');

    const user = auth.currentUser;

    const handleEmailChange = async () => {
        try {
            await verifyBeforeUpdateEmail(user, newEmail).then(() => {
                Alert.alert(`Please verify your new email address at ${newEmail}`);
            });
            await signOut(auth).then(() => {
                navigation.navigate("Login")
            }).catch((error) => {
                console.error(error)
            })
        } catch (error) {
            setError("Unable to send verification email")
        }

    }

    const validateEmail = () => {
        const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailFormat.test(newEmail)) {
            setError("Invalid Email Format");
            setEmail('');
        } else setError('');
    }

    return (
        <SafeAreaView style={Theme.container}>
            <Logo />

            <Text style={Theme.title}>Change Email</Text>

            <TextInput
                style={Theme.userInput}
                placeholder="Enter New Email"
                value={newEmail}
                onChangeText={setNewEmail}
                onBlur={validateEmail}
                activeUnderlineColor="#5194b8"
            />

            <TouchableOpacity onPress={(handleEmailChange)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Change</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>

        </SafeAreaView>
    );
};

