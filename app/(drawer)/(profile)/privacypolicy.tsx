import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Privacy & Policy</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View> */}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Privacy & Policy</Text>
          <Text style={styles.content}>
            With every product you buy, you don’t just shop—you enter an
            exciting campaign! With every product you buy, you don’t just
            shop—you enter an exciting campaign!
          </Text>
          <Text style={styles.content}>
            With every product you buy, you don’t just shop—you enter an
            exciting campaign! With every product you buy, you don’t just
            shop—you enter an exciting campaign!
          </Text>
          <Text style={styles.listItem}>
            • With every product you buy, you don’t just shop—you enter an
            exciting campaign!
          </Text>
          <Text style={styles.listItem}>
            • With every product you buy, you don’t just shop—you enter an
            exciting campaign!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  contentContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginTop: 40,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  content: {
    fontSize: 16,
    color: "#555",
    lineHeight: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: "#555",
    lineHeight: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default PrivacyPolicy;
