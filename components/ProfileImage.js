import * as React from "react";
import { Image } from "react-native";
import firebase from "../auth/Firebase";

export default function ProfileImage({ size }) {
  const [imageURL, setImageURL] = React.useState("null");

  React.useEffect(() => {
    async () => {
      const img = await firebase.auth().currentUser.photoURL;
      setImageURL(img);
    };
  }, []);

  return (
    <Image
      style={{ width: size, height: size, borderRadius: size / 2 }}
      source={{
        uri: imageURL
      }}
    />
  );
}
