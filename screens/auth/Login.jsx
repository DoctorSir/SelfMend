import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text, TextInput } from "react-native-paper";
import { auth } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as Animatable from "react-native-animatable"; // Import the Animatable library

import Logo from "../../components/Logo";
import Theme from "../../CSS/AppTheme";
import Auth from "../../CSS/AuthStyling";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setError("");
      setEmail("");
      setPassword("");
      navigation.navigate("Hub Navigator");
    } catch (error) {
      setError("Sign In Failed! Check Email and Password");

      // Flash animation for the error text
      errorTextRef.current && errorTextRef.current.shake(); // Use the shake animation, you can choose others from the library
    }
  };

  const errorTextRef = React.createRef(); // Create a reference for the error text

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
            onChangeText={(text) => setEmail(text)}
            value={email}
            mode="flat"
            activeUnderlineColor="#5194b8"
          />

          <TextInput
            style={Theme.userInput}
            placeholder="Password"
            placeholderTextColor={"#000000"}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            mode="flat"
            activeUnderlineColor="#5194b8"
          />

          {/* Wrap the error text with Animatable.View for animations */}
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
