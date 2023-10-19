import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import { auth } from '../../services/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Logo from '../../components/Logo';
import Theme from '../../CSS/AppTheme';
import Auth from '../../CSS/AuthStyling';

export default function SignupScreen({ navigation }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validateFName = () => {
        const letters = /^[A-Za-z]+$/;
        if (!letters.test(firstName)) {
            setError("First Name Can Only Be Letters");
            setFirstName('');
        } else setError('');
    }

    const validateLName = () => {
        const letters = /^[A-Za-z]+$/;
        if (!letters.test(lastName)) {
            setError("Last Name Can Only Be Letters");
            setLastName('');
        } else setError('');
    }

    const validateEmail = () => {
        const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailFormat.test(email)) {
            setError("Invalid Email Format");
            setEmail('');
        } else setError('');
    }

    const validatePassword = () => {
        if ((password !== confirmPassword)) {
            setError("Password and Confirm Password Must Match");
            setPassword('');
            setConfirmPassword('');
        } else if (password.length < 8 || confirmPassword.length < 8) {
            setError("Password Must Be at Least 8 Characters Long");
            setPassword('');
            setConfirmPassword('');
        } else setError('');
    }

    const handleSignup = async () => {
        if (firstName !== "" && lastName !== "" && email !== "" & password !== "" & confirmPassword !== "") {
            try {
                
                await createUserWithEmailAndPassword(auth, email, password)
                await updateProfile(auth.currentUser, { displayName: `${firstName} ${lastName}` }).catch(
                    (err) => console.log(err)
                );

                setError('')
                navigation.navigate('Login');
            } catch (error) {
                console.log(error);
                setError('Account Creation failed! Please try again');
            }finally{
                auth.currentUser.reload() 
            }
    

        }

    }


    return (
        <SafeAreaView style={Theme.container}>

            <Logo style={Auth.logo} />

            <TextInput
                placeholder="First Name"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setFirstName(text)}
                onBlur={validateFName}
                value={firstName}
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Last Name"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setLastName(text)}
                onBlur={validateLName}
                value={lastName}
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Email"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setEmail(text)}
                onBlur={validateEmail}
                value={email}
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
                style={Theme.userInput}
            />

            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={"#000000"}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                onBlur={validatePassword}
                secureTextEntry
                style={Theme.userInput}
            />

            <TouchableOpacity onPress={(handleSignup)} style={Auth.loginOpac}>
                <Text style={Auth.actionButtonText}>Create Account</Text>
            </TouchableOpacity>

            <Text style={Theme.errorText}>{error}</Text>

        </SafeAreaView>
    );
}