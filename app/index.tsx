import View from "@/app/components/shared/View";
import { useAppTheme } from "@/theme";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StatusBar } from "react-native";
import LoadingDots from "react-native-loading-dots";
import styles from "./styles";

// dark mode and light mode provider
// localization and i've issue in RTL
// safe area
// react native paper library
// react-native-toast-message and it's config
// loadingDots and navigate
// react-native-app-intro-slider
// expo-linear-gradient
// KeyboardAvoidingView and white space
// react-native-paper-otp-input
// authentication

// image background
// lotify jf not need LoadingDots
// plagen for splash screen

export default function Index() {
  const { colors } = useAppTheme();
  const { navigate } = useRouter();
  const backgroundColor = colors.custom.primary.dark;

  useEffect(() => {
    setTimeout(() => {
      navigate("/forget-password");
    }, 2000);
  }, [navigate]);

  return (
    <View style={[{ backgroundColor }, styles.card]}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"red"} />
      <View style={[{ backgroundColor }, styles.coverImage]}>
        <Image
          style={[{ backgroundColor }, styles.img]}
          source={require("../assets/images/splash.png")}
        />
      </View>
      <View style={[{ backgroundColor }, styles.dots]}>
        <LoadingDots
          colors={["red", "blue", "green", "yellow", "orange"]}
          dots={5}
          size={15}
        />
      </View>
    </View>
  );
}
