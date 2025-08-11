import { useAppTheme } from "@/theme";
import { View as ReactView, type ViewProps } from "react-native";

export default function View(Props: ViewProps) {
  const theme = useAppTheme();
  return (
    <ReactView
      {...Props}
      style={[
        { backgroundColor: theme.colors.custom.secondary.lighter },
        Props.style,
      ]}
    />
  );
}
