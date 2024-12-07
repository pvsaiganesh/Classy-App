import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import theme from "../../theme";
import Foundation from "@expo/vector-icons/Foundation";
import Octicons from "@expo/vector-icons/Octicons";
import {
  IconButton,
  TextInput,
  useTheme,
  Checkbox,
  Text,
} from "react-native-paper";
import Winner from "../../../assets/images/Winner";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primaryContainer, // Active tab icon/text color
        tabBarInactiveTintColor: theme.colors.grey, // Inactive tab icon/text color
        tabBarStyle: {
          backgroundColor: theme.colors.onPrimary, // Tab bar background color
          height: 80, // Adjust height if needed
        },
        tabBarLabelStyle: {
          fontSize: 10, // Customize text size
        },
        // tabBarIconStyle: {
        //   marginTop: 5, // Adjust icon position
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Octicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="draw"
        options={{
          title: "Draw",
          tabBarIcon: ({ color }) => <Winner />,
        }}
      />
      <Tabs.Screen
        name="coupons"
        options={{
          title: "Coupons",
          tabBarIcon: ({ color }) => (
            <IconButton
              icon="arrow-right"
              onPressIn={() => {
                router.push("/onboarding");
              }}
              iconColor={color}
              mode="contained"
              size={36}
              onPress={() => console.log("Pressed")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconButton
              icon="arrow-right"
              onPressIn={() => {
                router.push("/onboarding");
              }}
              iconColor={color}
              mode="contained"
              size={36}
              onPress={() => console.log("Pressed")}
            />
          ),
        }}
      />
    </Tabs>
  );
}
