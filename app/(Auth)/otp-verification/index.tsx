import AppButton from "@/app/components/Button";
import Container from "@/app/components/Container";
import View from "@/app/components/shared/View";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { PaperOtpInput } from "react-native-paper-otp-input";
import styles from "./styles";

export default function OtpVerification() {
  const { t } = useTranslation(undefined, { keyPrefix: "otp_verification" });
  const { back, navigate } = useRouter();
  const [otp, setOtp] = useState("");
  const disabled = otp.length < 4;

  return (
    <Container>
      <View style={styles.imgAndTitleContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/forgetPass.png")}
          />
          <IconButton icon="arrow-left" style={styles.icon} onPress={back} />
        </View>
        <Text style={styles.title}>{t("title")}</Text>
      </View>
      <View style={styles.coverForm}>
        <PaperOtpInput
          maxLength={4}
          onPinChange={(otp) => {
            setOtp(otp);
          }}
          otpBorderFocusedColor="#0083B0"
        />
        <Text style={styles.time}>{t("timer")}</Text>
        <View style={styles.sendCode}>
          <Text>{t("not_receive_code")}</Text>
          <AppButton mode="text" textColor="#0083B0">
            {t("resend")}
          </AppButton>
        </View>
        <AppButton
          mode="contained"
          style={[
            styles.button,
            { backgroundColor: disabled ? "#E3E3E3" : "#0083B0" },
          ]}
          onPress={() => {
            console.log(otp);
            navigate("/new-password");
          }}
          disabled={disabled}
        >
          {t("submit")}
        </AppButton>
      </View>
    </Container>
  );
}
