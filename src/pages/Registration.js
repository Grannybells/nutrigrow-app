import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { firebase } from "../config"
import Logo from "../images/logo.png"
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    registerUser = async (email, password, firstname, lastname) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://nutrigrow-c4e0c.firebaseapp.com',
                })
                    .then(() => {
                        alert('Verification email sent!')
                    }).catch((error) => {
                        alert(error.message)
                    })
                    .then(() => {
                        firebase.firestore().collection('users')
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                firstName,
                                lastName,
                                email,
                            })
                    })
                    .catch((error) => {
                        alert(error.messsage)
                    })
            })
            .catch((error => {
                alert(error.message)
            }))
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.form}>
                <Text style={styles.headerText}>REGISTER</Text>
                <TextInput
                    placeholder='First Name'
                    style={styles.input}
                    onChangeText={(firstName) => setFirstName(firstName)}
                    autoCorrect={false}
                />
                <TextInput
                    placeholder='Last Name'
                    style={styles.input}
                    onChangeText={(lastName) => setLastName(lastName)}
                    autoCorrect={false}
                />
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <TextInput placeholder='Password'
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    autoCorrect={false}
                />
                <TouchableOpacity
                    onPress={() => registerUser(email, password, firstName, lastName)}
                    style={styles.buttonReg}>
                    <Text style={styles.regText}>REGISTER</Text>
                </TouchableOpacity>

                <View style={styles.logContainer}>
                    <Text style={styles.subheaderText}>Already a user? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.logText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Registration;

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
