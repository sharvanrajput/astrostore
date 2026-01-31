import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
const UserAvatar = () => {
  return (
    <View className="   pt-5 flex flex-row items-center gap-3 ">
      <Avatar.Image
        size={80}
        source={{ uri: "https://github.com/shadcn.png" }}
      />
      <View>
        <Text className="text-3xl font-bold">Sharvan Rajput</Text>
        <Text className="text-md text-gray-700 ">@sharvanrajput</Text>
        <Text className="text-sm  ">your id: SHA0001</Text>
      </View>
    </View>
  );
};

export default UserAvatar;
