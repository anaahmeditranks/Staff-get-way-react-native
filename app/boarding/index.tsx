import Button from "@/components/Button";
import View from "@/components/shared/View";
import { useRouter } from "expo-router";
import { TFunction } from "i18next";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Animated, Image, ImageSourcePropType } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text } from "react-native-paper";
import styles from "./styles";

type Slide = {
  key: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

const getSlides = (t: TFunction) => [
  {
    key: "onboarding1",
    title: t("boarding.onboarding1.title"),
    description: t("boarding.onboarding1.description"),
    image: require("../../assets/images/boarding1.png"),
  },
  {
    key: "onboarding2",
    title: t("boarding.onboarding2.title"),
    description: t("boarding.onboarding2.description"),
    image: require("../../assets/images/boarding2.png"),
  },
  {
    key: "onboarding3",
    title: t("boarding.onboarding3.title"),
    description: t("boarding.onboarding3.description"),
    image: require("../../assets/images/boarding3.png"),
  },
];

export default function Boarding() {
  const { t } = useTranslation();
  const slides = getSlides(t);
  const slidePaginationLen = slides.slice(0, -1);
  const { navigate } = useRouter();
  // animation
  const animatedDots = useRef(
    slidePaginationLen.map(
      (_, index) => new Animated.Value(index === 0 ? 30 : 6)
    )
  ).current;
  const animatedDot = (activeIndex: number) => {
    animatedDots.forEach((animWidth, index) => {
      Animated.timing(animWidth, {
        toValue: activeIndex === index ? 30 : 6,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  };

  const renderItem = (item: Slide, index: number) => {
    const { title, description, image, key } = item;
    const orderViews = [
      <View key="orderViews1" style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>,
      <View key="orderViews2" style={styles.coverImg}>
        <Image source={image} style={styles.img} />
      </View>,
    ];
    const order = index === 1 ? [1, 0] : [0, 1];

    return (
      <View style={styles.container} key={key}>
        {order.map((i) => orderViews[i])}
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item, index }) => renderItem(item, index)}
      showDoneButton={false}
      showNextButton={false}
      onSlideChange={(activeIndex) => animatedDot(activeIndex)}
      renderPagination={(activeIndex) => (
        <View style={styles.paginationContainer}>
          {activeIndex === 2 ? (
            <Button mode="contained" onPress={() => navigate("/login")}>
              {t("boarding.getStarted")}
            </Button>
          ) : (
            <View style={styles.containerDots}>
              {slides.map((_, index) => (
                <Animated.View
                  key={index}
                  style={[
                    styles.inactiveDot,
                    {
                      width: animatedDots[index] ?? 6,
                      backgroundColor:
                        activeIndex === index ? "#30A9E0" : "#B6B6B6",
                    },
                  ]}
                />
              ))}
            </View>
          )}
        </View>
      )}
    />
  );
}
