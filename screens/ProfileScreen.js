import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import {
  RectButton,
  ScrollView,
  TouchableOpacity
} from "react-native-gesture-handler";
import * as firebase from "firebase";

export default function ProfileScreen(props) {
  const [username, setUsername] = useState("Username");

  AsyncStorage.getItem("asyncname")
    .then(asyncname => console.log(asyncname))
    .done();

  firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      setUsername("user level ");
    } else {
      setUsername("You need to login");
    }
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>{firebase.auth().currentUser.displayName}</Text>
      <TouchableOpacity>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
