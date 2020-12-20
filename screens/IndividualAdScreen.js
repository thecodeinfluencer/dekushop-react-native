import * as React from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";
import Layout from "../constants/Layout";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../auth/Firebase";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SaveAdButton from "../components/SaveAdButton";

export default function IndividualAdScreen({ navigation, route }) {
  const [userData, setUserData] = React.useState({});
  const ad = route.params;
  const userPhoneRef = firebase.database().ref(`users/${ad.uid}`);

  React.useRef(() => {
    userPhoneRef.on("value", data => setUserData(data.val()));
  }, []);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${userData.phone}`)}
      >
        <MaterialCommunityIcons
          name="phone"
          size={28}
          style={{ color: Colors.themeColor, marginHorizontal: 20 }}
        />
      </TouchableOpacity>
    )
  });

  return (
    <ScrollView>
      <Image
        source={{
          uri: ad.photoURL
        }}
        style={{ width: Layout.width, height: Layout.width * (4 / 3) }}
      />
      <View
        style={{
          paddingHorizontal: 16,
          backgroundColor: "#fff",
          paddingVertical: 8
        }}
      >
        <Text style={{ fontSize: 18, marginVertical: 4 }}>{ad.title}</Text>
        <Text style={{ fontSize: 14, marginVertical: 2 }}>
          Category: {ad.category}, {ad.subCategory}
        </Text>
        <Text style={{ fontSize: 14, marginVertical: 2 }}>
          Location: {ad.hostel}, {ad.university}
        </Text>
        <Text
          style={{ fontSize: 24, marginVertical: 4, color: Colors.themeColor }}
        >
          {"KSH "}
          {Number(ad.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          marginHorizontal: 16,
          marginVertical: 16,
          paddingHorizontal: 12,
          paddingVertical: 14,
          borderRadius: 8
        }}
      >
        <Text style={{ fontSize: 16, marginVertical: 4 }}>Description</Text>
        <Text>{ad.description}</Text>
        <SaveAdButton state="" adId={ad.adID} />
      </View>
      <View>
        {userPhoneRef.on("value", data => (
          <Text>{console.log(JSON.stringify(data.val()))}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
