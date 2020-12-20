import * as React from "react";
import {
  StyleSheet,
  View,
  AsyncStorage,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
  Animated
} from "react-native";
import {
  ScrollView,
  RectButton,
  TouchableOpacity
} from "react-native-gesture-handler";
import Button from "../components/Button";
import { signUp } from "../auth/FacebookSignUp";
import Colors from "../constants/Colors";

export default function SignUpScreen() {
  return (
    <View>
      <Button
        title="Sign Up"
        onPress={() => signUp()}
        bg={Colors.themeColor}
        color="#fff"
      />
    </View>
  );
}
