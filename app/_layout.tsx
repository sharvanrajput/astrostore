import { Stack, useRouter } from "expo-router";
import "./global.css";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { useEffect } from "react";

export default function RootLayout() {
 
  return (
    <PaperProvider theme={MD3LightTheme}>
      <Stack screenOptions={{ headerShown: false }}></Stack>;
    </PaperProvider>
  );
}
