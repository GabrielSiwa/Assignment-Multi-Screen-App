// import { Tabs } from "expo-router";
// const Layout = () => {
//   return (
//     <Tabs>
//         <Tabs.Screen name="index" options={ {title: "Home"} } />
//         <Tabs.Screen name="subscription" option={ {title: "Subscription"} } />
//         <Tabs.Screen name="profile" option={ {title: "Profile"} } />
//     </Tabs>
//   )
// }

// export default Layout

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

console.log("✅ Tab Navigation is loading!");

const Layout = () => {
  // return (
  //   <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: true }}>
  //     {/* Home Tab */}
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: "Home",
  //         tabBarIcon: (props) => <Ionicons name="home-outline" {...props} />,
  //       }}
  //     />

  //     {/* Subscriptions Tab */}
  //     <Tabs.Screen
  //       name="subscription"
  //       options={{
  //         title: "Subscriptions",
  //         tabBarIcon: (props) => (
  //           <Ionicons name="videocam-outline" {...props} />
  //         ),
  //       }}
  //     />

  //     {/* Profile Tab */}
  //     <Tabs.Screen
  //       name="profile"
  //       options={{
  //         title: "You",
  //         tabBarIcon: (props) => <Ionicons name="albums-outline" {...props} />,
  //       }}
  //     />
  //   </Tabs>
  // );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true, // Show labels under icons
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Shorts Tab */}
      <Tabs.Screen
        name="shorts"
        options={{
          title: "Shorts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-circle" size={size} color={color} />
          ),
        }}
      />

      {/* Subscriptions Tab */}
      <Tabs.Screen
        name="subscription"
        options={{
          title: "Subscriptions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Library Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
