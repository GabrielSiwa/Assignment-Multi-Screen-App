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

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: true }}>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
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

      {/* Profile (Library in YouTube) */}
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
