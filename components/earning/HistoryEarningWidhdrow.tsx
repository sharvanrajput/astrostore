import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

const HistoryEarningWidhdrow = () => {
  return (
    <View className="mt-3">
      <Card>
        <Card.Content className="py-3 px-3 ">
          <Link href={"/histories/EarningHistory"} asChild>
            <TouchableOpacity>
              <View className="flex flex-row justify-between items-end pb-2 border-b border-gray-300">
                <View className="flex flex-row gap-2 items-center">
                  <View className="bg-primary size-10 flex items-center justify-center rounded-md">
                    <AntDesign name="history" color={"black"} size={18} />
                  </View>
                  <View>
                    <Text className="text-lg font-bold">Earning History</Text>
                  </View>
                </View>
                <View className=" w-[60px] rounded-lg flex flex-row gap-3 justify-center items-center ">
                  <Feather name="arrow-right" size={25} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </Link>
          <Link href={"/histories/WithdrawHistory"} asChild>
            <TouchableOpacity>
              <View className="flex flex-row justify-between pt-2  ">
                <View className="flex flex-row gap-2 items-center">
                  <View className="bg-primary size-10 flex items-center justify-center rounded-md">
                    <AntDesign name="history" color={"black"} size={18} />
                  </View>
                  <View>
                    <Text className="text-lg font-bold">Withdraw History</Text>
                    <Text className="text-sm">This Month</Text>
                  </View>
                </View>
                <View className=" w-[60px]  rounded-lg flex flex-row gap-3 justify-center items-center ">
                  <Feather name="arrow-right" size={25} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HistoryEarningWidhdrow;
