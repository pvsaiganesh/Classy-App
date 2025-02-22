import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import theme from "../theme";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "../../components/Header";
import DrawerLogo from "../../assets/images/DrawerLogo";
import { IconButton, Searchbar } from "react-native-paper";
import { TouchableOpacity, View, Dimensions, StyleSheet } from "react-native";
import Logo from "../../assets/images/Logo";
import Cart from "../../assets/images/Cart";
import Bell from "../../assets/images/Bell";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import ProfileInMenu from "../../components/Menu";
import Menu from "../../components/Menu";
import { router, Stack } from "expo-router";
// import Slot from "expo-router";
const { width, height } = Dimensions.get("window");
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext } from "react";
import { AppContext } from "../utils/AppContext";
// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItem label="..." />
//       // ...
//     </DrawerContentScrollView>
//   );
// }

// function StackNavigator({ navigation }) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerRight: () => (
//             <Button title="press" onPress={() => navigation.toggleDrawer()} />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="(tabs)" // This is the name of the page and must match the url from root
//         options={{
//           drawerLabel: "Home",
//           title: "Home",
//         }}
//       />
//       <Stack.Screen
//         name="(profile)" // This is the name of the page and must match the url from root
//         options={{
//           drawerLabel: "Profile",
//           title: "Profile",
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

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
function DrawerNavigator({ navigation, route }) {
  const { header } = useContext(AppContext);
  const getCurrentRoute = (state) => {
    if (state.routes[state.index].state != undefined) {
      return getCurrentRoute(state.routes[state.index].state);
    } else {
      return state.routes[state.index];
    }
  };
  return (
    <Drawer
      screenOptions={{
        drawerContent: (props) => {
          return <Menu {...props} />;
        },
        headerStyle: { backgroundColor: theme.colors.primaryContainer },
        headerShown: false,
        // header: ({ navigation, route, options }) => {
        //   const title = getHeaderTitle(options, route.name);

        //   return (
        //   );
        // },
        // headerTitle: (props) => <LogoTitle {...props} />,
        // headerShown: false,
        // headerLeft: ({ color }) => (
        //   <View style={{ padding: 10 }}>
        //     <TouchableOpacity onPress={() => {}}>
        //       <DrawerLogo color={color} />
        //     </TouchableOpacity>
        //   </View>
        // ),
        // drawerIcon: ({ color }) => <DrawerLogo color={color} />,

        swipeEdgeWidth: 0,
        drawerActiveTintColor: theme.colors.primaryContainer,
        drawerActiveBackgroundColor: theme.colors.primaryContainer,
        drawerInactiveTintColor: theme.colors.primary,
        drawerInactiveBackgroundColor: theme.colors.onPrimary,
        drawerLabelStyle: {
          color: "white",
        },
        drawerContent: (props) => {
          return <Menu {...props} />;
        },
      }}
      drawerContent={(props) => <Menu {...props} />}
    ></Drawer>
  );
}
export default function Layout() {
  return <DrawerNavigator />;
}
