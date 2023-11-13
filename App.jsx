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
import JournalEntryList from "./screens/hub/ListJournals";
import DBS from "./screens/exercises/DBS";
import FSE from "./screens/exercises/FSE";
import PMR from "./screens/exercises/PMR";
import BBP from "./screens/exercises/BBP";


// create new stack navigator to go between screens
const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initalRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Create Account" component={CreateAccountScreen} />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPasswordScreen}
          />

          <Stack.Screen name="Hub Navigator" component={HubNavigator} />
          <Stack.Screen name="Find Help" component={FindHelp} />
          <Stack.Screen name="Entry List" component={JournalEntryList} />
          <Stack.Screen name="New Entry" component={JournalEntry} />

          <Stack.Screen
            name="Update Password"
            component={UpdatePasswordScreen}
          />
          <Stack.Screen name="Update Email" component={UpdateEmailScreen} />

          <Stack.Screen name="DBS" component={DBS} />
          <Stack.Screen name="FSE" component={FSE} />
          <Stack.Screen name="PMR" component={PMR} />
          <Stack.Screen name="BBP" component={BBP} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}