import * as React from "react";
import { View } from "react-native";
import Layout from "../constants/Layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import FontText from "../components/FontText";

export default function SearchBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 44,
        marginTop: 8,
        backgroundColor: "#fff",
        paddingHorizontal: 18,
        borderRadius: 8,
        marginHorizontal: 16,
        alignItems: "center",
        position: "absolute",
        width: Layout.width - 32,
        zIndex: 1
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <MaterialCommunityIcons
          name="magnify"
          size={25}
          color={Colors.themeColor}
        />
        <FontText
          style={{
            fontSize: 18,
            marginLeft: 12,
            color: Colors.themeColor + "44"
          }}
        >
          Search
        </FontText>
      </View>
      <View>
        <MaterialCommunityIcons
          name="tune"
          size={25}
          color={Colors.themeColor}
        />
      </View>
    </View>
  );
}
