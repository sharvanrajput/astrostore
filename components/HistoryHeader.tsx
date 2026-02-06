import { View, Text } from "react-native";
import React from "react";
import BackButton from "./BackButton";

const HistoryHeader = ({ text }: { text: string }) => {
  return (
    <View className=" px-2  relative bg-yellow-400 pb-4 h-[100px] ">
      <View className="flex-1 flex flex-row justify-between items-end  ">
        <BackButton />
        <Text className="text-2xl font-bold ">{text}</Text>
      </View>
    </View>
  );
};

export default HistoryHeader;
