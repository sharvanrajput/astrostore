import { Stack, useRouter, useRootNavigationState } from "expo-router";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./global.css";

export default function RootLayout() {
  const router = useRouter();
  const rootNavState = useRootNavigationState();

  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkToken = async () => {
    try {
      const res = await AsyncStorage.getItem("token");
      setToken(res);
    } catch (err) {
      console.log("Token read error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!rootNavState?.key || loading) return;

    if (!token) {
      router.replace("/auth/Login");
    } else {
      router.replace("/(app)/Index");
    }
  }, [token, rootNavState, loading]);

  if (loading) return null; // splash/loading screen later

  return (
    <PaperProvider theme={MD3LightTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
