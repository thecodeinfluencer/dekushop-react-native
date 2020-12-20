import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  Alert,
  AsyncStorage,
  StatusBar
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import { MonoText } from "../components/StyledText";
import Colors from "../constants/Colors";
import Button from "../components/Button";
import { Categories, Location } from "../constants/Data";
import firebase from "../auth/Firebase";

export default function EditProfileScreen({ navigation }) {
  StatusBar.setTranslucent(false);
  const [fullName, setFullName] = React.useState(null); //
  const [fullNamePlaceHolder, setFullNamePlaceHolder] = React.useState(null); //
  const [emailAddr, setEmailAddr] = React.useState(null); //
  const [emailAddrPlaceHolder, setEmailAddrPlaceholder] = React.useState(null); //
  const [university, setUniversity] = React.useState(null);
  const [universityPH, setUniversityPH] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [phonePH, setPhonePH] = React.useState(null);
  const [hostelIndex, setHostelIndex] = React.useState(null);
  const [hostel, setHostel] = React.useState(null);
  const [hostelPH, setHostelPH] = React.useState(null);
  const [imageUrl, setImage] = React.useState(null);

  const currentUser = firebase.auth().currentUser;
  // React.useEffect(() => {
  //   firebase
  //     .database()
  //     .ref(`users/${currentUser.uid}`)
  //     .on(
  //       "value",
  //       snapshot => {
  //         setFullNamePlaceHolder(snapshot.val().name);
  //         setEmailAddrPlaceholder(snapshot.val().email);
  //         setUniversityPH(snapshot.val().university);
  //         setHostelPH(snapshot.val().hostel);
  //         setPhonePH(snapshot.val().phone);
  //         setImage(snapshot.val().photoURL + "?height=500");
  //       },
  //       err => console.warn("snapshot err", err)
  //     );
  // }, []);

  const updateProfile = async () => {
    const usersRef = firebase.database().ref(`users/${currentUser.uid}`);

    let updateUser = {};
    fullName ? (updateUser.name = fullName) : null;
    emailAddr ? (updateUser.email = emailAddr) : null;
    university ? (updateUser.university = university) : null;
    hostel ? (updateUser.hostel = hostel) : null;
    phone ? (updateUser.phone = phone) : null;

    usersRef.update(updateUser).catch(err => console.warn("errupdtuser", err));

    console.warn("updateUser", updateUser);
    navigation.goBack();
  };

  const pickImage = async () => {
    ImagePicker.requestCameraRollPermissionsAsync().then(res => {
      if (!res.granted) {
        console.warn("Denied");
        Alert.alert("You need to accept permissions to upload an image!");
      }
    });

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1]
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
        <Button
          title={imageUrl ? "Change Image" : "Pick Image"}
          bg={Colors.themeColor}
          color="#fff"
          bc={Colors.themeColor}
          style={{ marginHorizontal: 16, marginTop: 4 }}
          onPress={() => pickImage()}
        />
        <TextInput
          value={fullName}
          placeholder={"Name: " + fullNamePlaceHolder}
          style={styles.textinput}
          onChangeText={text => setFullName(text)}
        />
        <TextInput
          value={emailAddr}
          placeholder={"Email: " + emailAddrPlaceHolder}
          style={styles.textinput}
          onChangeText={text => setEmailAddr(text)}
        />
        <TextInput
          value={phone}
          placeholder={"Phone: " + phonePH}
          style={styles.textinput}
          onChangeText={text => setPhone(text)}
        />
        <Picker
          selectedValue={university}
          onValueChange={(itemValue, itemIndex) => {
            setUniversity(itemValue);
            setHostelIndex(itemIndex);
          }}
          mode="dropdown"
          style={styles.picker}
          itemStyle={{
            fontFamily: "nunito"
          }}
        >
          <Picker.Item
            label={"University: " + universityPH}
            value={null}
            // style={{ fontFamily: "nunito" }}
          />
          {Location.map(item => (
            <Picker.Item label={item.name} value={item.name} />
          ))}
        </Picker>
        <Picker
          mode="dropdown"
          style={[styles.picker, { display: hostelIndex ? "flex" : "none" }]}
          selectedValue={hostel}
          onValueChange={(itemValue, itemIndex) => {
            setHostel(itemValue);
          }}
        >
          <Picker.Item label={"Hostel: " + hostelPH} value={null} />
          {hostelIndex
            ? Location[hostelIndex - 1].hostel.map(item => (
                <Picker.Item label={item.name} value={item.name} />
              ))
            : null}
        </Picker>

        <Button
          title="Update Profile Info"
          bg="#fff"
          onPress={() => updateProfile()}
          color={Colors.themeColor}
          bc={Colors.themeColor}
          style={{ marginHorizontal: 16, marginVertical: 30 }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 10
  },
  picker: {
    height: 44,
    marginVertical: 16,
    backgroundColor: Colors.themeColor,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.themeColor,
    color: "#fff",
    fontFamily: "nunito"
  },
  textinput: {
    height: 44,
    marginVertical: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    borderRadius: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.themeColor,
    fontSize: 16,
    fontFamily: "nunito"
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    borderRadius: 50
  }
});
