import * as React from "react";
import {
  StyleSheet,
  View,
  AsyncStorage,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
  Animated
} from "react-native";

export default function SearchScreen() {
  props.navigation.setOptions({
    header: () => null
  });

  return (
    <View>
      <Text>searchscreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
