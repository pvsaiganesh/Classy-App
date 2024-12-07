import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer, Text } from "react-native-paper";

export default function CustomDrawer({
  activeScreen,
  setActiveScreen,
  children,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.drawer}>
        <Text style={styles.title}>My App</Text>
        <Drawer.Section>
          <Drawer.Item
            label="Home"
            icon="home"
            active={activeScreen === "Home"}
            onPress={() => setActiveScreen("Home")}
          />
          <Drawer.Item
            label="Profile"
            icon="account"
            active={activeScreen === "Profile"}
            onPress={() => setActiveScreen("Profile")}
          />
          <Drawer.Item
            label="Settings"
            icon="cog"
            active={activeScreen === "Settings"}
            onPress={() => setActiveScreen("Settings")}
          />
        </Drawer.Section>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  drawer: { width: 250, backgroundColor: "#f4f4f4", padding: 10 },
  content: { flex: 1 },
  title: { fontSize: 20, marginBottom: 20, fontWeight: "bold" },
});
