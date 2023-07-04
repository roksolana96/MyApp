import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import { decode } from "base-64";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

if (typeof atob === "undefined") {
  global.atob = decode;
}

const firebaseConfig = {
  apiKey: "AIzaSyB3z1dGrjRN3Ur2cTNlNpJEE8LbQ-8fGxY",
  authDomain: "myapp-1ebb2.firebaseapp.com",
  databaseURL: "https://myapp-1ebb2-default-rtdb.firebaseio.com",
  projectId: "myapp-1ebb2",
  storageBucket: "myapp-1ebb2.appspot.com",
  messagingSenderId: "919728903390",
  appId: "1:919728903390:web:b449198951ce57e5e01e4f",
  measurementId: "G-6C61HNJKES"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const fireStore = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);




