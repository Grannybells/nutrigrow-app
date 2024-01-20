import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from '../config';

import Logo from "../assets/images/logo.png";

import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {

    const navigation = useNavigation();

    const handleSignOut = async () => {
        try {
            await firebase.auth().signOut();
            console.log('Signing Out Successfully')
        } catch (error) {
            console.error('Error signing out:', error);
            // Handle error (e.g., display error message to the user)
        }
    };

    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is signed in
                setUser(authUser);
                setDisplayName(authUser.displayName || '');
                setEmail(authUser.email || '');
            } else {
                // No user is signed in
                setUser(null);
                setDisplayName('');
                setEmail('');
            }
        });

        // Clean up subscription to avoid memory leaks
        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.headerBar}>
                <Image style={styles.headerBarLogo} source={Logo} resizeMode="contain" />
                <Text style={styles.headerBarText}>Profile</Text>
                <View style={styles.headerBarLogo} />
            </View>
            <View style={styles.body}>
                <View style={styles.userInfo}>
                    <Text style={styles.bannerText}>Hello!</Text>
                    <Text style={styles.userName}>{displayName}</Text>
                    <Text style={styles.userEmail}>{email}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate("About")}>
                        <Text>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleSignOut} >
                        <Text style={styles.subText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;

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
