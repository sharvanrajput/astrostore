import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const BoostProfileMange = () => {
  const [boost, setIsBoost] = useState(false);
  const [isUnlimited, setIsUnlimited] = useState(false);
  const tooggleBoost = () => setIsBoost((prev) => !prev);
  const toggleUnlimited = () => setIsUnlimited((prev) => !prev);
  return (
    <View className="mt-3">
      <Card>
        <Card.Content className="py-3 px-2">
          <View className="flex flex-row justify-between border-b border-gray-300  ">
            <View className="flex flex-row gap-2 items-center">
              <View className="bg-primary size-10 flex items-center justify-center rounded-md">
                <Ionicons name="infinite-outline" color={"white"} size={18} />
              </View>
              <Text>Chat</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#2563eb" }}
              thumbColor={isUnlimited ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleUnlimited}
              value={isUnlimited}
            />
          </View>
          <View className="flex flex-row justify-between  ">
            <View className="flex flex-row gap-2 items-center">
              <View className="bg-green-600 size-10 flex items-center justify-center rounded-md">
                <MaterialIcons name="rocket-launch" color={"white"} size={18} />
              </View>
              <Text>Boost My Prfile</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#2563eb" }}
              thumbColor={boost ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={tooggleBoost}
              value={boost}
            />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default BoostProfileMange;
