"use client"

import React from "react"
import { useState } from "react"
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"

// Navigation tabs
const tabs = ["All", "Today", "Videos", "Shorts", "Live", "Posts", "Community"]

// Channel data
const channels = [
  {
    id: "1",
    name: "Nine Degre...",
    image: "https://yt3.googleusercontent.com/V8L9WnawBIsPMPFJInmUOITWhnSf6gAR_bDF1NJrWnP719R_H6ZHhSRIsezckjmqrZ13gog14Kw=s160-c-k-c0x00ffffff-no-rj?height=80&width=80",
    isActive: true,
  },
  {
    id: "2",
    name: "dotnet",
    image: "https://yt3.googleusercontent.com/tKuZOTz-NjB9KAA80zJIx0SvGfL3_t9puB4AyObSNzI9LBx9m5knlsbFm7O2Io0ap_KzGJmU4w=s160-c-k-c0x00ffffff-no-rj?height=80&width=80",
    isActive: true,
  },
  {
    id: "3",
    name: "Tech with Tim",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_k15oXl74WcnpdL-uVBv6IHBgAfXEEnpUiS-IoEyV1auyY=s160-c-k-c0x00ffffff-no-rj?height=80&width=80",
    isActive: false,
  },
  {
    id: "4",
    name: "CTV News",
    image: "https://yt3.googleusercontent.com/F1QF1sUtJvIrLSb4VOuDBWxeizO_WupZOf_dV9LLn47rJDpNAl8irkfBwVOnHvnuLgLt-xjVGks=s160-c-k-c0x00ffffff-no-rj?height=80&width=80",
    isActive: true,
  },
  {
    id: "5",
    name: "BINI Official",
    image: "https://yt3.googleusercontent.com/3623-_nSNq-iJuw4de1Uhmb7b6gboR2aXYMWIVe0jHeVR7FtckfkBhhC9t5TeJfuc_-iIhHT3Q=s160-c-k-c0x00ffffff-no-rj?height=80&width=80",
    isActive: false,
  },
]

// Videos data
const videos = [
  {
    id: "1",
    title: "Welcome to .NET 9 - .NET Conf 2024 Keynote",
    channel: "dotnet",
    views: "820 views",
    time: " 9 minutes ago",
    thumbnail: "https://i.ytimg.com/vi/ikSNL-lxolc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA6IXO5ZatSVdq4D4JcOb1_hmvTfw?height=200&width=400",
    channelImage: "https://yt3.googleusercontent.com/tKuZOTz-NjB9KAA80zJIx0SvGfL3_t9puB4AyObSNzI9LBx9m5knlsbFm7O2Io0ap_KzGJmU4w=s160-c-k-c0x00ffffff-no-rj?height=48&width=48",
    duration: "1:01:30",
  },
  {
    id: "2",
    title: 'My 5 "Clean" Code Principles (Start These Now)',
    channel: "Tech With Tim",
    views: "1.4K views",
    time: "2 hours ago",
    thumbnail: "https://i.ytimg.com/vi/kfyo-N-xAwE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA8z6eL4xRkDW6on1-7JGOdR-hYcg?height=200&width=400",
    channelImage: "https://yt3.googleusercontent.com/ytc/AIdro_k15oXl74WcnpdL-uVBv6IHBgAfXEEnpUiS-IoEyV1auyY=s160-c-k-c0x00ffffff-no-rj?height=48&width=48",
    duration: "16:18",
  },
  {
    id: "3",
    title: 'Claude 3.7 goes hard for programmers…',
    channel: "Fireship",
    views: "1.7M views",
    time: "2 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/x2WtHZciC74/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD-hKJcRxoAAsEdrnMS0WNpDGZ4Wg?height=200&width=400",
    channelImage: "https://yt3.googleusercontent.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s160-c-k-c0x00ffffff-no-rj?height=48&width=48",
    duration: "5:48",
  },
]


const SubscriptionScreen = () => {
  const [selectedTab, setSelectedTab] = useState("All")

  const renderChannels = () => (
    <FlatList
      data={channels}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.channelsContainer}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.channelItem}>
          <View style={styles.channelImageContainer}>
            <Image source={{ uri: item.image }} style={styles.channelImage} />
            {item.isActive && <View style={styles.activeIndicator} />}
          </View>
          <Text style={styles.channelName} numberOfLines={1}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  )

  const renderTabs = () => (
    <FlatList
      data={tabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.tabsContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === item && styles.activeTabButton]}
          onPress={() => setSelectedTab(item)}
        >
          <Text style={[styles.tabText, selectedTab === item && styles.activeTabText]}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  )

  const renderVideoItem = ({ item }: { item: typeof videos[0] }) => (
    <TouchableOpacity style={styles.videoContainer}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
      </View>
      <View style={styles.videoInfoContainer}>
        <Image source={{ uri: item.channelImage }} style={styles.videoChannelImage} />
        <View style={styles.videoDetails}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.videoMeta}>
            {item.channel} · {item.views} · {item.time}
          </Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-vertical" size={16} color="#666" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderVideoItem}
        ListHeaderComponent={
          <>
            {renderChannels()}
            {renderTabs()}
          </>
        }
        ListFooterComponent={<View style={{ height: 60 }} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 20,
    position: "relative",
  },
  // Channels styles
  channelsContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  channelItem: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 70,
  },
  channelImageContainer: {
    position: "relative",
    marginBottom: 6,
  },
  channelImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#1a73e8",
    borderWidth: 2,
    borderColor: "#fff",
  },
  channelName: {
    fontSize: 12,
    textAlign: "center",
    width: "100%",
  },

  // Tabs styles
  tabsContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  tabText: {
    fontSize: 14,
    color: "#000",
  },
  activeTabButton: {
    backgroundColor: "#000",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "500",
  },

  // Video styles
  videoContainer: {
    marginBottom: 16,
  },
  thumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  durationContainer: {
    position: "absolute",
    right: 8,
    bottom: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  videoInfoContainer: {
    flexDirection: "row",
    padding: 12,
  },
  videoChannelImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  videoDetails: {
    flex: 1,
  },
  videoTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 4,
    lineHeight: 20,
  },
  videoMeta: {
    fontSize: 13,
    color: "#606060",
  },
  moreButton: {
    padding: 4,
  },
})

export default SubscriptionScreen


