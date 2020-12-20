import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";

export default function ChatConversationScreen({ route, navigation }) {
  props.navigation.setOptions({
    header: () => null
  });

  return (
    <View>
      <Text>chatconversationscreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
