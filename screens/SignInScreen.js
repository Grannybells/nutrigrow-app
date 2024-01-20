import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { firebase } from "../config.js";
import { useNavigation } from "@react-navigation/native";

import Logo from "../assets/images/logo.png"

const SignInScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('User signed in successfully!', userCredential.user);
            // Reset input fields after successful sign-in
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle error (e.g., display error message to the user)
        }
    };

    return (
        <View style={styles.root}>
            <Image style={styles.logo} source={Logo} resizeMode="contain" />
            <View style={styles.form}>
                <Text style={styles.headerText}>SIGN IN</Text>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" autoCapitalize="none" />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />

                <TouchableOpacity style={styles.buttonReg} onPress={handleSignIn} >
                    <Text style={styles.regText}>SIGN IN</Text>
                </TouchableOpacity>

                <View style={styles.logContainer}>
                    <Text style={styles.subheaderText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.logText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    root: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },

    logo: {
        height: 190,
        width: 190,
        maxHeight: 300,
        maxWidth: 300,
        marginTop: 100,
    },

    form: {
        backgroundColor: "#8FB996",
        width: "100%",
        height: "55%",
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

    buttonReg: {
        backgroundColor: "#111D13",
        justifyContent: "center",
        alignSelf: "center",
        width: 150,
        height: 50,
        borderRadius: 10,
    },

    regText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "800",
    },

    logContainer: {
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
    },

    subheaderText: {
        fontSize: 18,
    },

    logText: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
