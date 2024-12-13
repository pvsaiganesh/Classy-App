import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons (e.g., back arrow, cart)

const SupportScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View> */}

      {/* Content */}
      <View style={styles.card}>
        <Image
          source={require("../../../assets/images/customer.png")} // Replace with your image
          style={styles.image}
        />
        <Text style={styles.message}>
          If you have any concerns, please contact us using the information
          below:
        </Text>
        <TouchableOpacity>
          <Text style={styles.email}>Support@Classyapp.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#FFF",
    elevation: 2,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cartButton: {
    padding: 5,
  },
  card: {
    marginHorizontal: 20,
    marginTop: 40,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    elevation: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
    lineHeight: 24,
  },
  email: {
    fontSize: 16,
    color: "#D77C19",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SupportScreen;
