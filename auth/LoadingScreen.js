import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

export default class LoadingScreen extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
