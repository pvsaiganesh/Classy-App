import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import theme from "../theme";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "../../components/Header";
import DrawerLogo from "../../assets/images/DrawerLogo";
import { IconButton } from "react-native-paper";
import { TouchableOpacity, View, Dimensions, StyleSheet } from "react-native";
import Logo from "../../assets/images/Logo";
// import Slot from "expo-router";
const { width, height } = Dimensions.get("window");

export default function Layout() {
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
      flex: 4,
    },
    "6col": {
      flex: 4,
    },
    "7col": {
      flex: 4,
    },
    "8col": {
      flex: 4,
    },
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        // drawerIcon={}
        screenOptions={{
          // header: ({ navigation, route, options }) => {
          //   const title = getHeaderTitle(options, route.name);
          //   console.log({ navigation, route, options, title });
          //   return <Header />;
          // },
          headerStyle: { backgroundColor: theme.colors.primaryContainer },
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <Row
                style={{
                  paddingTop: 50,
                  padding: 20,
                  backgroundColor: theme.colors.primaryContainer,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch", // Optional, remove if not needed
                }}
              >
                <Col numRows={1}>
                  <View style={{ padding: 10 }}>
                    <TouchableOpacity onPress={() => {}}>
                      <DrawerLogo />
                    </TouchableOpacity>
                  </View>
                </Col>

                <Col numRows={5}>
                  <View
                    style={{
                      padding: 10,
                      flex: 1,
                      direction: "row",
                      alignSelf: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 45,
                      backgroundColor: theme.colors.onPrimary,
                    }}
                  >
                    <TouchableOpacity onPress={() => {}}>
                      <Logo />
                    </TouchableOpacity>
                  </View>
                </Col>
                <Col numRows={1}>
                  <View style={{ padding: 10 }}>
                    <TouchableOpacity onPress={() => {}}>
                      <DrawerLogo />
                    </TouchableOpacity>
                  </View>
                </Col>
                <Col numRows={1}>
                  <View style={{ padding: 10 }}>
                    <TouchableOpacity onPress={() => {}}>
                      <DrawerLogo />
                    </TouchableOpacity>
                  </View>
                </Col>
              </Row>
            );
          },
          // headerTitle: (props) => <LogoTitle {...props} />,
          // headerShown: false,
          headerLeft: ({ color }) => (
            <View style={{ padding: 10 }}>
              <TouchableOpacity onPress={() => {}}>
                <DrawerLogo color={color} />
              </TouchableOpacity>
            </View>
          ),
          // drawerIcon: ({ color }) => <DrawerLogo color={color} />,

          swipeEdgeWidth: 0,
          drawerActiveTintColor: theme.colors.primaryContainer,
          drawerActiveBackgroundColor: theme.colors.primaryContainer,
          drawerInactiveTintColor: theme.colors.primary,
          drawerInactiveBackgroundColor: theme.colors.onPrimary,
          drawerLabelStyle: {
            color: "white",
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        {/* <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "User",
            title: "overview",
          }}
        /> */}
        {/* <Slot /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
