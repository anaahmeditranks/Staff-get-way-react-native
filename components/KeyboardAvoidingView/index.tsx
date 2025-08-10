import React from "react";
import {
  KeyboardAvoidingView as KeyboardAvoidingReact,
  KeyboardAvoidingViewProps,
  Platform,
} from "react-native";

export default function KeyboardAvoidingView(props: KeyboardAvoidingViewProps) {
  return (
    <KeyboardAvoidingReact
      {...props}
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={30}
    />
  );
}
