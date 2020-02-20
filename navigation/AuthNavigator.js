import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import LoginScreen from '../auth/LoginScreen'
import SignupScreen from '../auth/SignupScreen'
import ForgotPasswordScreen from '../auth/ForgotPasswordScreen'

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign Up" component={SignupScreen} />
                <Stack.Screen name="Reset Password" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: "center",
        alignItems: 'center'
    }
});
