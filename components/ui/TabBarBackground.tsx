import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { View } from "react-native";

// This is a shim for web and Android where the tab bar is generally opaque.
export default undefined;

export function useBottomTabOverflow() {
  const colorScheme = useColorScheme()
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: 70,
        backgroundColor: Colors[colorScheme ?? "light"].tabBackground,
        borderTopWidth: 3, // Agrega el borde aquí
        borderTopColor: "rgba(217, 3, 255, 0.95)",
      }}
    />
  )
}
