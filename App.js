import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { firebase } from './config';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";

import Tabs from "./components/Tabs";
import AboutScreen from './screens/AboutScreen';

const App = () => {

  const Stack = createStackNavigator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Clean up subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator >
        {user ? (
          <>
            <Stack.Screen options={{ tabBarShowLabel: false, headerShown: false }} name="Tabs" component={Tabs} />
            <Stack.Screen options={{ headerShown: true }} name="About" component={AboutScreen} />
          </>
        ) : (
          <>
            <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignInScreen} />
            <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
