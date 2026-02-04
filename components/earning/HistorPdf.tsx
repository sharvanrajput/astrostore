import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
const HistorPdf = () => {
  return (
    <View className="mt-3">
      <Card>
        <Card.Content className="py-3 px-3 ">
          <Link href="/hostorypdf/EarningHistoryPdf" asChild>
            <TouchableOpacity>
              <View className="flex flex-row justify-between items-end pb-2 border-b border-gray-300">
                <View className="flex flex-row gap-2 items-center">
                  <View className="bg-red-500 size-10 flex items-center justify-center rounded-md">
                    <AntDesign name="file-pdf" color={"white"} size={18} />
                  </View>
                  <View>
                    <Text className="text-lg font-bold">
                      Earning History PDF
                    </Text>
                  </View>
                </View>
                <View className=" w-[60px] rounded-lg flex flex-row gap-3 justify-center items-center ">
                  <AntDesign name="download" size={25} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </Link>
          <Link href="/hostorypdf/WithdrawHistoryPdf" asChild>
            <TouchableOpacity>
              <View className="flex flex-row justify-between pt-2  ">
                <View className="flex flex-row gap-2 items-center">
                  <View className="bg-red-500 size-10 flex items-center justify-center rounded-md">
                    <AntDesign name="file-pdf" color={"white"} size={18} />
                  </View>
                  <View>
                    <Text className="text-lg font-bold">
                      Withdraw History PDF
                    </Text>
                    <Text className="text-sm">This Month</Text>
                  </View>
                </View>
                <View className=" w-[60px]  rounded-lg flex flex-row gap-3 justify-center items-center ">
                  <AntDesign name="download" size={25} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HistorPdf;
