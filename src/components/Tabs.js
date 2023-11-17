import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Plants from '../pages/Plants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        position: 'absolute',
                        marginBottom: 20,
                        marginHorizontal: 50,
                        backgroundColor: '#8FB996',
                        borderRadius: 50,
                        height: 80,
                    },
                    null,
                ],
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Entypo name="home" size={40} color="#234F26" />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Plant"
                component={Plants}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Ionicons name="ios-library" size={40} color="#234F26" />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Ionicons name="ios-person" size={40} color="#234F26" />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
