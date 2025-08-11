import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  coverImage: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: "280@s",
    height: "280@vs",
  },
  dots: {
    justifyContent: "center",
    width: "113@s",
    marginBottom: "90@msr",
  },
});
