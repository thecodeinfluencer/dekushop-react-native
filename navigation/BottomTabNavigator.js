import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import TabBarIcon from "../components/TabBarIcon";
import ExploreStackNavigator from "./ExploreStackNavigator";
import SavedStackNavigator from "./SavedStackNavigator";
import CreateAdScreen from "../screens/CreateAdScreen";
import MessagesStackNavigator from "./MessagesStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Explore";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    header: getHeaderComponent(route)
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{ showLabel: false }}
      lazy={false}
    >
      <BottomTab.Screen
        name="Explore"
        component={ExploreStackNavigator}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="home-variant-outline"
              nameActive="home-variant"
              title="Explore"
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedStackNavigator}
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="heart-outline"
              nameActive="heart"
              title="Saved"
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Create"
        component={CreateAdScreen}
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="plus-circle"
              nameActive="plus-circle"
              title="Sell"
              large
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesStackNavigator}
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="bell-outline"
              nameActive="bell"
              title="Notifications"
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="account-outline"
              nameActive="account"
              title="Profile"
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Create":
      StatusBar.setTranslucent(false);
      return "Create A New Ad";
  }
}

function getHeaderComponent(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Profile":
      StatusBar.setTranslucent(true);
      return () => null;
    case "Messages":
      StatusBar.setTranslucent(false);
      return () => null;
    case "Saved":
      StatusBar.setTranslucent(false);
      return () => null;
    case "Explore":
      StatusBar.setTranslucent(false);
      return () => null;
  }
}
