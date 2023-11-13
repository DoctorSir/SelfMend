import React from "react";
import { View, StyleSheet } from "react-native";
import BreathingBubble from "../../components/BreathingBubble";

export default function BBP() {
  return (
    <View style={styles.container}>
      <BreathingBubble />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCF6EE", // Adjust the background color if needed
  },
});
