import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "@/components/ScreenHeader";
import UserAvatar from "@/components/home/UserAvatar";
import EarningCards from "@/components/home/EarningCards";
import CallChatManage from "@/components/home/CallChatManage";

const Home = () => {
  return (
    <View className="flex-1 ">
      <ScreenHeader text="Astrologer Panal" />
      <ScrollView className="flex-1 px-2">
        <UserAvatar />
        <View className="flex flex-row justify-between gap-2 mt-5 ">
          <EarningCards title={100} subtitle="Today Earning" />
          <EarningCards title={5} subtitle="Call Earning" />
          <EarningCards title={95} subtitle="Chat Earning" />
        </View>
        <CallChatManage />
      </ScrollView>
    </View>
  );
};

export default Home;
