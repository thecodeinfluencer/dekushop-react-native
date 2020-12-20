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

export default function MessagesScreen({ navigation }) {
  navigation.setOptions({
    header: () => null
  });

  return (
    <View>
      <Text>messagesscreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
