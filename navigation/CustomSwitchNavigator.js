import React, { useState, useEffect } from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import { ActivityIndicator, StyleSheet } from "react-native";
import AuthNavigator from "./AuthNavigator";
import { createStackNavigator } from "@react-navigation/stack";
// import useLinking from './navigation/useLinking';
import * as firebase from "firebase";

export default function CustomSwitchNavigator() {
  const [loggedIn, setloggedIn] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //         setloggedIn(true)
  //     } else {
  //         setloggedIn(false)
  //     }
  // });

  // Load any resources or data that we need prior to rendering the navigation
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        //check logged in status
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!loadingComplete) {
    return <LoadingScreen />;
  } else {
    return loggedIn ? <BottomTabNavigator /> : <AuthNavigator />;
  }
}

function LoadingScreen() {
  return <ActivityIndicator size="large" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
