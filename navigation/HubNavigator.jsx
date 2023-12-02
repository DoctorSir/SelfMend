import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ExerciseScreen from '../screens/hub/Exercise'
import LandingScreen from '../screens/hub/Landing'
import MoodScreen from '../screens/hub/MoodChart'
import SettingsScreen from '../screens/hub/Settings'
import JournalScreen from '../screens/hub/ListJournals'

const Tab = createBottomTabNavigator();

export default function HubNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            >
            <Tab.Screen
                name="Home"
                
                component={LandingScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarActiveTintColor: "#5194B8",
                    tabBarIcon: () => (
                        <FontAwesome5 name="home" size={24} color="black" />
                    )
                }}
            />

            <Tab.Screen
                name="Journal"
                component={JournalScreen}
                options={{
                    tabBarLabel: "Journal",
                    headerShown: false,
                    tabBarActiveTintColor: "#5194B8",
                    tabBarIcon: () => (
                        <FontAwesome5 name="journal-whills" size={24} color="black" />
                    )
                }}
            />

            <Tab.Screen
                name="Exercise"
                component={ExerciseScreen}
                options={{
                    tabBarLabel: "Exercise",
                    headerShown: false,
                    tabBarActiveTintColor: "#5194B8",
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
                    )
                }}
            />

            <Tab.Screen
                name="Mood"
                component={MoodScreen}
                options={{
                    tabBarLabel: "Mood",
                    headerShown: false,
                    tabBarActiveTintColor: "#5194B8",
                    tabBarIcon: () => (
                        <Entypo name="emoji-happy" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Settings",
                    headerShown: false,
                    tabBarActiveTintColor: "#5194B8",
                    tabBarIcon: () => (
                        <Ionicons name="settings-sharp" size={24} color="black" />
                    )
                }}
            />

        </Tab.Navigator>
    )
}