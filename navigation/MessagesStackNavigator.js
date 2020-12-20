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
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import MessagesScreen from "../screens/MessagesScreen";
import ChatConversationScreen from "../screens/ChatConversationScreen";

const chatData = [
  {
    from: "John Miracle",
    messages: [
      { from: "John Miracle", text: "Hello there", time: "02:30 PM" },
      { from: "John Miracle", text: "I need one package", time: "03:30 PM" }
    ]
  },
  {
    from: "Luke Wise",
    messages: [
      { from: "Luke Wise", text: "Niaje oya", time: "12:30 AM" },
      { from: "Luke Wise", text: "Niletee ile samo", time: "10:30 AM" }
    ]
  }
];

const Stack = createStackNavigator();

export default function MessagesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
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
        name="Conversation"
        component={ChatConversationScreen}
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
