import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textContainer: { flex: 1, alignItems: "center", paddingTop: 40 },
  title: { fontWeight: "bold", fontSize: 18 },
  description: {
    marginHorizontal: 30,
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },
  coverImg: { width: "100%", height: 550 },
  img: { width: "100%", height: "100%" },
  paginationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  containerDots: {
    width: 80,
    height: 28,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: "#E3F0FC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inactiveDot: {
    height: 6,
    borderRadius: 100,
    backgroundColor: "#B6B6B6",
  },
});
