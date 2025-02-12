import { Image, StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/context/AuthContext";

export default function LoginScreen() {
  const { authState } = useAuth();
  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 40,
        paddingTop: 80,
        gap: 16,
        overflow: "hidden",
      }}
    >
      {authState?.authenticated ? (
        <>
          <Text style={{ color: "red" }}>
            Bienvenido a Login: Hola, estás logueado
          </Text>
        </>
      ) : (
        <Text style={{ color: "red" }}>
          Bienvenido a Login: Hola, no estás logueado
        </Text>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
