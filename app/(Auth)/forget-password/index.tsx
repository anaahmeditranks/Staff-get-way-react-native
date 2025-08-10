import Button from "@/components/Button";
import Container from "@/components/Container";
import View from "@/components/shared/View";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
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
        <IconButton icon="arrow-left" style={styles.icon} onPress={back} />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.title}>{t("title")}</Text>
        <Text style={styles.desc}>{t("desc")}</Text>
      </View>
      <View style={styles.coverForm}>
        <TextInput
          style={styles.input}
          contentStyle={styles.inputContent}
          label={<Text style={styles.label}>{t("user_name")}</Text>}
          placeholder={t("user_name_placeholder")}
          onChangeText={(name) => setUsername(name)}
          value={username}
        />
        <TextInput
          style={styles.input}
          contentStyle={styles.inputContent}
          label={<Text style={styles.label}>{t("national_id")}</Text>}
          keyboardType="number-pad"
          placeholder={t("national_id_placeholder")}
          onChangeText={(nationalId) => setNationalId(nationalId)}
          value={nationalId}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigate("/otp-verification")}
        >
          {t("continue")}
        </Button>
      </View>
    </Container>
  );
}
