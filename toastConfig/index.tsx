import View from "@/components/shared/View";
import { StyleSheet } from "react-native";
import { Icon, IconButton, Text } from "react-native-paper";
import { ToastConfig } from "react-native-toast-message";

export const toastConfig: ToastConfig = {
  success: ({ text1, hide }) => (
    <View style={styles.toastContainer}>
      <Icon source="check-circle" size={20} color="#4CAF50" />
      <Text style={styles.toastText}>{text1}</Text>
      <IconButton
        icon="close"
        onPress={() => hide()}
        style={styles.closeButton}
        size={10}
      />
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginHorizontal: 20,
    bottom: "200%",
  },
  toastText: {
    flex: 1,
    marginLeft: 20,
    fontSize: 11,
  },
  closeButton: {
    margin: 0,
  },
});
