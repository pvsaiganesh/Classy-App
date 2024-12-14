import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { theme } from "../app/theme";
import Logo from "../assets/images/Logo";
import { Avatar, Searchbar, Text } from "react-native-paper";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const Col = ({ numRows = 4, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};
const { width, height } = Dimensions.get("window");
const Row = ({ children, style = {} }) => (
  <View style={{ ...styles.row, ...style }}>{children}</View>
);
const styles = StyleSheet.create({
  // app: {
  //   flex: 1,
  //   justifyContent: "flex-start",
  //   alignItems: "flex-end",
  //   textAlign: "center",
  //   paddingTop: 50,
  //   margin: 30,
  // },
  skip: {
    flexDirection: "row",
    paddingEnd: 30,
    fontSize: 30,
    justifyContent: "flex-end",
    textAlign: "right",
  },
  image: {
    paddingTop: 50,
    paddingStart: 30,
    flex: 1,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  container: {
    flex: 1,
    margin: 30,
  },
  logoContainer: {
    width: width,
    height: height / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textBlack: {
    fontSize: 28,
    textAlign: "center",
    alignItems: "center",
  },
  textOrange: { color: theme.colors.primaryContainer, fontSize: 28 },
  bgOrange: {
    backgroundColor: theme.colors.primaryContainer,
    color: theme.colors.secondary,
  },
  desc: { fontSize: 16, textAlign: "center" },
  button: { textAlign: "center", alignSelf: "stretch" },
  input: { marginBottom: 20 },
  app: {
    // flex: 1,
    flex: 8,
    padding: 30,
    gap: 10,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  "1col": {
    flex: 1,
  },
  "2col": {
    flex: 2,
  },
  "3col": {
    flex: 3,
  },
  "5col": {
    flex: 5,
  },
  "6col": {
    flex: 6,
  },
  "7col": {
    flex: 7,
  },
  "8col": {
    flex: 8,
  },
});

const Header = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      <Row
        style={{
          paddingTop: 50,
          padding: 10,
          backgroundColor: theme.colors.primaryContainer,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch", // Optional, remove if not needed
        }}
      >
        <Col numRows={2}>
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Ionicons name="apps" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Col>

        <Col numRows={4}>
          <View
            style={{
              padding: 5,
              flex: 1,
              direction: "row",
              alignSelf: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: 45,
              backgroundColor: theme.colors.onPrimary,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                router.push("/(drawer)/(tabs)");
              }}
            >
              <Logo />
            </TouchableOpacity>
          </View>
        </Col>
        <Col numRows={1}>
          <View style={{ paddingStart: 10 }}>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome name="bell" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Col>
        <Col numRows={1}>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: theme.colors.primaryContainer,
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Col numRows={4}>
          <View style={{ padding: 10, paddingTop: 10 }}>
            <Avatar.Image
              size={34}
              source={require("../assets/images/avatar.png")}
              style={{ marginBottom: 0 }}
            />
          </View>
        </Col>
        <Col numRows={2}>
          <Text
            style={{
              color: theme.colors.onPrimary,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Hello Suresh...
          </Text>
          <Text
            style={{
              color: theme.colors.onPrimary,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Let's Shop and Win
          </Text>
        </Col>
        <Col numRows={4}>
          <Row>
            <FontAwesome6 name="location-dot" size={24} color="white" />
            <View
              style={{
                backgroundColor: theme.colors.primaryContainer,
                padding: 10,
                textAlign: "end",
              }}
            >
              <Text
                style={{
                  color: theme.colors.onPrimary,
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                Address
              </Text>
            </View>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          padding: 10,
          paddingTop: 0,
          paddingBottom: 20,

          backgroundColor: theme.colors.primaryContainer,
        }}
      >
        <Col numRows={8}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;
