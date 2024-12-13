import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      {/* <View style={styles.header}>
        <Text style={styles.logo}>CLASSYY</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userText}>Hello, Suresh</Text>
          <Text style={styles.userText}>Address...</Text>
        </View>
      </View> */}

      {/* Search Bar */}
      {/* <View style={styles.searchBar}>
        <Text style={styles.searchText}>Search...</Text>
      </View> */}

      {/* Slider Component */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
      >
        <View style={styles.sliderCard}>
          <Text style={styles.sliderText}>New Collection</Text>
          <Image
            source={require("../../../assets/images/Logo")}
            style={styles.sliderImage}
          />
        </View>
        {/* Add more slider items */}
      </ScrollView>

      {/* Explore Section */}
      <View style={styles.exploreSection}>
        <TouchableOpacity style={styles.exploreCard}>
          <Text>Classy Exclusive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreCard}>
          <Text>All Categories</Text>
        </TouchableOpacity>
      </View>

      {/* Hot Campaigns */}
      <View style={styles.campaignSection}>
        <Text style={styles.sectionTitle}>Hot Campaigns</Text>
        <FlatList
          horizontal
          data={hotCampaignsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.campaignCard}>
              <Image source={item.image} style={styles.campaignImage} />
              <Text style={styles.campaignText}>{item.title}</Text>
              <Text style={styles.campaignPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Chance to Win Amazing Prizes */}
      <View style={styles.prizesSection}>
        <Text style={styles.sectionTitle}>Chance to Win Amazing Prizes!</Text>
        <View style={styles.prizesRow}>
          <TouchableOpacity style={styles.prizeCard}>
            <Text>Win iPhone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prizeCard}>
            <Text>Win Buds</Text>
          </TouchableOpacity>
          {/* Add more prize cards */}
        </View>
      </View>

      {/* Closing Soon Section */}
      <View style={styles.closingSoonSection}>
        <Text style={styles.sectionTitle}>Closing Soon</Text>
        <FlatList
          horizontal
          data={closingSoonData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.campaignCard}>
              <Image source={item.image} style={styles.campaignImage} />
              <Text style={styles.campaignText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>Winners Announced So Far</Text>
        {/* Footer content */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#FFA500",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  userInfo: {
    alignItems: "flex-end",
  },
  userText: {
    color: "#fff",
  },
  searchBar: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    margin: 10,
    borderRadius: 10,
  },
  searchText: {
    color: "#888",
  },
  sliderContainer: {
    marginVertical: 10,
  },
  sliderCard: {
    backgroundColor: "#E6E6FA",
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  sliderImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  sliderText: {
    fontSize: 16,
  },
  exploreSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  exploreCard: {
    backgroundColor: "#FFEFD5",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  campaignSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  campaignCard: {
    marginHorizontal: 10,
    backgroundColor: "#FFF0F5",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  campaignImage: {
    width: 100,
    height: 100,
  },
  campaignText: {
    marginTop: 5,
  },
  campaignPrice: {
    color: "green",
  },
  prizesSection: {
    marginVertical: 20,
  },
  prizesRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  prizeCard: {
    backgroundColor: "#FFFFE0",
    padding: 20,
    borderRadius: 10,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
});

const hotCampaignsData = [
  {
    id: "1",
    title: "Win iPhone",
    price: "234 Left of 1000",
    image: require("../../../assets/images/Logo"),
  },
  {
    id: "2",
    title: "Win Laptop",
    price: "55 Left of 200",
    image: require("../../../assets/images/Logo"),
  },
];

const closingSoonData = [
  {
    id: "1",
    title: "Classy Shoe",
    image: require("../../../assets/images/Logo"),
  },
  {
    id: "2",
    title: "Men Shoes",
    image: require("../../../assets/images/Logo"),
  },
];

export default HomePage;
