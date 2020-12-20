import * as React from "react";
import { Image, StyleSheet, View, Picker, Alert } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import firebase from "../auth/Firebase";
import Colors from "../constants/Colors";
import Button from "../components/Button";
import { Categories, Location } from "../constants/Data";

export default function CreateAdScreen() {
  const [subCategoryIndex, setSubCategoryIndex] = React.useState(null);
  const [category, setCategory] = React.useState("Choose Category");
  const [subCategory, setSubCategory] = React.useState("Choose Sub Category");
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [hostelIndex, setHostelIndex] = React.useState(null);
  const [hostel, setHostel] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [descriptionHeight, setDescriptionHeight] = React.useState(10);
  const [imageUrl, setImage] = React.useState(null);
  const [imageBlob, setImageBlob] = React.useState(null);

  const currentPostId = Date.now();
  const currentUser = firebase.auth().currentUser;
  const adsRef = firebase.database().ref(`ads/${currentPostId}`);
  const adImagesRef = firebase.storage().ref(`ads/${Date.now()}.jpg`);

  const addProdut = async () => {
    const response = await fetch(imageUrl);
    const file = await response.blob();

    adImagesRef
      .put(file)
      .then(snap => {
        console.warn("put called");
        snap.ref.getDownloadURL().then(downloadURL => {
          adsRef.set({
            adID: currentPostId,
            uid: currentUser.uid,
            category: category,
            subCategory: subCategory,
            title: title.toUpperCase(),
            university: university,
            hostel: hostel,
            description: description,
            photoURL: downloadURL,
            price: price
          });
        });
      })
      .catch(err => {
        console.warn("upload errror: " + err.message);
      });
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
      aspect: [3, 4]
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setImageBlob(result);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => {
            setSubCategoryIndex(itemIndex);
            setCategory(itemValue);
          }}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Choose Category" value={null} />
          {Categories.map(item => (
            <Picker.Item label={item.name} value={item.name} />
          ))}
        </Picker>
        <Picker
          mode="dropdown"
          style={[
            styles.picker,
            { display: subCategoryIndex ? "flex" : "none" }
          ]}
          selectedValue={subCategory}
          onValueChange={(itemValue, itemIndex) => {
            setSubCategory(itemValue);
          }}
        >
          <Picker.Item
            label={subCategoryIndex ? "Choose Sub Category" : "No Sub Category"}
            value={null}
          />
          {subCategoryIndex
            ? Categories[subCategoryIndex - 1].subCategories.map(item => (
                <Picker.Item label={item.name} value={item.name} />
              ))
            : null}
        </Picker>

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
            label="Choose University"
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
          <Picker.Item
            label={hostelIndex ? "Choose Hostel" : "No Hostels"}
            value={null}
          />
          {hostelIndex
            ? Location[hostelIndex - 1].hostel.map(item => (
                <Picker.Item label={item.name} value={item.name} />
              ))
            : null}
        </Picker>
        <TextInput
          value={title}
          placeholder="Title - Max 40 Characters"
          style={styles.textinput}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          value={price}
          placeholder="Price"
          style={styles.textinput}
          onChangeText={text => setPrice(text)}
          keyboardType="numeric"
        />
        <TextInput
          multiline
          value={description}
          numberOfLines={5}
          placeholder="Description"
          style={[
            styles.textinput,
            {
              alignItems: "flex-start",
              height: descriptionHeight,
              paddingVertical: 10
            }
          ]}
          onChangeText={text => setDescription(text)}
          onContentSizeChange={event => {
            const { contentSize } = event.nativeEvent;
            setDescriptionHeight(contentSize.height);
          }}
        />
        {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
        <Button
          title={imageUrl ? "Change Image" : "Pick Image"}
          bg={Colors.themeColor}
          color="#fff"
          bc={Colors.themeColor}
          style={{ marginHorizontal: 16, marginTop: 4 }}
          onPress={() => pickImage()}
        />
        <Button
          title="Post Product Ad"
          bg="#fff"
          onPress={() => addProdut()}
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
    width: 240,
    height: 320,
    marginHorizontal: 20,
    borderRadius: 10
  }
});
