import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import KeyboardAvoidingView from "../KeyboardAvoidingView";

export default function Container({ children }: { children: React.ReactNode }) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingHorizontal: 12,
    },
  });

  return (
    <KeyboardAvoidingView>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <LinearGradient
        colors={["#F1F1F1", "#BBDDE5"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
      >
        {children}
      </LinearGradient>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
}
