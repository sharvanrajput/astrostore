import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "@/components/ScreenHeader";
import MonthCallChat from "@/components/earning/MonthCallChat";
import HistoryEarningWidhdrow from "@/components/earning/HistoryEarningWidhdrow";
import HistorPdf from "@/components/earning/HistorPdf";

const Earning = () => {
  return (
    <View className="flex-1 ">
      <ScreenHeader text="Estimated Earning" />
      <ScrollView className="flex-1 px-2">
        <MonthCallChat />
        <HistoryEarningWidhdrow />
        <HistorPdf />
      </ScrollView>
    </View>
  );
};

export default Earning;
