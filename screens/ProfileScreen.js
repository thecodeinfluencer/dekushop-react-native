import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  AsyncStorage
} from "react-native";

export default function ProfileScreen({ navigation }) {
  navigation.setOptions({
    header: () => null
  });

  return (
    <View>
      <Text>profilescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
