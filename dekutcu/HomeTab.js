import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Button, StatusBar } from 'react-native';

export default function HomeTab({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ margin: 8 }}>Hello, <React.Fragment>Beloved</React.Fragment></Text>
            <ImageBackground
                style={{ margin: 8 }}
                source={require('../assets/images/background.png')}>
                <View style={{ marginTop: 80 }}>
                    <Text>Welcome to DekutCU</Text>
                    <Text>A church rooted in God's Word</Text>
                </View>
            </ImageBackground>
            <Text>About</Text>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet repellendus veritatis impedit provident, libero animiillo fugiat, cupiditate, culpa architecto a voluptas deleniti. Amet recusandae fuga ad voluptatem atque eius.</Text>
            <Button title="Read More" />
            <TouchableOpacity
                onPress={() => WebBrowser.openBrowserAsync('http:dekutcu.ac.ke')}>
                <Text>Online Registration</Text>
            </TouchableOpacity>
            <Text>Contact</Text>
            <Text>info@dkut.ac.ke</Text>
            <Text>call 07XXXXXXXX</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        marginTop: StatusBar.currentHeight + 20
    }
});
