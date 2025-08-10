import { StyleSheet } from "react-native";
import { Button as ButtonPaper, ButtonProps } from "react-native-paper";

export default function Button(props: ButtonProps) {
  const styles = StyleSheet.create({
    button: {
      fontSize: 20,
      fontWeight: "500",
      backgroundColor: "#0083B0",
      borderRadius: 58,
      color: "white",
      width: "100%",
      paddingVertical: 8,
    },
  });

  return (
    <ButtonPaper
      {...props}
      style={[
        props.mode === "contained" ? styles.button : undefined,
        props.style,
      ]}
    />
  );
}
