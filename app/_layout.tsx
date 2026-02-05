import { Stack } from "expo-router";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import "./global.css";

export default function RootLayout() {

  return (
    <PaperProvider theme={MD3LightTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
