import { TextInput, View, ScrollView, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { Comment } from "../components/Comment";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getUser } from "../redux/selectors";
import { addComment } from "../redux/operations";
import { Header } from "../components/Header";

export const CommentsScreen = ({ route }) => {
  const id = route.params.creationTime;
  const url = route.params.url;
  const { photoUri } = useSelector(getUser);
  const comments = useSelector(getPost(id));
  const [newComment, setNewComment] = useState("");
  
  const dispatch = useDispatch();

  const handleAddComment  = () => {
    if (!newComment) return;
    const date = new Date();
    const data = {
      id,
      text: newComment,
      avatar: photoUri,
      date: date.getTime(),
    };
    dispatch(addComment(data));
    setNewComment("");
  };

  return (
    <>
     <Header title={'Comment'}/>
      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.image} source={{ uri: url }} />
          {comments?.map((el, ind) => (
            <Comment key={el.date} ind={ind} comment={el}></Comment>
          ))}
        </ScrollView>
        <View
          style={{
            position: "relative",
            marginTop: "auto",
            paddingVertical: 16,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Comment..."
            name="comment"
            placeholderTextColor={"#BDBDBD"}
            textContentType="username"
            value={newComment}
            onChangeText={setNewComment}
          />
          <View style={styles.icon}>
            <AntDesign
              name="arrowup"
              size={24}
              color="white"
              onPress={handleAddComment }
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 16,
  },
  image: {
    width: "100%",
    height: 240,
    backgroundColor: "#bdbdbd",
    borderRadius: 8,
    marginBottom: 8,
  },
  icon: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 8,
    top: 24,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});





