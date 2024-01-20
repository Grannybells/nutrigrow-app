import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PlantScreen from "../screens/PlantScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";

const Tabs = () => {
    const Tab = createBottomTabNavigator();

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
                component={HomeScreen} // Pass the component reference
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
                component={PlantScreen}
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
                component={ProfileScreen}
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