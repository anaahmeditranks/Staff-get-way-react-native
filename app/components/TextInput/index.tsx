import { FunctionComponent, ReactNode } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
} from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function AppTextInput({
  label,
  ...Props
}: { label: string } & TextInputProps): ReactNode & {
  Icon?: FunctionComponent<TextInputProps>;
} {
  const styles = ScaledSheet.create({
    label: {
      fontSize: "16@msr",
      color: "#096484",
      paddingInline: 0,
      paddingHorizontal: 0,
    },
    inputContent: {
      paddingInlineStart: 0,
      fontSize: "18@msr",
      marginTop: "8@msr",
    },
    input: {
      backgroundColor: "transparent",
      paddingHorizontal: 0,
    },
  });

  return (
    <TextInput
      style={[styles.input, Props.style]}
      contentStyle={[styles.inputContent, Props.contentStyle]}
      label={<Text style={styles.label}>{label}</Text>}
      {...Props}
    />
  );
}

AppTextInput.Icon = TextInput.Icon;
