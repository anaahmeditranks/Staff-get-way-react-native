import { Button, ButtonProps } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function AppButton(props: ButtonProps) {
  const styles = ScaledSheet.create({
    button: {
      backgroundColor: "#0083B0",
      borderRadius: 58,
      width: "100%",
      paddingVertical: "8@msr",
    },
    labelStyle: {
      fontSize: "18@msr",
    },
  });

  return (
    <Button
      {...props}
      style={[
        props.mode === "contained" ? styles.button : undefined,
        props.style,
      ]}
      labelStyle={[
        props.mode === "contained" ? styles.labelStyle : undefined,
        props.labelStyle,
      ]}
    />
  );
}
