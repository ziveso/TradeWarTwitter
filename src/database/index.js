import firebase from "firebase/app";
import "firebase/database";

const apis = {
  apiKey: "AIzaSyBs7oox646evUZzHxiD69UCON2xWGaPj18",
  authDomain: "spa-final-exam6384.firebaseapp.com",
  databaseURL: "https://spa-final-exam6384.firebaseio.com",
  projectId: "spa-final-exam6384",
  storageBucket: "spa-final-exam6384.appspot.com",
  messagingSenderId: "942365828813",
  appId: "1:942365828813:web:f7c8f77f9ae53429"
};

firebase.initializeApp(apis);

export const getDbRealTime = callback => {
  firebase
    .database()
    .ref("/")
    .on("value", snap => {
      callback(snap.val());
    });
};
