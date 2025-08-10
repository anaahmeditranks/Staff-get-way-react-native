import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imgContainer: {
    position: "relative",
    backgroundColor: "transparent",
    marginTop: 10,
    // marginBottom: 40,
  },
  img: { width: 285, height: 400, alignSelf: "center" },
  icon: { position: "absolute" },
  textContent: { backgroundColor: "transparent" },
  title: { fontSize: 24, fontWeight: "600" },
  desc: { color: "#676767" },
  coverForm: { backgroundColor: "transparent", gap: 20 },
  label: {
    fontSize: 13,
    color: "#096484",
    paddingInline: 0,
    paddingHorizontal: 0,
  },
  inputContent: { paddingInlineStart: 0, fontSize: 16 },
  input: { backgroundColor: "transparent", paddingHorizontal: 0 },
  button: {
    marginTop: 20,
  },
});
