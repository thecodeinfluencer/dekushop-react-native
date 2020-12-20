import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableNativeFeedback, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.focused ? props.nameActive : props.name}
      size={props.large ? 50 : props.focused ? 32 : 28}
      style={props.large ? styles.large : styles.normal}
      color={
        props.focused || props.large ? Colors.themeColor : Colors.tabIconDefault
      }
    />
  );
}

const styles = StyleSheet.create({
  normal: { marginBottom: 0 },
  large: { marginBottom: 30, elevation: 4 }
});
