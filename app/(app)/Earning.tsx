import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "@/components/ScreenHeader";
import MonthCallChat from "@/components/earning/MonthCallChat";
import HistoryEarningWidhdrow from "@/components/earning/HistoryEarningWidhdrow";

const Earning = () => {
  return (
    <View className="flex-1 ">
      <ScreenHeader text="Astrologer Panal" />
      <ScrollView className="flex-1 px-2">
        <MonthCallChat />
        <HistoryEarningWidhdrow />
      </ScrollView>
    </View>
  );
};

export default Earning;
