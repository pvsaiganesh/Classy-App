import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import theme from "../theme";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "../../components/Header";

export default function Layout() {
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
          drawerActiveTintColor: theme.colors.primaryContainer,
          drawerActiveBackgroundColor: theme.colors.primaryContainer,
          drawerInactiveTintColor: theme.colors.primary,
          drawerInactiveBackgroundColor: theme.colors.onPrimary,
          drawerLabelStyle: {
            color: "white",
          },
        }}
      >
        {/* <Drawer.Screen
          name="productpage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "product details",
            title: "product page",
          }}
        /> */}
        {/* <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "User",
            title: "overview",
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
