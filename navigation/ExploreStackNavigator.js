import * as React from "react";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/ExploreScreen";
import IndividualAdScreen from "../screens/IndividualAdScreen";
import SearchScreen from "../screens/SearchScreen";
const Stack = createStackNavigator();

export default function ExploreStackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
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
      <Stack.Screen
        name="Search"
        component={SearchScreen}
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
