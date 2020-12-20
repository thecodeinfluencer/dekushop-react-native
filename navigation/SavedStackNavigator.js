import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Animated
} from "react-native";
import Colors from "../constants/Colors";
import { createStackNavigator } from "@react-navigation/stack";
import SavedAdScreen from "../screens/SavedAdsScreen";
import IndividualAdScreen from "../screens/IndividualAdScreen";
const Stack = createStackNavigator();

export default function SavedStackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Saved"
        component={SavedAdScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 56
          },
          headerTintColor: Colors.themeColor,
          headerTitleStyle: {
            fontFamily: "nunito"
          }
        }}
      />
      <Stack.Screen
        name="IndividualAd"
        component={IndividualAdScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            height: 56
          },
          headerTintColor: Colors.themeColor,
          headerTitleStyle: {
            fontFamily: "nunito"
          }
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 46
  },
  contentContainer: {
    paddingTop: 0
  }
});
