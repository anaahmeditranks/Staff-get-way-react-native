import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "50@msr",
    paddingHorizontal: "12@msr",
  },
  logo: {
    backgroundColor: "white",
    width: "185@s",
    height: "65@vs",
    alignSelf: "center",
    marginTop: "75@msr",
  },
  textContent: {
    backgroundColor: "transparent",
  },
  title: {
    color: "#096484",
    fontSize: "24@msr",
  },
  loginWord: {
    color: "#096484",
    fontSize: "24@msr",
    fontWeight: "bold",
  },
  coverForm: {
    backgroundColor: "transparent",
    gap: "20@msr",
  },

  rememberMe: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    gap: "5@msr",
  },
  remember: { fontSize: "15@msr", fontWeight: 500 },
  containerFaceId: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: "10@msr",
    justifyContent: "center",
    alignItems: "center",
  },
  faceId: { width: "24@s", height: "24@vs" },
  faceIdText: { fontSize: "16@msr", fontWeight: "500", color: "#0083B0" },
  langText: { alignSelf: "center", marginTop: "-10@msr" },
  langLabel: { fontSize: "16@msr", fontWeight: "500" },
});
