import * as React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import firebase from "../auth/Firebase";

export default function MonoText({ state, adId }) {
  const userId = firebase.auth().currentUser.uid;
  const userFavRef = firebase
    .database()
    .ref(`users/${userId}/favorites/${adId}`);

  const toggleFavorite = () => {
    if (state == "saved") {
      //delete
    } else {
      userFavRef.update({
        adId: adId
      });
      alert("Save Pushed");
    }
  };

  return (
    <TouchableHighlight onPress={() => toggleFavorite()}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text>Add to Favorites</Text>
        <MaterialCommunityIcons name="bookmark" size={24} />
      </View>
    </TouchableHighlight>
  );
}
