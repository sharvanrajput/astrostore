import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const MonthCallChat = () => {
  return (
    <>
      <View className="mt-3">
        <Card>
          <Card.Content className="py-3 px-3 ">
            <View className="flex flex-row justify-between items-end pb-2 border-b border-gray-300">
              <View className="flex flex-row gap-2 items-center">
                <View>
                  <Text className="text-lg font-bold">Call Earning</Text>
                  <Text className="text-sm">This Month</Text>
                </View>
              </View>
              <View className="w-[80px] rounded-lg flex flex-row gap-3 justify-center items-center ">
                <FontAwesome name="rupee" size={18} color={"#FACC15"} />
                <Text className="text-black text-xl font-bold">50</Text>
              </View>
            </View>
            <View className="flex flex-row justify-between pt-2  ">
              <View className="flex flex-row gap-2 items-center">
                <View>
                  <Text className="text-lg font-bold">Chat Earning</Text>
                  <Text className="text-sm">This Month</Text>
                </View>
              </View>
              <View className="w-[80px] rounded-lg flex flex-row gap-3 justify-center items-center ">
                <FontAwesome name="rupee" size={18} color={"#FACC15"} />
                <Text className="text-black text-xl font-bold">50</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
      <View className="mt-3">
        <Card>
          <Card.Content className="py-3 px-3 ">
            <View className="flex flex-row justify-between pt-2  ">
              <View className="flex flex-row gap-2 items-center">
                <View>
                  <Text className="text-lg font-bold">Tatal Earning</Text>
                  <Text className="text-sm">This Month</Text>
                </View>
              </View>
              <View className="w-[80px] rounded-lg flex flex-row gap-3 justify-center items-center ">
                <FontAwesome name="rupee" size={18} color={"#FACC15"} />
                <Text className="text-black text-xl font-bold">100 +</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

export default MonthCallChat;
