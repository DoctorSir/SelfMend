import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// imports for custom screens
import LoginScreen from './screens/auth/Login';
import CreateAccountScreen from './screens/auth/Signup'
import ForgotPasswordScreen from './screens/auth/ForgotPassword';
import HubNavigator from './navigation/HubNavigator';
import UpdateEmailScreen from './screens/updateAccount/UpdateEmail';
import UpdatePasswordScreen from './screens/updateAccount/UpdatePassword';
import FindHelp from './screens/hub/FindHelp';
import JournalEntry from './screens/hub/Journal';


// create new stack navigator to go between screens
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initalRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Create Account" component={CreateAccountScreen} />
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />

                <Stack.Screen name="Hub Navigator" component={HubNavigator} />
                <Stack.Screen name="Find Help" component={FindHelp} />
                <Stack.Screen name="New Entry" component={JournalEntry} />

                <Stack.Screen name="Update Password" component={UpdatePasswordScreen} />
                <Stack.Screen name="Update Email" component={UpdateEmailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}