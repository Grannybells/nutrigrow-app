import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Logo from '../images/logo.png';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config'

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.form}>
                <Text style={styles.headerText}>LOGIN</Text>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TouchableOpacity
                    onPress={() => loginUser(email, password)}
                    style={styles.buttonLog}
                >
                    <Text style={styles.logText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.regContainer}>
                    <Text style={styles.subheaderText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                        <Text style={styles.regText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;

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