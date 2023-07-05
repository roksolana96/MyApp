import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { logOutUser } from "../redux/operations";

export const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {title !== "Posts" && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackBtn}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      {title === "Posts" && (
        <TouchableOpacity style={styles.signOut}>
          <MaterialIcons name="logout" size={24} color="#BDBDBD" 
          // onPress={() => navigation.navigate("Login")}
          onPress={() => {
            dispatch(logOutUser());
            navigation.navigate("Login");
          }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  signOut: {
    position: "absolute",
    right: 16,
  },
  header: {
    marginTop: 20,
    height: "auto",
    paddingVertical: 18,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  goBackBtn: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    fontSize: 17,
    letterSpacing: -0.408,
    lineHeight: 22,
  },
});


