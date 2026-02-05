import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

const HistoryEarningWidhdrow = () => {
  return (
    <View className="mt-3">
      <Card style={{ backgroundColor: "#fff" }}>
        <Card.Content className="py-3 px-3">
          <Link href="/histories/EarningHistory" asChild>
            <TouchableOpacity>
              <View className="flex-row justify-between items-center pb-3 border-b border-gray-300">
                <View className="flex-row gap-2 items-center">
                  <View className="bg-primary size-10 items-center justify-center rounded-md">
                    <AntDesign name="history" size={18} color="black" />
                  </View>
                  <Text className="text-lg font-bold">Earning History</Text>
                </View>
                <Feather name="arrow-right" size={22} color="black" />
              </View>
            </TouchableOpacity>
          </Link>
          <Link href="/histories/WithdrawHistory" asChild>
            <TouchableOpacity>
              <View className="flex-row justify-between items-center pt-3">
                <View className="flex-row gap-2 items-center">
                  <View className="bg-primary size-10 items-center justify-center rounded-md">
                    <AntDesign name="history" size={18} color="black" />
                  </View>
                  <View>
                    <Text className="text-lg font-bold">Withdraw History</Text>
                  </View>
                </View>
                <Feather name="arrow-right" size={22} color="black" />
              </View>
            </TouchableOpacity>
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HistoryEarningWidhdrow;
