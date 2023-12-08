// Import necessary dependencies and components from React and React Native
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';
import Logo from '../../components/Logo';

// Define the ChangePasswordScreen component
export default function ChangePasswordScreen({ navigation }) {
    // State variables for the new password, confirm new password, current password, and error message
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle the password change
    const handleChangePassword = async () => {
        // Get the current user
        const user = auth.currentUser;

        try {
            // Reauthenticate the user with the current email and password
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential).then(() => {
                // Update the password and navigate to the Settings screen
                updatePassword(user, newPassword).then(() => {
                    navigation.navigate("Settings");
                    // Reload the user to reflect the updated information
                    user.reload();
                })
            });
        } catch (error) {
            console.error(error)
        }
    };

    // Function to validate the new password and confirm new password
    const validateNewPassword = () => {
        if ((newPassword !== confirmNewPassword)) {
            setError("Password and Confirm Password Must Match");
            setNewPassword('');
            setConfirmNewPassword('');
        } else if (newPassword.length < 8 || confirmNewPassword.length < 8) {
            setError("Password Must Be at Least 8 Characters Long");
            setNewPassword('');
            setConfirmNewPassword('');
        } else {
            setError('');
        }
    }

    // Render the ChangePasswordScreen component
    return (
        <SafeAreaView style={Theme.container}>
            <Logo />
            <Text style={Theme.title}>Change Password</Text>

            {/* Input field for entering the current password */}
            <TextInput
                style={Theme.userInput}
                placeholder="Enter Current Password"
                secureTextEntry={true}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                activeUnderlineColor="#5194b8"
            />

            {/* Input field for entering the new password */}
            <TextInput
                style={Theme.userInput}
                placeholder="Enter New Password"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
                activeUnderlineColor="#5194b8"
            />

            {/* Input field for confirming the new password */}
            <TextInput
                style={Theme.userInput}
                placeholder="Confirm New Password"
                secureTextEntry={true}
                onBlur={validateNewPassword}
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                activeUnderlineColor="#5194b8"
            />

            {/* Button to trigger the password change */}
            <TouchableOpacity onPress={(handleChangePassword)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Change</Text>
            </TouchableOpacity>

            {/* Display error message if there is an error */}
            <Text style={Theme.errorText}>{error}</Text>
        </SafeAreaView>
    );
};
