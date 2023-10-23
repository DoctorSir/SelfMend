
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TextInput } from 'react-native-paper';
import { signOut } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling';

export default function LandingPage({ navigation }) {

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <SafeAreaView>
            <Logo />

            <Text>{`Welcome ${auth.currentUser.displayName}!`}</Text>

            <TouchableOpacity onPress={(handleLogout)} style={Hub.logoutOpac}>

                <Text style={Hub.actionButtonText}>Logout</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => (navigation.navigate("Settings"))} style={Hub.logoutOpac}>

                <Text style={Hub.actionButtonText}>Settings</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => (navigation.navigate("Journal"))} style={Hub.logoutOpac}>

                <Text style={Hub.actionButtonText}>Journal</Text>

            </TouchableOpacity>




        </SafeAreaView>

    )
}




