import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NitoText } from "../components/StyledText";
import { SimpleLineIcons } from "@expo/vector-icons";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default function SavedAdCard({ navigation, data }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("IndividualAd", data)}>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          marginHorizontal: 8,
          marginTop: 16,
          height: 90,
          elevation: 4,
          borderRadius: 4,
          width: Layout.width - 32
        }}
      >
        <Image
          style={{ width: Layout.width * 0.3, height: 90 }}
          source={{ uri: data.photoURL }}
        />
        <View
          style={{
            paddingHorizontal: 8,
            maxWidth: Layout.width * 0.5,
            paddingVertical: 8
          }}
        >
          <NitoText style={{ fontWeight: "bold" }}>{data.title}</NitoText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="location-pin" style={{ marginRight: 4 }} />
            <NitoText>
              {data.hostel}, {data.university}
            </NitoText>
          </View>
          <NitoText style={{ color: Colors.noticeBackground }}>
            {data.price}
          </NitoText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
