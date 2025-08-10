import Button from "@/components/Button";
import View from "@/components/shared/View";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import Toast from "react-native-toast-message";
import styles from "./styles";

export default function ResetConfirmation() {
  const { t } = useTranslation(undefined, { keyPrefix: "reset_confirmation" });
  const handleSignIn = () => {
    Toast.show({
      type: "success",
      text1: t("success_toast"),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/reset-confirmation.png")}
        />
        <View style={styles.textContent}>
          <View style={styles.mainText}>
            <Text style={styles.title}>{t("congratulations")}</Text>
            <Text style={styles.desc}>{t("desc")}</Text>
          </View>
          <Text style={styles.thx}>{t("thank_you")}</Text>
        </View>
        <Button mode="contained" style={styles.button} onPress={handleSignIn}>
          {t("sign_in")}
        </Button>
      </View>
    </View>
  );
}
