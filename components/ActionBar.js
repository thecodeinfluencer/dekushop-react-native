import * as React from "react";
import { Image, View } from "react-native";
import { NitoText } from "../components/StyledText";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import ProfileImage from "../components/ProfileImage";

const imgurl = "../assets/images/robot-dev.png";

export default function ActionBar({ imgLeft, imgRight, title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 16,
        alignItems: "center",
        height: 48,
        width: Layout.width - 32
      }}
    >
      <Image
        style={{ width: 30, height: 30, marginRight: 16 }}
        source={require(imgurl)}
      />
      <View
        style={{
          width: Layout.width - 64,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <NitoText style={{ color: Colors.themeColor, fontSize: 20 }}>
          {title}
        </NitoText>
        <ProfileImage size={32} />
      </View>
    </View>
  );
}
