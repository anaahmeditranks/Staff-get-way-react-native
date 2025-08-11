import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textContainer: { flex: 1, alignItems: "center" },
  title: { fontWeight: "bold", fontSize: "18@msr" },
  description: {
    marginHorizontal: "20@msr",
    marginTop: "15@msr",
    textAlign: "center",
    fontSize: "16@msr",
  },
  coverImg: { width: "100%" },
  img: { width: "100%", height: "100%" },
  paginationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: "60@msr",
    paddingHorizontal: "40@msr",
  },
  containerDots: {
    width: "80@s",
    height: "28@vs",
    borderRadius: "50@msr",
    paddingHorizontal: "10@msr",
    backgroundColor: "#E3F0FC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inactiveDot: {
    height: "6@vs",
    borderRadius: 100,
    backgroundColor: "#B6B6B6",
  },
});
