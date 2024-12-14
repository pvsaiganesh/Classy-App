import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchHistory, setSearchHistory] = useState([
    "Socks",
    "Red Dress",
    "Sunglasses",
    "Mustard Pants",
    "Skirt",
  ]);
  const [recommendations, setRecommendations] = useState([
    "Skirt",
    "Accessories",
    "Black T-Shirt",
    "Jeans",
    "White Shoes",
  ]);
  const [discoverItems, setDiscoverItems] = useState([
    { id: "1", title: "Classy Shoe", price: "₹230", remaining: 234 },
    { id: "2", title: "Stylish Bag", price: "₹540", remaining: 120 },
  ]);

  // Handle search input
  const handleSearch = () => {
    if (searchText.trim() !== "" && !searchHistory.includes(searchText)) {
      setSearchHistory([searchText, ...searchHistory]);
    }
    setSearchText("");
  };

  // Clear search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
          <Ionicons
            name="options-outline"
            size={20}
            color="#000"
            style={styles.filterIcon}
          />
        </View>

        {/* Search History */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Search History</Text>
            <TouchableOpacity onPress={clearSearchHistory}>
              <Ionicons name="trash-outline" size={18} color="#E18A07" />
            </TouchableOpacity>
          </View>
          <View style={styles.tagsContainer}>
            {searchHistory.map((item, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recommendations */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <View style={styles.tagsContainer}>
            {recommendations.map((item, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Discover */}
        {/* <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Discover</Text>
        <FlatList
          data={discoverItems}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.discoverCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardBadge}>WIN iPHONE 15</Text>
                <Ionicons name="heart-outline" size={18} color="red" />
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
              <Text style={styles.cardRemaining}>{item.remaining} Left of 1000</Text>
            </View>
          )}
        />
      </View> */}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
    color: "#777",
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterIcon: {
    marginLeft: 5,
  },
  sectionContainer: {
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#F1F1F1",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 5,
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
  discoverCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    elevation: 2,
    width: Dimensions.get("window").width / 2.5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBadge: {
    backgroundColor: "#FFD700",
    fontSize: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 12,
    color: "green",
  },
  cardRemaining: {
    fontSize: 12,
    color: "red",
  },
});

export default SearchScreen;
