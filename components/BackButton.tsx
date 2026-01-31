import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
function BackButton() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="w-[80px]">
      <Feather name="arrow-left" size={25} color={"black"} />
    </Pressable>
  );
}

export default BackButton;
