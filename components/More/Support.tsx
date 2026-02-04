import { Entypo, Feather, MaterialIcons, FontAwesome,Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";

const Support = () => {
  return (
    <View className="mt-3">
      <Card style={{ backgroundColor: "#fff" }}>
        <Card.Content className="py-3  px-3">
          <Link href="/histories/EarningHistory" asChild>
            <TouchableOpacity>
              <View className="flex-row justify-between items-center pb-3 border-b border-gray-300">
                <View className="flex-row gap-2 items-center">
                  <View className="bg-primary size-10 items-center justify-center rounded-md">
                    <Entypo name="chat" size={18} color="black" />
                  </View>
                  <Text className="text-lg font-bold">Chat Support</Text>
                </View>
                <Feather name="arrow-right" size={22} color="black" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/histories/EarningHistory" asChild>
            <TouchableOpacity>
              <View className="flex-row justify-between items-center py-3 border-b border-gray-300">
                <View className="flex-row gap-2 items-center">
                  <View className="bg-primary size-10 items-center justify-center rounded-md">
                    <Ionicons name="call" size={18} color="black" />
                  </View>
                  <Text className="text-lg font-bold">Call Support</Text>
                </View>
                <Feather name="arrow-right" size={22} color="black" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/histories/WithdrawHistory" asChild>
            <TouchableOpacity>
              <View className="flex-row justify-between items-center pt-3">
                <View className="flex-row gap-2 items-center">
                  <View className="bg-primary size-10 items-center justify-center rounded-md">
                    <FontAwesome
                      name="video-camera"
                      size={20}
                      color="black"
                    />
                  </View>
                  <View>
                    <Text className="text-lg font-bold">Tutorials Videos</Text>
                  </View>
                </View>
                <Feather name="arrow-right" size={22} color="black" />
              </View>
            </TouchableOpacity>
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Support;
