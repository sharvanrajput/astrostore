import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

interface props {
  title: number;
  subtitle: string;
}

const EarningCards = ({ title, subtitle }: props) => {
  return (
    <View className="w-[30%]">
      <Card>
        <Card.Content className="py-3 px-3">
          <View className="flex flex-row items-center gap-2 mb-1">
            <FontAwesome name="rupee" size={18} color={"#FACC15"} />

            <Text className="font-bold text-xl   ">{title}</Text>
          </View>
          <Text className="text-sm font-grey-600">{subtitle}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default EarningCards;
