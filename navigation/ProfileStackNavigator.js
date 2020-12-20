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
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createStackNavigator();

export default function ProfileStackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
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
        name="Edit"
        component={EditProfileScreen}
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
