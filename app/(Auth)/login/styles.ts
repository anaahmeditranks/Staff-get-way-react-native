import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: 50,
    paddingHorizontal: 12,
  },
  logo: {
    backgroundColor: "white",
    width: 185,
    height: 65,
    alignSelf: "center",
    marginTop: 50,
  },
  textContent: {
    backgroundColor: "transparent",
  },
  title: {
    color: "#096484",
    fontSize: 24,
  },
  loginWord: {
    color: "#096484",
    fontSize: 24,
    fontWeight: "bold",
  },
  coverForm: {
    backgroundColor: "transparent",
    gap: 20,
  },

  rememberMe: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  remember: { fontSize: 15, fontWeight: 500 },
  containerFaceId: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  faceId: { width: 24, height: 24 },
  faceIdText: { fontSize: 16, fontWeight: "500", color: "#0083B0" },
  arText: { alignSelf: "center" },
});
