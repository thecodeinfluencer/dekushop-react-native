import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  AsyncStorage
} from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";

import useLinking from "./navigation/useLinking";
// import CustomSwitchNavigator from "./navigation/CustomSwitchNavigator";
import HomeTab from "./dekutcu/HomeTab";
// import LoginScreen from "./auth/LoginScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

var firebaseConfig = {
  apiKey: "AIzaSyB-lTBd1Ek44XCDI_ySAEg7qFIDoEv47Nw",
  authDomain: "dalmm-76ade.firebaseapp.com",
  databaseURL: "https://dalmm-76ade.firebaseio.com",
  storageBucket: "dalmm-76ade.appspot.com"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const signOut = () => {
  firebase.auth().signOut();
};

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        StatusBar.setBackgroundColor("#008b8b", false);

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);

        //Check if user is logged in firebase
        firebase.auth().onAuthStateChanged(user => {
          if (user !== null) {
            setLoggedIn(true);
            AsyncStorage.setItem("asyncname", user.displayName);
          } else {
            setLoggedIn(false);
          }
        });

        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const login = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.toString());
    }
  };

  const signup = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.toString());
    }
  };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else if (loggedIn) {
    return <BottomTabNavigator />;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <TextInput
          style={{
            padding: 10,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "blue",
            margin: 10
          }}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
        ></TextInput>
        <TextInput
          style={{
            padding: 10,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "blue",
            margin: 10
          }}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
        ></TextInput>
        <Text style={{ color: "red", padding: 10, paddingLeft: 15 }}>
          {errorMessage}
        </Text>
        <TouchableOpacity onPress={() => login(email, password)}>
          <Text
            style={{
              padding: 10,
              backgroundColor: "green",
              borderRadius: 5,
              margin: 10,
              fontSize: 20,
              color: "white"
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signup(email, password)}>
          <Text
            style={{
              padding: 10,
              backgroundColor: "blue",
              borderRadius: 5,
              margin: 10,
              fontSize: 20,
              color: "white"
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50 + StatusBar.currentHeight
  }
});
