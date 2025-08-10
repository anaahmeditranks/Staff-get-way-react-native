import { StyleSheet } from "react-native";

export default StyleSheet.create({
  titleContainer: {
    backgroundColor: "transparent",
    marginVertical: 40,
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0,
    width: 18,
    height: 22,
  },
  title: { textAlign: "center", fontSize: 16, fontWeight: "500" },
  formContainer: {
    backgroundColor: "transparent",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  inputsContainer: { backgroundColor: "transparent", gap: 20 },
  button: {
    marginBottom: 70,
  },
  disabledButton: {
    backgroundColor: "#B0BEC5",
  },
});
