import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function SignupScreen() {
    return (
        <Text style={styles.container}>SignupScreen</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    }
});
