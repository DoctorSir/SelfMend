import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Logo from "../../components/Logo";
import HubStyling from "../../CSS/HubStyling";
import BreathingBubble from "../../components/BreathingBubble";


export default function ExerciseScreen({ navigation }) {
    return (
      <SafeAreaView style={HubStyling.exerciseContainer}>
        <View style={HubStyling.exerciseHeader}>
          <Text style={HubStyling.exerciseTitle}>Mental Health Exercises</Text>
          <Logo />
        </View>

        <View style={HubStyling.exerciseAction}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DBS")}
            style={HubStyling.exerciseOpac}
          >
            <Text style={HubStyling.exerciseOpacText}>
              Diaphragmatic Breathing
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("FSE")}
            style={HubStyling.exerciseOpac}
          >
            <Text style={HubStyling.exerciseOpacText}>4-7-8 Breathing</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PMR")}
            style={HubStyling.exerciseOpac}
          >
            <Text style={HubStyling.exerciseOpacText}>
              Progressive Muscle Relaxation
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("BBP")}
            style={HubStyling.exerciseOpac}
          >
            <Text style={HubStyling.exerciseOpacText}>
              Breathing Bubble
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

