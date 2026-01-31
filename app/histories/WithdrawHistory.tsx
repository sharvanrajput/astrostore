import HistoryHeader from "@/components/HistoryHeader";
import React from "react";
import { View } from "react-native";

const WithdrawHistory = () => {
  return (
    <View className="flex-1">
      <HistoryHeader text="Withdraw History" />
    </View>
  );
};

export default WithdrawHistory;
