
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TextInput } from 'react-native-paper';
import { signOut } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';

import Logo from '../../components/Logo';
// import Theme from '../../CSS/AppTheme';
import Hub from '../../CSS/HubStyling';

export default function LandingPage() {

    return (
        <SafeAreaView style={Hub.container}>
            <Logo />

            <Text>{`Welcome ${auth.currentUser.displayName}!`}</Text>

        </SafeAreaView>

    )
}




