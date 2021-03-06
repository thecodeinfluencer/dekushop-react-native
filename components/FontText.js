import * as React from "react";
import { Text } from "react-native";

export default function FontText(props) {
  return <Text {...props} style={[props.style, { fontFamily: "nunito" }]} />;
}
