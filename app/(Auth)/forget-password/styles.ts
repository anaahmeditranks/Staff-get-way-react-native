import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  imgContainer: {
    position: "relative",
    backgroundColor: "transparent",
    marginTop: "40@msr",
    flex: 1,
  },
  img: { width: "280@s", height: "320@vs", alignSelf: "center" },
  icon: { position: "absolute" },
  textContent: { backgroundColor: "transparent", marginBottom: "20@msr" },
  title: { fontSize: "24@msr", fontWeight: "bold", marginBottom: "8@msr" },
  desc: { color: "#676767", fontSize: "16@msr" },
  coverForm: { backgroundColor: "transparent", gap: "20@msr" },
  label: {
    fontSize: "13@msr",
    color: "#096484",
    paddingInline: 0,
    paddingHorizontal: 0,
  },
  inputContent: { paddingInlineStart: 0, fontSize: "16@msr" },
  input: { backgroundColor: "transparent", paddingHorizontal: 0 },
  button: { marginTop: "20@msr", marginBottom: "70@msr" },
});
