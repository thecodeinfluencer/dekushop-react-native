import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import UploadScreen from "../screens/UploadScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator() {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-home" />
            )
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-search" />
            )
          }}
        />
        <BottomTab.Screen
          name="Upload"
          component={UploadScreen}
          options={{
            title: "Upload",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-add-circle" />
            )
          }}
        />
        <BottomTab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{
            title: "Favourite",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-heart" />
            )
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-person" />
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// function getHeaderTitle(route) {
//   const routeName =
//     route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case "Home":
//       return "Explore Items";
//     case "Search":
//       return "Search Items";
//     case "Upload":
//       return "Upload an Item";
//     case "Favourite":
//       return "Your Favourites";
//     case "Profile":
//       return "Profile";
//   }
// }
