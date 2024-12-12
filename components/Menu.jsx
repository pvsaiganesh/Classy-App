import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import theme from "../app/theme";
import { Avatar, Drawer, IconButton } from "react-native-paper";
import Winner from "../assets/images/Winner";
import Bell from "../assets/images/Bell";
import Cart from "../assets/images/Cart";
import Coupon from "../assets/images/Coupon";
const { width, height } = Dimensions.get("window");

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
    <View styles={styles.app}>
      <Row>
        <Col numRows={8}>
          <Pressable
            onPress={() => {
              navigation.navigate("(profile)");
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.primaryContainer,
                paddingTop: 60,

                paddingStart: 20,
                paddingEnd: 20,
                paddingBottom: 20,

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
          </Pressable>
        </Col>
      </Row>
      <Row>
        <Col numRows={8}>
          <View>
            <Drawer.Section
              style={{ marginTop: 20, margin: 10, gap: 20 }}
              showDivider={false}
            >
              <Drawer.Item
                label="Lucky Draw"
                icon={(props) => <Winner />}
                active={active === "first"}
                onPress={() => setActive("first")}
              />
              <Drawer.Item
                label="Notifications"
                icon={(props) => <Bell />}
                active={active === "first"}
                onPress={() => setActive("first")}
              />
              <Drawer.Item
                label="Wishlist"
                icon={({ color }) => <IconButton icon="heart" color={color} />}
                active={active === "first"}
                onPress={() => setActive("first")}
              />
              <Drawer.Item
                label="Orders"
                icon={(props) => <Winner />}
                active={active === "first"}
                onPress={() => setActive("first")}
              />
              <Drawer.Item
                label="Cart"
                icon={(props) => <Cart />}
                active={active === "first"}
                onPress={() => setActive("first")}
              />
              <Drawer.Item
                label="Coupons"
                icon={(props) => <Coupon />}
                active={active === "first"}
                onPress={() => setActive("first")}
              />
              <Drawer.Item
                label="How It Works"
                icon={(props) => <Winner />}
                active={active === "first"}
                onPress={() => setActive("first")}
              />
            </Drawer.Section>
          </View>
        </Col>
      </Row>
    </View>
  );
};

export default Menu;
