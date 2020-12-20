import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Layout from "../constants/Layout";
import ActionBar from "../components/ActionBar";
import { NitoText } from "../components/StyledText";
import SavedAdCard from "../components/SavedAdCard";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import firebase from "../auth/Firebase";

export default function SavedAdsScreen({ navigation }) {
  navigation.setOptions({
    header: () => <ActionBar title="Your Saved Ads" />
  });

  const [savedProductAds, setSavedProductAds] = React.useState([]);
  const [adIdsArray, setAdIdsArray] = React.useState([]);

  React.useEffect(() => {
    const fetchUser = new Promise((resolve, reject) => {
      resolve(firebase.auth().currentUser.uid);
    });

    fetchUser.then(user => {
      fetch(
        `https://dekushopertino.firebaseio.com/users/${user}/favorites.json`
      ).then(resp => {
        resp.text().then(text => {
          const adsArray = Object.values(JSON.parse(text)).reverse();
          setAdIdsArray(adsArray);

          // adsArray.map(ad => {
          //   firebase
          //     .database()
          //     .ref(`ads/${ad.adId}`)
          //     .on("value", adData => {
          //       const newProducts = [...savedProductAds];
          //       newProducts.push(adData.val());
          //       setSavedProductAds(newProducts);
          //       console.warn(newProducts);
          //     });
          // });
        });
      });
    });
  }, []);

  const DisplaySavedAds = () => {
    return (
      <ScrollView>
        {adIdsArray.map(ad => {
          // const collector = firebase
          //   .database()
          //   .ref(`ads/${ad.adId}`)
          //   .on("value", adData => (
          //     <SavedAdCard navigation={navigation} data={adData.val()} />
          //   ));
          // console.warn(collector);
        })}
      </ScrollView>
    );
  };

  return (
    // <View>
    //   <FlatList
    //     style={styles.scrollContainer}
    //     contentContainerStyle={styles.contentContainer}
    //     keyExtractor={item => item.id}
    //     data={savedProductAds}
    //     ListFooterComponent={() => <View style={{ height: 80 }} />}
    //     ListEmptyComponent={() => (
    //       <View
    //         style={{
    //           height: Layout.height * 0.7,
    //           justifyContent: "center",
    //           alignItems: "center"
    //         }}
    //       >
    //         <NitoText>No saves yet</NitoText>
    //       </View>
    //     )}
    //     renderItem={({ item }) => (
    //       <SavedAdCard navigation={navigation} data={item} />
    //     )}
    //   />
    // </View>
    <ScrollView
      style={{
        // flex: 1,
        backgroundColor: "#fed132"
      }}
    >
      {adIdsArray.map(ad => {
        return firebase
          .database()
          .ref(`ads/${ad.adId}`)
          .on("value", adData => {
            return <SavedAdCard navigation={navigation} data={adData.val()} />;
          });
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 8
  }
});
