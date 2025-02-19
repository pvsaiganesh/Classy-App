import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  StatusBar,
} from "react-native";
import theme from "../app/theme";
import { Avatar, Button, Drawer, IconButton } from "react-native-paper";
import Winner from "../assets/images/Winner";
import Bell from "../assets/images/Bell";
import Cart from "../assets/images/Cart";
import Coupon from "../assets/images/Coupon";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Col = ({ numRows = 4, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

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

    padding: 20,
    gap: 10,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    gap: 50,
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
const Menu = ({ navigation }) => {
  const [active, setActive] = React.useState("");

  return (
    <ScrollView styles={styles.app}>
      <Row>
        <Col numRows={8}>
          <View
            style={{
              backgroundColor: theme.colors.primaryContainer,
              paddingTop: 80,

              paddingStart: 30,
              paddingEnd: 30,
              paddingBottom: 30,

              textAlign: "start",
            }}
          >
            <View style={{ alignSelf: "start" }}>
              <Avatar.Image
                size={84}
                source={require("../assets/images/avatar.png")}
                style={{ marginBottom: 30 }}
              />
              <Text
                style={{
                  color: theme.colors.primary,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                Suresh Prabha
              </Text>
            </View>
          </View>
        </Col>
      </Row>
      <View>
        <Row>
          <Col numRows={8}>
            <Drawer.Section
              style={{ paddingTop: 20, gap: 20 }}
              showDivider={false}
            >
              <Drawer.Item
                label="Lucky Draw"
                icon={({ color }) => (
                  <FontAwesome5 name="trophy" size={24} color={color} />
                )}
                active={active === "(luckydraw)"}
                onPress={() => setActive("(luckydraw)")}
              />
              <Drawer.Item
                label="Notifications"
                icon={({ color }) => (
                  <FontAwesome name="bell" size={24} color={color} />
                )}
                active={active === "(notifications)"}
                onPress={() => setActive("(notifications)")}
              />
              <Drawer.Item
                label="Wishlist"
                icon={({ color }) => (
                  <FontAwesome name="heart" size={24} color={color} />
                )}
                active={active === "(myorders)"}
                onPress={() => setActive("(myorders)")}
              />
              <Drawer.Item
                label="My Orders"
                icon={({ color }) => (
                  <FontAwesome name="shopping-bag" size={24} color={color} />
                )}
                active={active === "(wishlist)"}
                onPress={() => setActive("(wishlist)")}
              />
              <Drawer.Item
                label="My Cart"
                icon={({ color }) => (
                  <FontAwesome name="shopping-cart" size={24} color={color} />
                )}
                active={active === "(mycart)"}
                onPress={() => setActive("(mycart)")}
              />
              <Drawer.Item
                label="My Coupons"
                icon={({ color }) => (
                  <MaterialCommunityIcons
                    name="ticket"
                    size={24}
                    color={color}
                  />
                )}
                active={active === "(mycoupons)"}
                onPress={() => setActive("(mycoupons)")}
              />
              <Drawer.Item
                label="How It Works"
                icon={({ color }) => (
                  <FontAwesome name="question-circle" size={24} color={color} />
                )}
                active={active === "(howitworks)"}
                onPress={() => setActive("(howitworks)")}
              />
              <Drawer.Item
                label="Rules and guidelines"
                icon={({ color }) => (
                  <FontAwesome name="file" size={24} color={color} />
                )}
                active={active === "(rulesandregulations)"}
                onPress={() => setActive("(rulesandregulations)")}
              />
            </Drawer.Section>
          </Col>
        </Row>
        <Row
          style={{ marginTop: 20, margin: 10, gap: 20, alignSelf: "center" }}
        >
          <Col numRows={4}>
            <Button
              onPress={() => {
                router.push("/login");
              }}
              mode="contained"
              labelStyle={{ color: "white", fontSize: 16 }}
              style={{ ...styles.bgOrange, ...styles.button }}
            >
              Login
            </Button>
          </Col>
          <Col numRows={4}>
            <Button
              onPress={() => {
                router.push("/register");
              }}
              labelStyle={{ color: "black", fontSize: 16 }}
            >
              Register
            </Button>
          </Col>
        </Row>
      </View>
    </ScrollView>
  );
};

export default Menu;
