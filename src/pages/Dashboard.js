import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from "../config";
import Logo from "../images/logo.png";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    useEffect(() => {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data());
                } else {
                    console.log("User does not exist");
                }
            });
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.headerBar}>
                <Image style={styles.headerBarLogo} source={Logo} resizeMode="contain" />
                <Text style={styles.headerBarText}>Profile</Text>
                <View style={styles.headerBarLogo} />
            </View>
            <View style={styles.body}>
                <View style={styles.userInfo}>
                    <Text style={styles.bannerText}>Hello!</Text>
                    <Text style={styles.userName}> {name.firstName} {name.lastName} </Text>
                    <Text style={styles.userEmail}>{name.email}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate("About")} >
                        <Text>About Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => firebase.auth().signOut()} >
                        <Text style={styles.subText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        paddingVertical: '2%',
        backgroundColor: 'white'
    },
    headerBarLogo: {
        width: 55,
        height: 55,
    },
    headerBarText: {
        fontSize: 26,
        fontWeight: '500',
        color: '#415D43'
    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flex: 10,
        padding: '4%',
        marginBottom: '30%',
    },
    bannerText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    userInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    buttonText: {
        paddingVertical: '3%',
        paddingHorizontal: '10%',
        borderWidth: 2,
        borderColor: '#121D15',
        borderRadius: 30,
        marginBottom: 10,
    },
    buttonContainer: {
        paddingVertical: '3%',
        paddingHorizontal: '10%',
        backgroundColor: '#121D15',
        borderRadius: 30,
    },
    subText: {
        fontSize: 16,
        color: 'white'
    }
});