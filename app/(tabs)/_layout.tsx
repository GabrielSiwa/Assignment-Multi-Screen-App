import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import React from "react";

console.log("✅ Tab Navigation is loading!");

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            // <Ionicons name="home" size={size} color={color} />
            <Image
              source={require("../../assets/images/home.png")}
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="subscription"
        options={{
          title: "Subscriptions",
          tabBarIcon: ({ color, size }) => (
            // <View style={{ position: "relative" }}>
            //   {/* Box Shape */}
            //   <Ionicons name="folder-open-outline" size={size} color={color} />
            //   {/* Play Icon Overlay */}
            //   <Ionicons
            //     name="play-outline"
            //     size={size / 2}
            //     color={color}
            //     style={{
            //       position: "absolute",
            //       top: size / 4,
            //       left: size / 4,
            //     }}
            //   />
            // </View>
            <Image
              source={require("../../assets/images/subscription.png")}
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
              }}
            />
          ),
        }}
      />

      {/* Library Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "You",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/images/profile.jpg")}
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
