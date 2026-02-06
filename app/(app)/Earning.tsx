import ScreenHeader from "@/components/ScreenHeader";
import HistoryEarningWidhdrow from "@/components/earning/HistoryEarningWidhdrow";
import MonthCallChat from "@/components/earning/MonthCallChat";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Earning = () => {
  return (
    <View className="flex-1 ">
      <ScreenHeader text="Estimated Earning" />
      <ScrollView className="flex-1 px-2 ">
        <Text className=" mt-5 text-xl text-black font-bold">Earnings</Text>
        <MonthCallChat />
        <Text className=" mt-5 text-xl text-black font-bold">History</Text>
        <HistoryEarningWidhdrow />
        {/* <Text className=" mt-5 text-xl text-black font-bold">Pdfs</Text> */}
        {/* <HistorPdf /> */}
      </ScrollView>
    </View>
  );
};

export default Earning;
