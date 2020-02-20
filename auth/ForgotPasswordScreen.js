import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function ForgotPasswordScreen() {
    return (
        <Text style={styles.container}>ForgotPassword</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    }
});
