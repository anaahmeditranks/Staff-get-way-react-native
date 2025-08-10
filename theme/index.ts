import { MD3LightTheme, useTheme } from "react-native-paper";

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    custom: {
      primary: {
        lighter: "#DFF4FF",
        light: "#B9E4F3",
        main: "#30A9E0",
        dark: "#0083B0",
        darker: "#1B6183",
      },
      secondary: {
        lighter: "#fbfbfb",
        light: "#F5F5F5",
        main: "#F0F0F0",
        dark: "#E3F0FC",
        darker: "#BBDDE5",
      },
      success: {
        light: "#D6F2E1",
        main: "#24C44C",
      },
      warning: {
        light: "#FFF4D6",
        main: "#E5A133",
      },
      error: {
        lighter: "#F1F0F0",
        main: "#EA5750",
      },
      gradients: {
        headerBg: ["#2193B0", "#6DD5ED"],
        success: ["#56ab2f", "#a8e063"],
      },
      grey: {
        100: "#121212",
        200: "#1E1E1E",
        300: "#2D2D2D",
        400: "#4F4F4F",
        500: "#7C7C7C",
        600: "#9E9E9E",
        700: "#BDBDBD",
        800: "#E0E0E0",
        900: "#F5F5F5",
        1000: "#FAFAFA",
      },
      text: {
        primary: "#30A9E0",
        dark: "#186B8F",
        darker: "#121212",
        secondary: "#868686",
        tertiary: "#D3D3D3",
      },
      button: {
        primary: "#30A9E0",
        action: "#30A9E0",
      },
    },
  },
};

export const DarkMode = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    custom: {
      primary: {
        lighter: "#DFF4FF",
        light: "#B9E4F3",
        main: "#30A9E0",
        dark: "#067590",
        darker: "#1B6183",
      },
      secondary: {
        lighter: "#333",
        light: "#F5F5F5",
        main: "#F0F0F0",
        dark: "#E3F0FC",
        darker: "#BBDDE5",
      },
      success: {
        light: "#D6F2E1",
        main: "#24C44C",
      },
      warning: {
        light: "#FFF4D6",
        main: "#E5A133",
      },
      error: {
        lighter: "#F1F0F0",
        main: "#EA5750",
      },
      gradients: {
        headerBg: ["#2193B0", "#6DD5ED"],
        success: ["#56ab2f", "#a8e063"],
      },
      grey: {
        100: "#121212",
        200: "#1E1E1E",
        300: "#2D2D2D",
        400: "#4F4F4F",
        500: "#7C7C7C",
        600: "#9E9E9E",
        700: "#BDBDBD",
        800: "#E0E0E0",
        900: "#F5F5F5",
        1000: "#FAFAFA",
      },
      text: {
        primary: "#30A9E0",
        dark: "#186B8F",
        darker: "#121212",
        secondary: "#868686",
        tertiary: "#D3D3D3",
      },
      button: {
        primary: "#30A9E0",
        action: "#30A9E0",
      },
    },
  },
};

type AppTheme = typeof LightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
