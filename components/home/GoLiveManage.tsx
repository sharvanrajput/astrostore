import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const GoLiveManage = () => {
  const [isLive, setIsLive] = useState(false);

  const toggleLive = () => setIsLive((prev) => !prev);

  return (
    <View className="mt-3">
      <Card>
        <Card.Content className="py-3 px-2">
          <View className="flex flex-row justify-between ">
            <View className="flex flex-row gap-2 items-center">
              <View className="bg-blue-600 size-10 flex items-center justify-center rounded-md">
                <Ionicons name="call" color={"white"} size={18} />
              </View>
              <Text>Call</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#2563eb" }}
              thumbColor={isLive ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleLive}
              value={isLive}
            />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default GoLiveManage;
