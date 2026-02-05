import ScreenHeader from "@/components/ScreenHeader";
import BoostProfileMange from "@/components/home/BoostProfileMange";
import CallChatManage from "@/components/home/CallChatManage";
import EarningCards from "@/components/home/EarningCards";
import GoLiveManage from "@/components/home/GoLiveManage";
import UserAvatar from "@/components/home/UserAvatar";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

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
        <View>
          <CallChatManage />
          <BoostProfileMange />
          <GoLiveManage />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
