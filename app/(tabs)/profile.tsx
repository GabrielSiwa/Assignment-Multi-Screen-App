import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Profile Data
const profileData = {
  username: "George",
  userHandle: "@georgecutie",
  profilePic: require("../../assets/images/profile.jpg"), // ✅ Local profile image
};

// History Videos
const historyVideos = [
  {
    id: "1",
    title: "Mastering Mobile Application Development - Course Overview",
    thumbnail: require("../../assets/images/history1.png"), // ✅ Local image
  },
  {
    id: "2",
    title: "iPhone Airpods Max Unboxing & Review",
    thumbnail: require("../../assets/images/history2.png"),
  },
  {
    id: "3",
    title: "Tailwind Crash Course | Project From Scratch",
    thumbnail: require("../../assets/images/history3.png"),
  },
];

// Playlists
const playlists = [
  {
    id: "1",
    title: "Liked Videos",
    thumbnail: require("../../assets/images/react_native.png"),
    videoCount: 4, //
  },
  {
    id: "2",
    title: "Watch Later",
    thumbnail: require("../../assets/images/react_navigation.png"),
  },
  {
    id: "3",
    title: "Liked videos",
    thumbnail: require("../../assets/images/react_navigation.png"),
    videoCount: 20,
  },
];

// Additional Sections (With Proper Dividers & Visibility Fix)
const additionalSections = [
  { id: "5", title: "Your Videos", icon: "play-outline" },
  { id: "divider1", isDivider: true }, // ✅ Divider after "Your Videos"
  { id: "6", title: "Your movies & TV", icon: "film-outline" },
  { id: "7", title: "Get YouTube Premium", icon: "logo-youtube" },
  { id: "divider2", isDivider: true }, // ✅ Divider after "Get YouTube Premium"
  { id: "8", title: "Time watched", icon: "time-outline" },
  { id: "9", title: "Help & feedback", icon: "help-circle-outline" },
];

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileHeader}>
        <Image source={profileData.profilePic} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{profileData.username}</Text>
          <Text style={styles.profileHandle}>
            {profileData.userHandle} •{" "}
            <Text style={styles.viewChannel}>View channel</Text>
          </Text>
        </View>
      </View>

      {/* Quick Actions (Fixed Alignment) */}
      <View style={styles.quickActionsContainer}>
        {[
          { title: "Switch account", icon: "person-outline" },
          { title: "Google Account", icon: "logo-google" },
          { title: "Turn on Incognito", icon: "eye-outline" },
        ].map((action, index) => (
          <TouchableOpacity key={index} style={styles.quickButton}>
            <Ionicons name={action.icon} size={20} color="black" />
            <Text style={styles.quickText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Divider */}
      {/* <View style={styles.divider} /> */}

      {/* History Section */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionHeader}>History</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={historyVideos} // or playlists
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.videoItem}>
              <Image source={item.thumbnail} style={styles.fixedImage} />
              <View style={styles.titleContainer}>
                <Text style={styles.videoTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <TouchableOpacity>
                  <Ionicons name="ellipsis-vertical" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Divider */}
      {/* <View style={styles.divider} /> */}

      {/* Playlists Section */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionHeader}>Playlists</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={playlists}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.videoItem}>
              <Image source={item.thumbnail} style={styles.fixedImage} />
              <View style={styles.titleContainer}>
                <Text style={styles.videoTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <TouchableOpacity>
                  <Ionicons name="ellipsis-vertical" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Divider */}
      {/* <View style={styles.divider} /> */}

      {/* Additional Sections (Fixed Visibility) */}
      <View style={styles.additionalSections}>
        {additionalSections.map((item) =>
          item.isDivider ? (
            <View key={item.id} style={styles.divider} />
          ) : (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Ionicons name={item.icon} size={24} color="black" />
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  profileHandle: {
    fontSize: 14,
    color: "gray",
  },
  quickButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
  },
  quickText: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
    marginLeft: 5,
  },
  viewChannel: {
    color: "#1E90FF",
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#d3d3d3",
    marginVertical: 5,
  },
  additionalSections: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: "black",
    marginLeft: 15,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  viewAllText: {
    color: "#1E90FF",
  },
  listContainer: {
    paddingLeft: 15,
    marginBottom: 10,
  },
  videoItem: {
    width: 150,
    marginRight: 10,
  },
  fixedImage: {
    width: 140,
    height: 90,
    borderRadius: 8,
    resizeMode: "cover",
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    width: 140, // Ensure it fits inside the card
  },
});
