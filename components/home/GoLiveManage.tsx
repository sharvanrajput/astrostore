import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const GoLiveManage = () => {
  const [isLive, setIsLive] = useState(false);

  const toggleLive = () => setIsLive((prev) => !prev);

  return (
    <View className="mt-3">
      <Card>
        <Card.Content className="py-3 px-3">
          <View className="flex flex-row justify-between pb-2 border-b border-gray-300  ">
            <View className="flex flex-row gap-2 items-center">
              <View className="bg-red-500  size-10 flex items-center justify-center rounded-md">
                <Ionicons name="infinite-outline" color={"white"} size={18} />
              </View>
              <Text>Unlimited Free Call/Chat</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#2563eb" }}
              thumbColor={isLive ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleLive}
              value={isLive}
            />
          </View>
          <View className="flex flex-row justify-between items-center pt-2 ">
            <View className="flex flex-row gap-2 items-center">
              <View className="bg-violet-600 size-10 flex items-center justify-center rounded-md">
                <Entypo name="back-in-time" color={"white"} size={18} />
              </View>
              <Text>Last Login</Text>
            </View>
            <Text>{new Date().toLocaleString().split("T")[0]}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default GoLiveManage;
