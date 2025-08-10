import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imgAndTitleContainer: { flex: 1, backgroundColor: "transparent" },
  imgContainer: {
    position: "relative",
    backgroundColor: "transparent",
    marginTop: 10,
    marginBottom: 40,
  },
  img: { width: 285, height: 400, alignSelf: "center" },
  icon: { position: "absolute" },
  title: { alignSelf: "center", fontSize: 18, fontWeight: "500" },
  coverForm: {
    backgroundColor: "transparent",
    gap: 20,
    marginBottom: 50,
  },
  label: {
    fontSize: 13,
    color: "#096484",
    paddingInline: 0,
    paddingHorizontal: 0,
  },
  inputContent: { paddingInlineStart: 0, fontSize: 16 },
  input: { backgroundColor: "transparent", paddingHorizontal: 0 },
  time: { alignSelf: "center" },
  sendCode: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    fontWeight: "500",
    borderRadius: 58,
    color: "white",
    width: "100%",
    paddingVertical: 8,
    marginTop: 20,
  },
});
