import React from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppTheme from "../CSS/AppTheme";


// Creates pressable app navigator to go back a screen where needed
export default function BackButton() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Pressable onPress={navigation.goBack} style={AppTheme.headerButton}>
                <Ionicons name="arrow-back" size={24} color={"#421018"} />
            </Pressable>
        </SafeAreaView>


    );
}