import { Tabs } from "expo-router";
const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={ {title: "Home"} } />
        <Tabs.Screen name="subscription" option={ {title: "Subscription"} } />
        <Tabs.Screen name="profile" option={ {title: "Profile"} } />
    </Tabs>
  )
}

export default Layout