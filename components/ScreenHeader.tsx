import { View, Text } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const ScreenHeader = ({ text }: { text: string }) => {
  return (
    <View className=" px-2  relative bg-yellow-400 pb-4 h-[80px] ">
      <View className="flex-1 flex flex-row justify-between items-end  ">
        <Text className="text-2xl font-bold ">{text}</Text>
        <Text>
          <EvilIcons name="question" size={30} />
        </Text>
      </View>
    </View>
  );
};

export default ScreenHeader;
