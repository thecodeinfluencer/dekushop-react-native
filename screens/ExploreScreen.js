import * as React from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator } from "react-native";
import AdCard from "../components/AdCard";
import { FlatList } from "react-native-gesture-handler";
import SearchBar from "../components/SearchBar";
import ActionBar from "../components/ActionBar";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function ExploreScreen({ navigation }) {
  navigation.setOptions({
    header: () => <ActionBar title="Explore" />
  });

  const [productAds, setProductAds] = React.useState([]);
  // const productAdsDataRef = firebase.database().ref("ads/");

  React.useEffect(() => {
    fetch(`https://dekushopertino.firebaseio.com/ads.json`).then(resp => {
      resp.text().then(text => {
        const adsArray = Object.values(JSON.parse(text)).reverse();
        setProductAds(adsArray);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.status} barStyle="dark-content" />
      <SearchBar />
      <FlatList
        numColumns={2}
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id}
        data={productAds}
        ListFooterComponent={() => <View style={{ height: 80 }} />}
        ListEmptyComponent={() => (
          <View
            style={{ height: Layout.height * 0.7, justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color={Colors.themeColor} />
          </View>
        )}
        renderItem={({ item }) => (
          <AdCard navigation={navigation} data={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  scrollContainer: {
    paddingTop: 50,
    paddingHorizontal: 8
  }
});
