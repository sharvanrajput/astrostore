import General from "@/components/More/General";
import Setting from "@/components/More/Setting";
import ScreenHeader from "@/components/ScreenHeader";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const More = () => {
  return (
    <View className="flex-1">
      <ScreenHeader text="Support" />

      <ScrollView className="flex-1">
        <Text className=" mt-5 text-xl text-black font-bold">Settings</Text>
        <Setting />
        <Text className=" mt-5 text-xl text-black font-bold">General</Text>
        <General />
      </ScrollView>
    </View>
  );
};

export default More;
