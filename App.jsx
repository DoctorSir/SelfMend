import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// imports for custom screens
import LoginScreen from './screens/auth/Login';
import CreateAccountScreen from './screens/auth/Signup'
import ForgotPasswordScreen from './screens/auth/ForgotPassword';
import JournalScreen from './screens/hub/Journal';
import LandingPage from './screens/hub/Landing';


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

                <Stack.Screen name="Landing" component={LandingPage} />
                <Stack.Screen name="Journal" component={JournalScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}