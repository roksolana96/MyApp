import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../redux/selectors";
import { addLike, delPost } from "../redux/operations";

export const Post = ({ data }) => {
  const navigation = useNavigation();
  const accEmail = useSelector(getEmail);
  const dispatch = useDispatch();
  

  const {
    geoLocation,
    location,
    name,
    url,
    email,
    creationTime,
    comments,
    likes,
  } = data;

  const handleDelet = () => {
    dispatch(delPost(creationTime));
  };

  const handleLike  = () => {
    if (likes?.includes(accEmail)) return;
    dispatch(addLike({ mail: accEmail, id: creationTime }));
  };

  return (
    
<>

    <View style={styles.container}
    >
      <Image style={styles.image} source={{ uri: url }} />
      {accEmail === email && (
        <View style={styles.bottomNavigation}>
          
          <AntDesign
            name="delete"
            size={24}
            color={"#bdbdbd"}
            onPress={handleDelet}
          />
        </View>
      )}
      <Text style={{ ...styles.text, marginBottom: 11 }}>{name}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.viewStyle}>
          <FontAwesome
            name="comment"
            size={24}
            color={comments?.length ? "#FF6C00" : "#BDBDBD"}
            onPress={() =>
              navigation.navigate("Comments", { creationTime, url })
            }
          />
          <Text
            style={
              comments?.length
                ? { ...styles.text, marginLeft: 8 }
                : { ...styles.text, color: "#BDBDBD", marginLeft: 8 }
            }
          >
            {comments?.length}
          </Text>
          <AntDesign
            name="like2"
            size={24}
            style={{ marginLeft: 10 }}
            color={likes?.length ? "#FF6C00" : "#BDBDBD"}
            onPress={handleLike }
          />
          <Text
            style={
              likes?.length
                ? { ...styles.text, marginLeft: 8 }
                : { ...styles.text, color: "#BDBDBD", marginLeft: 8 }
            }
          >
            {likes?.length ?? 0}
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <AntDesign
            name="enviromento"
            size={24}
            color="#BDBDBD"
            onPress={() =>
              navigation.navigate("Map", { geoLocation, location, name })
            }
          />
          <Text style={{ ...styles.text, marginLeft: 8 }}>{location}</Text>
        </View>
      </View>
    </View>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 15,
  },

  screen: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  iconLogOut: {
    position: "absolute",
    right: 16,
    top: 22,
    color: "#BDBDBD",
  },

  userCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  imageAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: "red",

  },

  name: {
    fontWeight: 700,
    fontSize: 13,
  },
  email: {
    color: " rgba(33, 33, 33, 0.8)",
    fontSize: 11,
  },
  image: {
    width: "100%",
    height: 240,
    backgroundColor: "#bdbdbd",
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 0,
  },


  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  bottomNavigation: {
    height: 40,
    width: 70,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    position: "absolute",
    top: 5,
    left: 5,
  },
  viewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});





