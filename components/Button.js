import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableNativeFeedback, Text } from "react-native";

import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MonoText } from "./StyledText";
import { bold } from "colorette";

export default function Button({ title, onPress, style, color, bg, bc }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      <MonoText
        style={{
          backgroundColor: bg ? bg : Colors.themeColor,
          color: color ? color : "#fff",
          paddingVertical: 10,
          paddingHorizontal: 28,
          textAlign: "center",
          alignSelf: "baseline",
          height: 44,
          marginVertical: 8,
          borderRadius: 36,
          borderWidth: 1,
          borderColor: bc ? bc : Colors.themeColor,
          fontSize: 16
        }}
      >
        {title}
      </MonoText>
    </TouchableOpacity>
  );
}
