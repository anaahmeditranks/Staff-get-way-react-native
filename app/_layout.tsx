import View from "@/app/components/shared/View";
import "@/i18n";
import { DarkMode, LightTheme } from "@/theme";
import ThemeProvider, { useThemeContext } from "@/theme/ThemeProvider";
import { toastConfig } from "@/toastConfig";
import { Stack } from "expo-router";
import { IconButton, PaperProvider } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedLayout />
    </ThemeProvider>
  );
}

function ThemedLayout() {
  const insets = useSafeAreaInsets();
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <PaperProvider theme={isDarkMode ? DarkMode : LightTheme}>
      <View
        style={{
          flex: 1,
          // paddingTop: insets.top,
          position: "relative",
          backgroundColor: "transparent",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 30,
            right: 16,
            zIndex: 1,
            backgroundColor: "transparent",
          }}
        >
          <IconButton
            icon={isDarkMode ? "white-balance-sunny" : "weather-night"}
            size={20}
            onPress={toggleTheme}
            mode="contained-tonal"
            accessibilityLabel="Toggle Theme"
          />
        </View>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="boarding" />
          <Stack.Screen name="forget-password" />
          <Stack.Screen name="otp-verification" />
          <Stack.Screen name="new-password" />
        </Stack>
        <Toast config={toastConfig} position="bottom" />
      </View>
    </PaperProvider>
  );
}
