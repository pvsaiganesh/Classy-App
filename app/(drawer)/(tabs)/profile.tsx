import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { AppContext } from "../../utils/AppContext";

const Tab = () => {
  const { setHeader } = useContext(AppContext);
  // useEffect(() => {
  //   setHeader(false);
  //   () => {
  //     setHeader(true);
  //   };
  // }, []);
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          {/* Profile Header */}
          <View style={styles.header}>
            <Image
              source={require("../../../assets/images/profile-background.png")}
              style={styles.backgroundImage}
            />
            <View style={styles.profileWrapper}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }} // Replace with your profile image URL
                style={styles.profileImage}
              />
            </View>
          </View>
          <View>
            <Text style={styles.profileName}>Manish Kumar</Text>
          </View>

          {/* Account Options */}
          <View style={styles.containerSection}>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => {
                router.push("../../(profile)/myaccount");
              }}
            >
              <View style={styles.rowContent}>
                <Ionicons name="person-outline" style={styles.icon} />
                <View>
                  <Text style={styles.optionTitle}>My Account</Text>
                  <Text style={styles.optionSubtitle}>
                    Make changes to your account
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                style={styles.forwardIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <View style={styles.rowContent}>
                <Ionicons name="lock-closed-outline" style={styles.icon} />
                <View>
                  <Text style={styles.optionTitle}>Change Password</Text>
                  <Text style={styles.optionSubtitle}>
                    Manage your saved account
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                style={styles.forwardIcon}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.title}>More</Text>
          </View>

          {/* More Options */}
          <View style={styles.containerSection}>
            <TouchableOpacity style={styles.optionRow}>
              <View style={styles.rowContent}>
                <Ionicons name="headset-outline" style={styles.icon} />
                <View>
                  <Text style={styles.optionTitle}>Help & Support</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                style={styles.forwardIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <View style={styles.rowContent}>
                <Ionicons
                  name="information-circle-outline"
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.optionTitle}>About App</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                style={styles.forwardIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <View style={styles.rowContent}>
                <Ionicons name="log-out-outline" style={styles.icon} />
                <View>
                  <Text style={styles.optionTitle}>Log out</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                style={styles.forwardIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Legal Options */}
          <View style={styles.section}>
            <TouchableOpacity style={styles.optionRow}>
              <View style={styles.rowContent}>
                <Ionicons name="document-text-outline" style={styles.icon} />
                <View>
                  <Text style={styles.optionTitle}>Privacy Policy</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                style={styles.forwardIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <View style={styles.rowContent}>
                <Ionicons name="document-outline" style={styles.icon} />
                <View>
                  <Text style={styles.optionTitle}>User Agreement</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                style={styles.forwardIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get("window").width,
    height: 180,
    resizeMode: "cover",
    borderBottomLeftRadius: 20, // Add this for bottom-left corner rounding
    borderBottomRightRadius: 20, // Add this for bottom-right corner rounding
    overflow: "hidden", // Ensures the rounded corners work properly
  },
  profileWrapper: {
    alignItems: "center",
    position: "absolute",
    top: 100, // Move profile image to the border of the background image
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 3,

    borderColor: "#FFF",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 30,
    textAlign: "center",
  },
  containerSection: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
  },
  section: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 16,
    position: "relative",
    top: 20,
    color: "#444",
  },
  icon: {
    backgroundColor: "#FFF4E5", // Light orange background
    padding: 10,
    borderRadius: 25, // Circular background
    color: "#E18A07", // Icon color
    marginRight: 10,
    fontSize: 24, // Adjust icon size
  },
  forwardIcon: {
    color: "#E18A07", // Forward arrow color
    fontSize: 20,
  },
  optionSubtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 2, // Slight margin for spacing below the title
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Tab;
