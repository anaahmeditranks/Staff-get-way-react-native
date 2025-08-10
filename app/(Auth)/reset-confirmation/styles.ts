import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    backgroundColor: "#f1f1f1",
  },
  mainContent: { alignItems: "center", backgroundColor: "#f1f1f1" },
  img: { width: 210, height: 185, marginBottom: 70 },
  textContent: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    gap: 40,
    marginBottom: 100,
  },
  mainText: { backgroundColor: "#f1f1f1", alignItems: "center" },
  title: { fontSize: 22 },
  desc: { textAlign: "center" },
  thx: { fontWeight: "500" },
  button: { marginBottom: 70 },
});
