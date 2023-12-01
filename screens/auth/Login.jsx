import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Text, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { auth } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Animatable from "react-native-animatable";
import { Vibration } from "react-native";


import Logo from "../../components/Logo";
import Theme from "../../CSS/AppTheme";
import Auth from "../../CSS/AuthStyling";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFirstError, setIsFirstError] = useState(true); // New state variable

  useEffect(() => {
    // Load the last used email from AsyncStorage
    const loadLastUsedEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem("lastUsedEmail");
        if (storedEmail) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error("Error loading last used email", error);
      }
    };

    loadLastUsedEmail();
  }, []); // Run this effect only once on component mount

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setError("");
      setEmail("");
      setPassword("");
      navigation.navigate("Hub Navigator");
    } catch (error) {
      setError("Sign In Failed. Please check your Email and Password.");
      // Vibrate on every error
      Vibration.vibrate();

      errorTextRef.current && errorTextRef.current.shake();
    }
  };
  const errorTextRef = React.createRef();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleRememberEmail = async () => {
    // Save the email to AsyncStorage
    try {
      await AsyncStorage.setItem("lastUsedEmail", email);
    } catch (error) {
      console.error("Error saving last used email", error);
    }
  };

  return (
    <SafeAreaView style={Theme.container}>
      <Logo style={Auth.logo} />
      <Text style={Theme.title}>SelfMend Sign In</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        style={Theme.loginContainer}
      >
        <ScrollView contentContainerStyle={Theme.scroll}>
          <TextInput
            style={Theme.userInput}
            placeholder="Email"
            placeholderTextColor={"#000000"}
            onChangeText={handleEmailChange}
            value={email}
            mode="flat"
            activeUnderlineColor="#5194b8"
            returnKeyType="next"
          />

          <TextInput
            style={Theme.userInput}
            placeholder="Password"
            placeholderTextColor={"#000000"}
            secureTextEntry
            onChangeText={handlePasswordChange}
            value={password}
            mode="flat"
            activeUnderlineColor="#5194b8"
            onSubmitEditing={() => {
              handleRememberEmail();
              handleLogin();
            }}
            returnKeyType="go"
          />

          <Animatable.View ref={errorTextRef}>
            <Text style={Theme.errorText}>{error}</Text>
          </Animatable.View>

          <TouchableOpacity onPress={handleLogin} style={Auth.loginOpac}>
            <Text style={Auth.actionButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Forgot Password")}
            style={Auth.additionalOptions}
          >
            <Text style={Auth.additionalOptionsText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Create Account")}
            style={Auth.additionalOptions}
          >
            <Text style={Auth.additionalOptionsText}>Create Account</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
