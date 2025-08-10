import Button from "@/components/Button";
import View from "@/components/shared/View";
import TextInput from "@/components/TextInput";
import { changeLanguage } from "@/i18n";
import { LinearGradient } from "expo-linear-gradient";
import { authenticateAsync } from "expo-local-authentication";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import styles from "./styles";

export default function Login() {
  const { i18n, t } = useTranslation(undefined, { keyPrefix: "login" });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const { navigate } = useRouter();
  const currentLang = i18n.language;
  const isEnglishLang = currentLang === "en";

  const auth = async () => {
    try {
      const res = await authenticateAsync();
      console.log(res);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <LinearGradient
      colors={["#F1F1F1", "#BBDDE5"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <Image
        style={styles.logo}
        source={require("../../../assets/images/mainLogo.png")}
      />
      <View style={styles.textContent}>
        <Text style={styles.title}>{t("proceed_with_your")}</Text>
        <Text style={styles.loginWord}>{t("login")}</Text>
      </View>
      <View style={styles.coverForm}>
        <TextInput
          label={t("user_name")}
          placeholder={t("user_name")}
          onChangeText={(name) => setUsername(name)}
          value={username}
        />
        <TextInput
          label={t("password")}
          placeholder={t("password")}
          secureTextEntry={hidePass}
          onChangeText={(password) => setPassword(password)}
          value={password}
          right={
            <TextInput.Icon
              icon={hidePass ? "eye-off" : "eye"}
              onPress={() => setHidePass(!hidePass)}
            />
          }
        />
        <View style={styles.rememberMe}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
            color="#0083B0"
          />
          <Text style={styles.remember}>{t("remember_me")}</Text>
        </View>
        <Button mode="contained" onPress={() => navigate("/forget-password")}>
          {t("login")}
        </Button>
      </View>
      <TouchableOpacity style={styles.containerFaceId} onPress={auth}>
        <Image
          style={styles.faceId}
          source={require("../../../assets/images/faceId.png")}
        />
        <Text style={styles.faceIdText}>{t("use_face_id")}</Text>
      </TouchableOpacity>
      <Button
        mode="text"
        style={styles.arText}
        textColor="#0083B0"
        onPress={() => changeLanguage(isEnglishLang ? "ar" : "en")}
      >
        {isEnglishLang ? "العربية" : "English"}
      </Button>
    </LinearGradient>
  );
}
