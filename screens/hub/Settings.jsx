import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from "react-native";
import { deleteUser, signOut } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';
import Logo from "../../components/Logo";
import Settings from "../../CSS/SettingsStyling";

export default function SettingsScreen({ navigation }) {

    const handleDeleteAccount = () => {
        Alert.alert(
            "Delete Account",
            "Are you sure you want to delete your account?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Delete", onPress: () => handleConfirmDelete() }
            ]
        );
    };

    const handleConfirmDelete = async () => {
        const user = auth.currentUser;

        try {
            await deleteUser(user);
            await signOut(auth).then(() => {
                navigation.navigate("Login")
            });
            Alert.alert("Account Successfully Deleted");

        } catch (error) {
            console.log(error)
        }
    };

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <SafeAreaView style={Settings.container}>
            <View>
                <Text style={Settings.title}>Settings</Text>
            </View>

            <View style={Settings.profile}>
                <Logo />
                <Text style={Settings.profileName}>{auth.currentUser.displayName}</Text>
                <Text style={Settings.profileEmail}>{auth.currentUser.email}</Text>
            </View>

            <SafeAreaView style={Settings.title}>
                <Text style={Settings.settingsSectionText}>Account Settings</Text>
            </SafeAreaView>

            <SafeAreaView style={Settings.settingsActions}>

                <TouchableOpacity onPress={() => navigation.navigate('Add Exercise')} style={Settings.settingsOpac}>
                    <Text style={Settings.settingsText}>Create Exercise</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Update Email')} style={Settings.settingsOpac}>
                    <Text style={Settings.settingsText}>Change Email</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Update Password')} style={Settings.settingsOpac}>
                    <Text style={Settings.settingsText}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={(handleLogout)} style={Settings.settingsOpac}>
                    <Text style={Settings.settingsText}>Sign Out</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={(handleDeleteAccount)} style={Settings.deleteOpac}>
                    <Text style={Settings.settingsText}>Delete Account</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );
}

