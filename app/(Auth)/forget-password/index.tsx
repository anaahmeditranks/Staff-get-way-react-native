import AppButton from "@/app/components/Button";
import Container from "@/app/components/Container";
import View from "@/app/components/shared/View";
import AppTextInput from "@/app/components/TextInput";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { moderateScale } from "react-native-size-matters";
import styles from "./styles";

export default function ForgetPassword() {
  const { t } = useTranslation(undefined, { keyPrefix: "forget_password" });
  const { back, navigate } = useRouter();
  const [username, setUsername] = useState("");
  const [nationalId, setNationalId] = useState("");

  return (
    <Container>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/forgetPass.png")}
        />
        <IconButton
          icon="arrow-left"
          style={styles.icon}
          onPress={back}
          size={moderateScale(25)}
        />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.title}>{t("title")}</Text>
        <Text style={styles.desc}>{t("desc")}</Text>
      </View>
      <View style={styles.coverForm}>
        <AppTextInput
          style={styles.input}
          contentStyle={styles.inputContent}
          label={t("user_name")}
          placeholder={t("user_name_placeholder")}
          onChangeText={(name) => setUsername(name)}
          value={'username'}
        />
        <AppTextInput
          style={styles.input}
          contentStyle={styles.inputContent}
          label={t("national_id")}
          keyboardType="number-pad"
          placeholder={t("national_id_placeholder")}
          onChangeText={(nationalId) => setNationalId(nationalId)}
          value={'nationalId'}
        />
        <AppButton
          mode="contained"
          style={styles.button}
          onPress={() => navigate("/otp-verification")}
        >
          {t("continue")}
        </AppButton>
      </View>
    </Container>
  );
}
