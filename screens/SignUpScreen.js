import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config.js";

import Logo from "../assets/images/logo.png"

const SignUpScreen = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSignUp = async () => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

            // Once the user is created, update the user's display name with the provided full name
            await userCredential.user.updateProfile({
                displayName: fullName,
            });

            console.log('User signed up successfully!', userCredential.user);
            // Reset input fields after successful sign-up
            setEmail('');
            setPassword('');
            setFullName('');
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error (e.g., display error message to the user)
        }
    };

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.form}>
                <Text style={styles.headerText}>SIGN UP</Text>
                <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={(text) => setFullName(text)} />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" autoCapitalize="none" />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />
                <TouchableOpacity onPress={handleSignUp} style={styles.buttonLog} >
                    <Text style={styles.logText}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.regContainer}>
                    <Text style={styles.subheaderText}>Already a user? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                        <Text style={styles.regText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    root: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },

    logo: {
        height: 150,
        width: 150,
        maxHeight: 300,
        maxWidth: 300,
        marginTop: 80,
    },

    form: {
        backgroundColor: "#8FB996",
        width: "100%",
        height: "65%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 40,
    },

    headerText: {
        alignSelf: "center",
        color: "#415D43",
        fontWeight: "bold",
        fontSize: 35,
        margin: 20,
    },

    input: {
        backgroundColor: "#EAEAEA",
        paddingHorizontal: 20,
        height: 50,
        marginBottom: 20,
        borderRadius: 15,
    },

    buttonLog: {
        backgroundColor: "#111D13",
        justifyContent: "center",
        alignSelf: "center",
        width: 150,
        height: 50,
        borderRadius: 10,
    },

    logText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "800",
    },

    regContainer: {
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
    },

    subheaderText: {
        fontSize: 18,
    },

    regText: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
