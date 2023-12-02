import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from "react-native";
import { deleteUser, signOut } from "firebase/auth";
import { auth, db } from '../../services/firebaseConfig';
import Logo from "../../components/Logo";
import Settings from "../../CSS/SettingsStyling";
import { collection, query, getDocs } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsScreen({ navigation }) {
    const [hasDoctorRole, setHasDoctorRole] = useState(false);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const user = auth.currentUser;
                const userID = user.uid;

                const permissionedUsers = await getPermissionedUsers();
                const currentUserRole = permissionedUsers.find(item => item.id === userID);

                setHasDoctorRole(currentUserRole && currentUserRole.role === 'doctor');
            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        };

        fetchUserRole();
    }, []);

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

            <SafeAreaView style={Settings.accountTitle}>
                <Text style={Settings.settingsSectionText}>Account Settings</Text>
            </SafeAreaView>

            <SafeAreaView style={Settings.settingsActions}>

                {hasDoctorRole && (
                    <TouchableOpacity onPress={() => navigation.navigate('Manage Exercises')} style={Settings.settingsOpac}>
                        <Text style={Settings.settingsText}>Manage Exercises</Text>
                    </TouchableOpacity>
                )}

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
