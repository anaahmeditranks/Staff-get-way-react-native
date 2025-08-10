import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

const ThemeContext = createContext({
  theme: "dark" as ColorSchemeName,
  isDarkMode: true,
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState<ColorSchemeName>("dark");
  const isDarkMode = theme === "dark";

  const toggleTheme = async () => {
    const theme = isDarkMode ? "light" : "dark";
    setTheme(theme);
    await AsyncStorage.setItem("theme", String(theme));
  };

  useEffect(() => {
    const getInitTheme = async () => {
      let defaultTheme = (await AsyncStorage.getItem(
        "theme"
      )) as ColorSchemeName;
      if (!defaultTheme) defaultTheme = deviceTheme;
      setTheme(defaultTheme);
    };

    getInitTheme();
  }, [deviceTheme]);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
