import React from "react";
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';

import Gran from "../assets/images/gran.jpg";
import Jam from "../assets/images/jam.png";
import Janel from "../assets/images/janel.jpg";
import Mariel from "../assets/images/mariel.jpg"

const AboutScreen = () => {
    return (
        <View style={styles.root}>
            <ScrollView style={styles.body}>
                <View style={styles.container}>
                    <View style={styles.aboutContent}>
                        <Text style={styles.headerText}>About the Application</Text>
                        <Text style={styles.subText}>
                            Nutrigrow is a mobile app that displays the real-time nutrient management for the chosen high-value crop from the system. The system employs automation, which lessens the time and energy needed for manual computation and fertilization. Additionally, it simplifies the testing and planning procedure for handling the nutrients of a specific plant. The automated system can rapidly process this data, thereby boosting the overall effectiveness and rapidity of the procedure.
                        </Text>
                        <Text style={styles.headerText}>About the Developers</Text>

                        <Text style={styles.subText}>
                            The developers are Computer Engineering students in Technological Institute of the Philippines, Quezon City. This mobile application has been developed as part of the group's project design requirements. The group's vision is to contribute to the innovation of farming methods by making them more accessible and easier to use through technology.
                        </Text>
                    </View>
                    <View style={styles.devContainer}>
                        <View style={styles.Profilecontainer}>
                            <Image source={Gran} style={styles.devImage} resizeMode="contain" />
                            <Text style={styles.devName}>Gran P. Zulueta</Text>
                            <Text style={styles.devWork}>Railway Engineering</Text>
                        </View>

                        <View style={styles.Profilecontainer}>
                            <Image source={Jam} style={styles.devImage} resizeMode="contain" />
                            <Text style={styles.devName}>Jam Fiona P. Fajilagutan</Text>
                            <Text style={styles.devWork}>System Administration</Text>
                        </View>

                        <View style={styles.Profilecontainer}>
                            <Image source={Janel} style={styles.devImage} resizeMode="contain" />
                            <Text style={styles.devName}>Janel Candice S. Del Rosario</Text>
                            <Text style={styles.devWork}>System Administration</Text>
                        </View>

                        <View style={styles.Profilecontainer}>
                            <Image source={Mariel} style={styles.devImage} resizeMode="contain" />
                            <Text style={styles.devName}>Mariel P. Bucog</Text>
                            <Text style={styles.devWork}>System Administration</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        width: '100%',
        padding: '4%',
    },
    container: {
        backgroundColor: '#8EBA99',
        alignItems: 'center',
        padding: '5%',
        marginBottom: 50,
        borderRadius: 20,
    },

    aboutContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 15,
        textAlign: 'justify',
        marginBottom: 20,
    },
    devContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Profilecontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        width: '50%',
    },
    devName: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    devWork: {
        fontSize: 12,
    },
    devImage: {
        height: 140,
        width: 140,
    },
});
