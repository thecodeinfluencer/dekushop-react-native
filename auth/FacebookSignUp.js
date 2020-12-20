import * as Facebook from "expo-facebook";
import firebase from "./Firebase";

export const signUp = async () => {
  try {
    await Facebook.initializeAsync("214000209188863");
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions
    } = await Facebook.logInWithReadPermissionsAsync("214000209188863", {
      permissions: ["public_profile", "email"]
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(err => console.log("FB SignInErr: " + err))
        .then(({ user }) => {
          try {
            const usersRef = firebase.database().ref(`users/${user.uid}`);
            usersRef.update({
              uid: user.uid,
              name: user.displayName,
              email: user.email,
              university: "Set University",
              hostel: "Not Set",
              phone: "Not Set",
              photoUrl: user.photoURL,
              phone: "Not Set"
            });
            AsyncStorage.setItem("@user", JSON.stringify(user));
          } catch (error) {
            console.warn("trycatchwarn", error);
          }
        });

      //Store user data and login state
      const storeSignupData = async () => {
        try {
          await AsyncStorage.setItem("@active", "true");
        } catch (e) {
          console.warn("Active state not saved!!");
        }
      };
      storeSignupData();

      const getLoggedInData = async () => {
        try {
          const loggedIn = await AsyncStorage.getItem("@active");
          if (loggedIn === "true") {
            // If Logged in redirect back to App
            setIsLoggedIn(true);
          }
        } catch (e) {
          console.log("Cannot get active state!!");
          h;
        }
      };
      getLoggedInData();
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
  console.warn("facebook signup called: " + firebase.auth().currentUser);
};
