import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import firebase from "firebase";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "no"
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;

    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  handleSignup = () => {
    const { email, password } = this.state;

    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <Text style={{ color: "red" }}>{this.state.error}</Text>
        <TextInput
          style={{
            padding: 10,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "blue"
          }}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          //value={this.state.email}
        ></TextInput>
        <TextInput
          style={{
            padding: 10,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: "blue"
          }}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          //value={this.state.password}
        ></TextInput>
        <TouchableOpacity onpress={this.handleLogin}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onpress={this.handleSignup}>
          <Text
            style={{
              padding: 10,
              backgroundColor: "blue",
              borderRadius: 5,
              fontSize: 20
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text>Go to Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reset Password")}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center"
  }
});
