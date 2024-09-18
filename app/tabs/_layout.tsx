import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import BubbleTabBar from "../../component/tab";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      tabBar={(props) => (
        <BubbleTabBar
          {...props}
          activeBackgroundColor={"#EEE6FF"}
          activeIconColor={"#AA5CFF"}
        />
      )}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="shorts" options={{ title: "Shorts" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default _layout;


