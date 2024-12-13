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
// import Winner from "../../../assets/images/Winner";
// import Coupon from "../../../assets/images/Coupon";
// import ProfileIcon from "../../../assets/images/Profile";
// import SearchIcon from "../../../assets/images/Search";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "../../../components/Header";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => {
          return <Header />;
        },
        tabBarActiveTintColor: theme.colors.primaryContainer, // Active tab icon/text color
        tabBarInactiveTintColor: theme.colors.grey, // Inactive tab icon/text color
        tabBarStyle: {
          backgroundColor: theme.colors.onPrimary, // Tab bar background color
          paddingTop: 10,

          height: 80, // Adjust height if needed
        },
        tabBarLabelStyle: {
          paddingTop: 10,
          paddingBottom: 10,
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
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="draw"
        tabBarButton={(props) => (
          <TouchableOpacity style={{ paddingTop: 30 }} {...props} />
        )}
        options={{
          title: "Draw",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="trophy" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="coupons"
        options={{
          title: "Coupons",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          headerBackButtonMenuEnabled: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
