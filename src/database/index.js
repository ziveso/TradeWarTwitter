import firebase from "firebase/app";
import "firebase/database";

const apis = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

firebase.initializeApp(apis);

export const getDbRealTime = callback => {
  firebase
    .database()
    .ref("/count")
    .on("value", snap => {
      callback(snap.val());
    });
};
