// import { Stack } from 'expo-router';

// export default function Layout() {
//     return <Stack screenOptions={{headerShown: false}} />

// }

import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true, // ✅ Show header
        headerTitle: () => (
          <Image
            source={require("../assets/images/yt_logo.png")} // ✅ YouTube Logo
            style={{ width: 120, height: 30, resizeMode: "contain" }}
          />
        ),
        headerStyle: { backgroundColor: "white" }, // ✅ Light mode header
        headerShadowVisible: false, // ✅ Remove bottom shadow for clean look
        headerRight: () => (
          <View style={{ flexDirection: "row", gap: 15, marginRight: 15 }}>
            {/* Cast Icon */}
            <TouchableOpacity>
              <Ionicons name="tv-outline" size={24} color="black" />
            </TouchableOpacity>

            {/* Notifications Icon (With Badge) */}
            <TouchableOpacity>
              <View style={{ position: "relative" }}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
                <View
                  style={{
                    position: "absolute",
                    top: -2,
                    right: -2,
                    backgroundColor: "red",
                    borderRadius: 10,
                    width: 10,
                    height: 10,
                  }}
                />
              </View>
            </TouchableOpacity>

            {/* Search Icon */}
            <TouchableOpacity>
              <Ionicons name="search-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
      <StatusBar style="auto" />
    </Stack>
  );
}
