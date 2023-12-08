// Import necessary dependencies and components from React and React Native
import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from "react-native";
import { deleteUser, signOut } from "firebase/auth";
import { auth, db } from '../../services/firebaseConfig';
import Logo from "../../components/Logo";
import Settings from "../../CSS/SettingsStyling";
import { collection, query, getDocs } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the SettingsScreen component
export default function SettingsScreen({ navigation }) {
    // State variable to track whether the user has a 'doctor' role
    const [hasDoctorRole, setHasDoctorRole] = useState(false);

    // useEffect to fetch the user's role when the component mounts
    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                // Get the current user and user ID
                const user = auth.currentUser;
                const userID = user.uid;

                // Fetch the role from the additionalUserRoles collection
                const permissionedUsers = await getPermissionedUsers();
                const currentUserRole = permissionedUsers.find(item => item.id === userID);

                // Set the 'hasDoctorRole' state based on the fetched role
                setHasDoctorRole(currentUserRole && currentUserRole.role === 'doctor');
            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        };

        // Call the fetchUserRole function
        fetchUserRole();
    }, []);

    // Function to fetch permissioned users from the additionalUserRoles collection
    const getPermissionedUsers = async () => {
        const entriesQuery = query(
            collection(db, "additionalUserRoles"),
        );

        try {
            const querySnapshot = await getDocs(entriesQuery);
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    // Function to handle the delete account action with a confirmation alert
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

    // Function to handle the confirmed account deletion
    const handleConfirmDelete = async () => {
        const user = auth.currentUser;

        try {
            // Delete the user account, sign out, and navigate to the login screen
            await deleteUser(user);
            await signOut(auth).then(() => {
                navigation.navigate("Login")
            });
            Alert.alert("Account Successfully Deleted");

        } catch (error) {
            console.error(error)
        }
    };

    // Function to handle the logout action
    const handleLogout = async () => {
        // Save the last used email to AsyncStorage before signing out
        try {
            await AsyncStorage.setItem("lastUsedEmail", auth.currentUser.email);
        } catch (error) {
            console.error("Error saving last used email before logout", error);
        }

        // Sign out and navigate to the login screen
        signOut(auth)
            .then(() => {
                navigation.navigate("Login");
            })
            .catch((error) => {
                console.error("Error during logout", error);
            });
    };

    // Render the SettingsScreen component
    return (
        <SafeAreaView style={Settings.container}>
            <View>
                <Text style={Settings.title}>Settings</Text>
            </View>

            {/* Display user profile information */}
            <View style={Settings.profile}>
                <Logo />
                <Text style={Settings.profileName}>{auth.currentUser.displayName}</Text>
                <Text style={Settings.profileEmail}>{auth.currentUser.email}</Text>
            </View>

            {/* Account Settings Section */}
            <SafeAreaView style={Settings.accountTitle}>
                <Text style={Settings.settingsSectionText}>Account Settings</Text>
            </SafeAreaView>

            {/* Display various settings actions based on user role and actions */}
            <SafeAreaView style={Settings.settingsActions}>

                {/* Display 'Manage Exercises' option for users with 'doctor' role */}
                {hasDoctorRole && (
                    <TouchableOpacity onPress={() => navigation.navigate('Manage Exercises')} style={Settings.settingsOpac}>
                        <Text style={Settings.settingsText}>Manage Exercises</Text>
                    </TouchableOpacity>
                )}

                {/* Display 'Change Email' option */}
                <TouchableOpacity onPress={() => navigation.navigate('Update Email')} style={Settings.settingsOpac}>
                    <Text style={Settings.settingsText}>Change Email</Text>
                </TouchableOpacity>

                {/* Display 'Change Password' option */}
                <TouchableOpacity onPress={() => navigation.navigate('Update Password')} style={Settings.settingsOpac}>
                    <Text style={Settings.settingsText}>Change Password</Text>
                </TouchableOpacity>

                {/* Display 'Sign Out' option */}
                <TouchableOpacity onPress={(handleLogout)} style={Settings.settingsOpac}>
                    <Text style={Settings.settingsText}>Sign Out</Text>
                </TouchableOpacity>

                {/* Display 'Delete Account' option */}
                <TouchableOpacity onPress={(handleDeleteAccount)} style={Settings.deleteOpac}>
                    <Text style={Settings.settingsText}>Delete Account</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );
}
