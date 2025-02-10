import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarIconStyle: {
          flex: 1,
          top: 5,
          width: 70,
          height: 70,
          backgroundColor: "transparent",
        },
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          alignItems: "center",
          height: 70,
          backgroundColor: Colors[colorScheme ?? "light"].tabBackground,
          borderTopWidth: 2,
          borderTopColor: Colors[colorScheme ?? "light"].tabIconSelected,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={40} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="addTask"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={70} name="add-circle-outline" color={color} />
          ),
          tabBarItemStyle: {
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            bottom: 20,
            left: "50%",
            transform: [{ translateX: -35 }],
            borderRadius: 100,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: Colors[colorScheme ?? "light"].tabBackground,
          },
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menú",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={40} name="menubar.rectangle" color={color} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
