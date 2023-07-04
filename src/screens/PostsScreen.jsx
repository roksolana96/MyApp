import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Post } from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts, getUser } from "../redux/selectors";
import { getAllPosts } from "../redux/operations";
import { Header } from "../components/Header";

export const PostsScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const { email, login, photoUri } = useSelector(getUser);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
    <Header title={'Posts'}/>
      {!posts ? (
        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <ImageBackground
                source={{ uri: photoUri }}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.name}>{login}</Text>
              <Text style={styles.email}>{email}</Text>
            </View>
          </View>
        </View>
      ) : (
        <ScrollView style={{ paddingHorizontal: 16, marginBottom: 16 }}>
          {posts.map((el) => (
            <Post key={el.creationTime} data={el}></Post>
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    backgroundColor: "#BDBDBD",
    borderRadius: 16,
    marginRight: 8,
    // marginLeft: 16,
    // marginTop:32,
  },
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  name: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    // display: flex,
    // alignItems: center,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    // display: flex,
    // alignItems: center,
    color: "#333333",
  },
});



