import { FunctionComponent, ReactNode } from "react";
import { StyleSheet } from "react-native";
import {
  TextInput as InputPaper,
  Text,
  TextInputProps,
} from "react-native-paper";

export default function TextInput({
  label,
  ...Props
}: { label: string } & TextInputProps): ReactNode & {
  Icon?: FunctionComponent<TextInputProps>;
} {
  const styles = StyleSheet.create({
    label: {
      fontSize: 13,
      color: "#096484",
      paddingInline: 0,
      paddingHorizontal: 0,
    },
    inputContent: { paddingInlineStart: 0, fontSize: 16 },
    input: {
      backgroundColor: "transparent",
      paddingHorizontal: 0,
    },
  });

  return (
    <InputPaper
      style={[styles.input, Props.style]}
      contentStyle={[styles.inputContent, Props.contentStyle]}
      label={<Text style={styles.label}>{label}</Text>}
      {...Props}
    />
  );
}

TextInput.Icon = InputPaper.Icon;
