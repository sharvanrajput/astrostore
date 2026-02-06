import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

interface Props {
  name: any;
  color: string;
}

const TabIcon = ({ name, color }: Props) => (
  <Ionicons name={name} size={24} color={color} />
);

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FACC15",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#FACC15" : "gray"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Earning"
        options={{
          title: "Earning",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "cash" : "cash-outline"}
              color={focused ? "#FACC15" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Performance"
        options={{
          title: "Performance",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={focused ? "#FACC15" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={"more" as any}
              size={25}
              color={focused ? "#FACC15" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
