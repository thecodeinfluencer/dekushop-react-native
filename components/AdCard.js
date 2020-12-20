import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";

import FontText from "./FontText";
import { SimpleLineIcons } from "@expo/vector-icons";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default function AdCard({ navigation, data }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        marginHorizontal: 8,
        marginTop: 16,
        elevation: 4,
        borderRadius: 4,
        width: (Layout.width - 48) / 2,
        alignSelf: "baseline"
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("IndividualAd", data)}
      >
        <ImageBackground
          style={{
            width: (Layout.width - 48) / 2,
            height: (Layout.width - 48) * (2 / 3)
          }}
          source={{ uri: data.photoURL }}
        ></ImageBackground>
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 8,
          maxWidth: Layout.width * 0.5,
          paddingVertical: 8
        }}
      >
        <FontText style={{ fontWeight: "bold" }}>
          {data ? data.title : null}
        </FontText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SimpleLineIcons name="location-pin" style={{ marginRight: 4 }} />
          <FontText>
            {data.hostel}, {data.university}
          </FontText>
        </View>
        <FontText style={{ color: Colors.noticeBackground }}>
          KSH {data.price}
        </FontText>
      </View>
    </View>
  );
}
