import AppButton from "@/app/components/Button";
import Container from "@/app/components/Container";
import View from "@/app/components/shared/View";
import AppTextInput from "@/app/components/TextInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Text } from "react-native-paper";
import styles from "./styles";

export default function NewPassword() {
  const { t } = useTranslation(undefined, { keyPrefix: "new_password" });
  const { back, navigate } = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);
  const disabled = newPassword !== confirmPassword;

  return (
    <Container>
      <View style={styles.titleContainer}>
        <IconButton
          icon="arrow-left"
          style={styles.icon}
          contentStyle={{ width: 18, height: 16 }}
          onPress={back}
        />
        <Text style={styles.title}>{t("title")}</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputsContainer}>
          <AppTextInput
            label={t("new_password")}
            placeholder={t("new_password_placeholder")}
            secureTextEntry={hidePass}
            onChangeText={(password) => setNewPassword(password)}
            value={newPassword}
            right={
              <AppTextInput.Icon
                icon={hidePass ? "eye-off" : "eye"}
                onPress={() => setHidePass(!hidePass)}
              />
            }
          />
          <AppTextInput
            label={t("confirm_password")}
            placeholder={t("confirm_password_placeholder")}
            secureTextEntry={hideConfirmPass}
            onChangeText={(password) => setConfirmPassword(password)}
            value={confirmPassword}
            right={
              <AppTextInput.Icon
                icon={hideConfirmPass ? "eye-off" : "eye"}
                onPress={() => setHideConfirmPass(!hideConfirmPass)}
              />
            }
          />
        </View>
        <AppButton
          mode="contained"
          style={[styles.button, disabled && styles.disabledButton]}
          disabled={disabled}
          onPress={() => navigate("/reset-confirmation")}
        >
          {t("update")}
        </AppButton>
      </View>
    </Container>
  );
}
