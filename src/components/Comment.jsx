import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import moment from "moment";


export const Comment = ({ ind, comment }) => {
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: ind % 2 === 0 ? "row" : "row-reverse",
      }}
    >
      <Image source={{ uri: comment.avatar }} style={styles.image} />
      <View
        style={{
          ...styles.textContainer,
          borderTopLeftRadius: ind % 2 === 1 ? 6 : 0,
          borderTopRightRadius: ind % 2 === 1 ? 0 : 6,
        }}
      >
        <Text style={styles.text}>{comment.text}</Text>
        <Text style={styles.date}>
          {moment(+comment.date).format("D MMMM, YYYY | HH:mm")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    display: "flex",
    gap: 16,
  },
  image: {
    height: 28,
    width: 28,
    backgroundColor: "#bdbdbd",
    borderRadius: 14,
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: Dimensions.get("window").width - 100,
    padding: 16,
    flexGrow: 1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  date: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: "#bdbdbd",
    marginLeft: "auto",
  },
  some: {
    width: 1,
  },
});
