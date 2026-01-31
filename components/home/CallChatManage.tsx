import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const CallChatManage = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const toggleChat = () => setIsChat((prev) => !prev);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className="mt-3">
      <Card>
        <Card.Content className="py-3 px-2">
          <View className="flex flex-row justify-between border-b border-gray-300">
            <View className="flex flex-row gap-2 items-center">
              <View className="bg-blue-600 size-10 flex items-center justify-center rounded-md">
                <Ionicons name="call" color={"white"} size={18} />
              </View>
              <Text>Call</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#2563eb" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View className="flex flex-row justify-between  ">
            <View className="flex flex-row gap-2 items-center">
              <View className="bg-green-600 size-10 flex items-center justify-center rounded-md">
                <Ionicons name="chatbubbles" color={"white"} size={18} />
              </View>
              <Text>Chat</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#2563eb" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleChat}
              value={isChat}
            />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default CallChatManage;
