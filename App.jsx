// Import necessary dependencies and components from React and React Native
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Import custom screens and components
import LoginScreen from './screens/auth/Login';
import CreateAccountScreen from './screens/auth/Signup'
import ForgotPasswordScreen from './screens/auth/ForgotPassword';
import HubNavigator from './navigation/HubNavigator';
import UpdateEmailScreen from './screens/updateAccount/UpdateEmail';
import UpdatePasswordScreen from './screens/updateAccount/UpdatePassword';
import FindHelp from './screens/hub/FindHelp';
import JournalEntry from './screens/hub/Journal';
import JournalEntryList from "./screens/hub/ListJournals";
import EditJournal from "./screens/hub/EditJournal";
import ExerciseDetails from './screens/hub/ExerciseDetails';
import MoodTracking from './screens/hub/MoodTracking';
import ShowExercises from "./screens/hub/ExerciseManagement/ShowExercises"
import AddExercise from './screens/hub/ExerciseManagement/AddExercise';
import ModifyExercise from "./screens/hub/ExerciseManagement/ModifyExercise";
import BackButton from './navigation/BackButton';

// Create a new stack navigator to navigate between screens
const Stack = createStackNavigator();

// Define the main App component
export default function App() {
    // Define header background color
    const headerBackgroundColor = '#FCF6EE'

    // Render the main app structure with navigation
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            {/* Stack Navigator to manage screen transitions */}
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                {/* Define screens and their configurations */}
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Create Account"
                    component={CreateAccountScreen}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />
                <Stack.Screen name="Forgot Password"
                    component={ForgotPasswordScreen}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />

                <Stack.Screen name="Hub Navigator" component={HubNavigator} options={{ gestureEnabled: false }} />
                <Stack.Screen name="Find Help"
                    component={FindHelp}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />

                <Stack.Screen name="Entry List" component={JournalEntryList} />
                <Stack.Screen name="New Entry"
                    component={JournalEntry}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />
                <Stack.Screen name="Edit Entry"
                    component={EditJournal}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />

                <Stack.Screen name="Update Password"
                    component={UpdatePasswordScreen}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />
                <Stack.Screen name="Update Email"
                    component={UpdateEmailScreen}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />

                <Stack.Screen name="Exercise Details"
                    component={ExerciseDetails}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />

                <Stack.Screen name="Manage Exercises"
                    component={ShowExercises}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />
                <Stack.Screen name="Add Exercise"
                    component={AddExercise}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />

                <Stack.Screen name="Modify Exercise"
                    component={ModifyExercise}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />

                <Stack.Screen name="New Mood"
                    component={MoodTracking}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: "",
                        headerStyle: { backgroundColor: headerBackgroundColor },
                        headerLeft: () => <BackButton />
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
