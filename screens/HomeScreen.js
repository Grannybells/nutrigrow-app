import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from "react-native";

import Logo from "../assets/images/logo.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import * as Location from 'expo-location';

import { firebase } from '../config';
import { ref, onValue } from 'firebase/database';

const API_KEY = 'f09150f1e24bf524c85a95c199e4b1f0';

const HomeScreen = () => {

    const [sensorData, setSensorData] = useState({
        recommendation: {
            new_nitrogen: '0',
            new_phosphorus: '0',
            new_potassium: '0',
            plant: 'Choose plant'
        },
        sensor: {
            moisuture: '0',
            nitrogen: '0',
            pH: '0.00',
            phosphorus: '0',
            potassium: '0',
        },
        status: {
            k_level: '0',
            n_level: '0',
            p_level: '0',
            ph_level: 'Near Neutral',
        }
    });

    useEffect(() => {
        const db = firebase.database();
        const sensorDb = ref(db); // Assuming your reference is correct

        onValue(sensorDb, (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                setSensorData(data);
            } else {
                // Handle if data is null
            }
        });
    }, []);

    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        getLocation();
    }, []);

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Location permission denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }

    useEffect(() => {
        if (location) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`
            )
                .then((response) => response.json())
                .then((data) => {
                    setWeather(data);
                });
        }
    }, [location]);

    if (!weather) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading data...</Text>
            </View>
        );
    }

    const icon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.headerBar}>
                <Image style={styles.headerBarLogo} source={Logo} resizeMode="contain" />
                <Text style={styles.headerBarText}>Home</Text>
                <View style={styles.headerBarLogo} />
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.weatherContainer}>
                    <View style={styles.leftContainer}>
                        <Image source={{ uri: icon }} height={75} width={100} />
                        <Text style={styles.subText}>{weather.weather[0].description}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.headerText}>{weather.name},{weather.sys.country}</Text>
                        <Text style={styles.dataText}>{Math.round(weather.main.temp)}°C</Text>
                        <Text style={styles.subText}>{Math.round(weather.main.temp_max)}°C ~ {Math.round(weather.main.temp_min)}°C</Text>
                    </View>
                </View>

                <View style={styles.dataContainer}>
                    <View style={styles.parameter}>
                        <Text style={styles.dataText}>{sensorData.sensor.nitrogen}</Text>
                        <Text style={styles.subText}>Nitrogen</Text>
                        <Text style={styles.subTextCard}>{sensorData.status.n_level}</Text>
                    </View>

                    <View style={styles.parameter}>
                        <Text style={styles.dataText}>{sensorData.sensor.phosphorus}</Text>
                        <Text style={styles.subText}>Phosphorus</Text>
                        <Text style={styles.subTextCard}>Moderately High</Text>
                    </View>

                    <View style={styles.parameter}>
                        <Text style={styles.dataText}>{sensorData.sensor.potassium}</Text>
                        <Text style={styles.subText}>Potassium</Text>
                        <Text style={styles.subTextCard}>{sensorData.status.k_level}</Text>
                    </View>
                </View>

                <View style={styles.dataContainer2}>
                    <View style={styles.parameterContainer}>
                        <Entypo name="water" size={50} color="black" />
                        <View style={styles.dataWater}>
                            <Text style={styles.dataText} >{sensorData.sensor.pH}</Text>
                            <Text style={styles.subText}>pH level</Text>
                            <Text style={styles.subText}>{sensorData.status.ph_level}</Text>
                        </View>
                    </View>

                    <View style={styles.parameterContainer}>
                        <FontAwesome5 name="water" size={50} color="black" />
                        <View style={styles.dataWater}>
                            <Text style={styles.dataText}>{sensorData.sensor.moisture}</Text>
                            <Text style={styles.subText}>moisture</Text>
                        </View>
                    </View>
                </View>

                <Text style={[styles.plantContainerText, styles.headerText]}>{sensorData.recommendation.plant}</Text>

                <View style={styles.plantContainer}>
                    <Text style={styles.headerText}>Recommended fertilizer</Text>
                    <Text style={styles.recommendationText}>{sensorData.recommendation.new_nitrogen}     {sensorData.recommendation.new_phosphorus}     {sensorData.recommendation.new_potassium}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        width: '100%',
        flex: 10,
        padding: '4%',
    },
    weatherContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#8EBA99',
        padding: '3%',
        marginBottom: 10,
    },
    leftContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 22,
        fontWeight: '500',
    },
    dataText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        fontWeight: '500',
    },
    dataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    parameter: {
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32%',
        padding: '3%',
        gap: 5,
    },
    subTextCard: {
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: '#8EBA99',
        width: 100,
        height: 30,
        textAlign: 'center',
        paddingVertical: '10%',
        borderRadius: 10,
    },

    dataContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    parameterContainer: {
        backgroundColor: '#DADADA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '5%',
        width: '48%',
        height: 100,
    },

    dataWater: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    plantContainerText: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#DADADA',
        paddingVertical: 10,
        marginBottom: 10,
    },
    plantContainer: {
        paddingVertical: 10,
        width: '100%',
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        marginBottom: 200,
    },
    recommendationText: {
        fontSize: 32,
        fontWeight: '900'
    }
});
