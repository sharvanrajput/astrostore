import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const HistoryEarningWidhdrow = () => {
  return (
    <View className="mt-3">
      <Card>
        <Card.Content className="py-3 px-3 ">
          <TouchableOpacity>
            <View className="flex flex-row justify-between items-end pb-2 border-b border-gray-300">
              <View className="flex flex-row gap-2 items-center">
                <View className="bg-blue-600 size-10 flex items-center justify-center rounded-md">
                  <Ionicons name="call" color={"white"} size={18} />
                </View>
                <View>
                  <Text className="text-lg font-bold">Earning History</Text>
                </View>
              </View>
              <View className=" rounded-lg flex flex-row gap-3 justify-center items-center ">
                <AntDesign name="right" size={18} color={"black"} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row justify-between pt-2  ">
              <View className="flex flex-row gap-2 items-center">
                <View className="bg-green-600 size-10 flex items-center justify-center rounded-md">
                  <Ionicons name="chatbubbles" color={"white"} size={18} />
                </View>
                <View>
                  <Text className="text-lg font-bold">Chat Earning</Text>
                  <Text className="text-sm">This Month</Text>
                </View>
              </View>
              <View className="  rounded-lg flex flex-row gap-3 justify-center items-center ">
                <AntDesign name="right" size={18} color={"black"} />
              </View>
            </View>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HistoryEarningWidhdrow;
