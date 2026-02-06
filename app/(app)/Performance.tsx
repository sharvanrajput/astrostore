import ScreenHeader from "@/components/ScreenHeader";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
const Performance = () => {
  return (
    <View>
      <ScreenHeader text="Performance" />

      <ScrollView className=" px-2 rounded-lg py-2    mt-2">
        <View className="bg-primary rounded-lg  mb-2 flex flex-row px-4 justify-between py-2 ">
          <Text className="py-2 text-xl  font-bold">Indicator</Text>
          <Text className="py-2 text-xl  font-bold">Score</Text>
        </View>
        <View className=" border border-yellow-400  rounded-lg mb-2 flex flex-row px-4 justify-between py-2 ">
          <Text className="py-2 text-md  ">Rating</Text>
          <View className="flex flex-row items-center gap-1">
            {[...new Array(5)].map((_, i) => (
              <AntDesign name="star" key={i} size={20} color={"#FACC15"} />
            ))}
          </View>
        </View>
        <View className=" border border-yellow-400  rounded-lg mb-2 flex flex-row px-4 justify-between py-2  ">
          <Text className="py-2 text-md  ">Rating Count</Text>
          <View className="flex justify-center items-center rounded-lg  w-[70px] bg-yellow-200  py-2   font-bold">
            <Text className="text-lg">{2}</Text>
          </View>
        </View>
        <View className=" border border-yellow-400  rounded-lg mb-2 flex flex-row px-4 justify-between py-3 ">
          <Text className="py-2 text-md  ">Daily Available Hours</Text>
          <View className="flex justify-center items-center rounded-lg  w-[70px] bg-yellow-200  py-2   font-bold">
            <Text className="text-lg">{2}</Text>
          </View>
        </View>
        <View className="bg-primary rounded-lg  mb-2 flex flex-row px-4 justify-between py-2 mt-2 ">
          <Text className="py-2 text-xl  font-bold">
            Performane Impacts Income
          </Text>
        </View>
        <View className=" border border-yellow-400  rounded-lg mb-2 flex flex-row px-3 justify-between py-2 ">
          <Text className="py-2 text-md  ">
            AI analyzes performance of astrologers on above parameters and
            distributes more call and chats to excellent astrologers, Similarly
            astrologers get more Visibility
          </Text>
        </View>
        <View className="bg-primary rounded-lg  mb-2 flex flex-row px-4 justify-between py-2 mt-2 ">
          <Text className="py-2 text-xl  font-bold">Call / Chat Price</Text>
        </View>
        <View className=" border border-yellow-400  rounded-lg mb-2 flex flex-row px-4 justify-between py-2 ">
          <Text className="py-2 text-md  ">Call Price</Text>
          <View className="flex justify-center items-center rounded-lg  w-[70px] bg-yellow-200  py-2   font-bold">
            <Text className="text-lg">{10}</Text>
          </View>
        </View>
        <View className=" border border-yellow-400  rounded-lg mb-2 flex flex-row px-4 justify-between py-2 ">
          <Text className="py-2 text-md  ">Chat Price</Text>
          <View className="flex justify-center items-center rounded-lg  w-[70px] bg-yellow-200  py-2   font-bold">
            <Text className="text-lg">{10}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Performance;
