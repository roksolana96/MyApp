import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, signOut,getReactNativePersistence } from "firebase/auth";
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

  // apiKey: "AIzaSyCFjhG2uFyt0OCvGYNrce7WjHcXIxz0AHw",
  // authDomain: "nativeproject-388613.firebaseapp.com",
  // databaseURL: "https://nativeproject-388613-default-rtdb.firebaseio.com",
  // projectId: "nativeproject-388613",
  // storageBucket: "nativeproject-388613.appspot.com",
  // messagingSenderId: "972830222875",
  // appId: "1:972830222875:web:f3b96426e51bac5e3466be",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const fireStore = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);




