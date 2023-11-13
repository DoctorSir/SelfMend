import {
  SafeAreaView,
  View,
  StyleSheet,
  Animated,
  Easing,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import HubStyling from "../CSS/HubStyling";
import Logo from "./Logo";


const BreathingBubble = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [breathText, setBreathText] = useState("Breathe In");
  const [timer, setTimer] = useState(5);
  const timerIntervalRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);

    const breathAnimation = Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 4000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(breathAnimation).start();

    // Clear the previous interval before starting a new one
    clearInterval(timerIntervalRef.current);

    timerIntervalRef.current = setInterval(() => {
      setBreathText((prevText) =>
        prevText === "Breathe In" ? "Breathe Out" : "Breathe In"
      );
    }, 5000);

    setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 5)); // Reset timer to 5 seconds
    }, 1000);
  };

  const stopAnimation = () => {
    setIsAnimating(false);

    Animated.loop(null); // Stop the loop
    clearInterval(timerIntervalRef.current);
    setBreathText("Breathe In");
    setTimer(5);
  };

  useEffect(() => {
    if (isAnimating) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return () => {
      clearInterval(timerIntervalRef.current);
    };
  }, [isAnimating]);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.timerText}>{timer}s</Text>
        <Animated.View
          style={[styles.bubble, { transform: [{ scale: scaleValue }] }]}
        >
          <Text style={styles.breathText}>{breathText}</Text>
        </Animated.View>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => setIsAnimating((prev) => !prev)}
        >
          <Text style={styles.buttonText}>
            {isAnimating ? "Stop Animation" : "Start Animation"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  breathText: {
    color: "white",
    fontSize: 30,
  },
  timerText: {
    position: "absolute",
    bottom: 310,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 30,
    color: "black",
  },
  controlButton: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default BreathingBubble;
