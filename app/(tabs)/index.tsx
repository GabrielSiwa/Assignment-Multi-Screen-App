import React, { useState } from "react";
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// filters
const filters = [
  "All",
  "New to You",
  "Music",
  "Mixes",
  "Playlists",
  "Gaming",
  "News",
  "Sports",
];

// videos
const videos = [
  {
    id: "1",
    title: "React Native Tutorial for Beginners",
    channel: "Programming with Mosh",
    views: "3.3M views",
    time: "4 years ago",
    thumbnail:
      "https://blixtdev.com/content/images/2023/01/1-4bIsUtmfOQD45_2dt_Of5Q.png",
    channelImage:
      "https://www.atakinteractive.com/hubfs/react-native%20%281%29.png",
  },
  {
    id: "2",
    title: "TypeScrit - The Basics",
    channel: "FIreship",
    views: "1.5M views",
    time: "6 years ago",
    thumbnail:
      "https://www.rabitsolutions.com/wp-content/uploads/2023/09/typescript-cover-cropped-1300x600.jpeg",
    channelImage:
      "https://file-uploads.teachablecdn.com/4c16c4adca0d401bb4295cfbda05ecf1/e1c0e6c521414dbfae2fe1ca931c2f8f",
  },
  {
    id: "3",
    title: "Learn TypeScript - Tutorial for Beginners",
    channel: "freeCodeCamp",
    views: "800K views",
    time: "8 months ago",
    thumbnail:
      "https://www.orientsoftware.com/Themes/Content/Images/blog/2023-11-13/typescript-introduction.jpg",
    channelImage:
      "https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "4",
    title: "JavaScript Full Course for Beginners",
    channel: "Bro Code",
    views: "3M views",
    time: "1 year ago",
    thumbnail:
      "https://cdn-media-0.freecodecamp.org/size/w2000/2021/06/javascriptfull.png",
    channelImage:
      "https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s900-c-k-c0x00ffffff-no-rj",
  },
];

// watched videos
const continueWatchingVideos = [
  {
    id: "5",
    title: "Learn useState In 15 Minutes",
    channel: "Web Dev Simplified",
    views: "500K views",
    time: "1 year ago",
    thumbnail:
      "https://i.ytimg.com/vi/SpDG283b4bw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBha2436ltfyaoGISWJgRkl2vuLOQ",
    channelImage:
      "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s900-c-k-c0x00ffffff-no-rj",
    progress: 0.2,
  },
  {
    id: "6",
    title: "Learn React Hooks: useState",
    channel: "DevTips",
    views: "300K views",
    time: "5 months ago",
    thumbnail: "https://i.ytimg.com/vi/V9i3cGD-mts/hqdefault.jpg",
    channelImage:
      "https://yt3.googleusercontent.com/FmWYlK7EHIHb1FBbEnf3HzjBqHPKje-kI_A88-qvLiRmhT570CAWCFk4aFfxN1Li472nERL_vw=s900-c-k-c0x00ffffff-no-rj",
    progress: 0.8,
  },
  {
    id: "7",
    title: "TypeScript Tutorial for Beginners",
    channel: "AfterAcademy",
    views: "300K views",
    time: "2 years ago",
    thumbnail:
      "https://afteracademy.com/images/banner-typescript-tutorial-for-beginners-0a1dc3c8b3858117.jpg",
    channelImage:
      "https://www.atakinteractive.com/hubfs/react-native%20%281%29.png",
    progress: 0.7,
  },
  {
    id: "8",
    title: " React Hooks Explained",
    channel: "DevTips",
    views: "300K views",
    time: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/LOH1l-MP_9k/maxresdefault.jpg",
    channelImage:
      "https://miro.medium.com/v2/resize:fit:1200/0*lw3okrHvGKRrZJ9F.jpg",
    progress: 0.5,
  },
];

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const reorderedVideos = [
    videos[0],
    { id: "continue_watching" },
    ...videos.slice(1),
  ];

  return (
    <View style={styles.container}>
      {/* Filter Navigation */}
      <FlatList
        data={filters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.filterContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === item && styles.activeFilter,
            ]}
            onPress={() => setSelectedFilter(item)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === item && styles.activeFilterText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Main Video List */}
      <FlatList
        data={reorderedVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.id === "continue_watching") {
            return (
              // Continue Watching
              <View>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Continue Watching</Text>
                </View>
                <FlatList
                  data={continueWatchingVideos}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.continueWatchingContainer}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.continueWatchingContainer}>
                      <Image
                        source={{ uri: item.thumbnail }}
                        style={styles.continueThumbnail}
                      />
                      {/* Progress Bar */}
                      <View style={styles.progressBarContainer}>
                        <View
                          style={[
                            styles.progressBar,
                            { width: `${item.progress * 100}%` },
                          ]}
                        />
                      </View>
                      <View style={styles.videoDetails}>
                        <Image
                          source={{ uri: item.channelImage }}
                          style={styles.channelImage}
                        />
                        <View style={styles.textContainer}>
                          <Text style={styles.videoTitle}>{item.title}</Text>
                          <Text style={styles.videoInfo}>
                            {item.channel} • {item.views} • {item.time}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            );
          }

          if ("thumbnail" in item) {
            return (
              // videos continuation
              <TouchableOpacity style={styles.videoContainer}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.thumbnail}
                />
                <View style={styles.videoDetails}>
                  <Image
                    source={{ uri: item.channelImage }}
                    style={styles.channelImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.videoTitle}>{item.title}</Text>
                    <Text style={styles.videoInfo}>
                      {item.channel} • {item.views} • {item.time}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }

          return null;
        }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  logo: { fontSize: 22, fontWeight: "bold", color: "red" },
  headerIcons: { flexDirection: "row" },
  icon: { marginHorizontal: 10 },

  // Filter Navigation
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  filterButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  filterText: { 
    fontSize: 14, 
    color: "#000", 
    fontWeight: "400",  
    lineHeight: 18, 
    paddingBottom: 2, 
    textAlignVertical: "center", 
  },
  activeFilter: { backgroundColor: "#000" },
  activeFilterText: { color: "#fff", fontWeight: "700" },

  // Section Header
  sectionHeader: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },

  // Continue Watching styles
  continueWatchingContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  continueWatchingItem: {
    width: 160,
    marginRight: 10,
  },
  continueThumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    resizeMode: "cover",
  },
  progressBarContainer: {
    height: 3,
    backgroundColor: "#ddd",
    borderRadius: 2,
    marginTop: 2,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "red",
    borderRadius: 2,
  },

  // Video List styles
  videoContainer: { marginBottom: 15 },
  thumbnail: { width: "100%", height: 200, resizeMode: "cover" },
  videoDetails: { flexDirection: "row", padding: 10 },
  channelImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  textContainer: { flexShrink: 1 },
  videoTitle: { fontSize: 16, fontWeight: "500" },
  videoInfo: { color: "gray", fontSize: 14 },
});
