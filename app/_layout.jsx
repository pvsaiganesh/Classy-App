import { Stack } from "expo-router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../global.css";
import { AppRegistry } from "react-native";
import { theme } from "./theme";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider } from "./utils/AppContext";
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="splashscreen" />
              <Stack.Screen name="details" />
              <Stack.Screen name="onboarding" />
              <Stack.Screen name="login" />
              <Stack.Screen options={{ headerShown: true }} name="/(profile)" />
            </Stack>
          </GestureHandlerRootView>
        </AppProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
}
AppRegistry.registerComponent("Classy-App", () => RootLayout);
// import { useCallback, useEffect, useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import Entypo from "@expo/vector-icons/Entypo";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";
// import {
//   StyleSheet,
//   Platform,
//   Image,
//   ImageBackground,
//   Dimensions,
// } from "react-native";
// import { Link, Stack, useRootNavigationState } from "expo-router";
// import { Collapsible } from "@/components/Collapsible";
// import { ExternalLink } from "@/components/ExternalLink";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Home from ".";
// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// // Set the animation options. This is optional.
// // SplashScreen.setOptions({
// //   duration: 1000,
// //   fade: true,
// // });
// const { width, height } = Dimensions.get("window");
// export default function App() {
//   const rootNavigationState = useRootNavigationState();
//   const [appIsReady, setAppIsReady] = useState(false);
//   const onPress = () => {};
//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(() => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       SplashScreen.hide();
//     }
//   }, [appIsReady]);

//   if (!rootNavigationState?.key) {
//     return null;
//   }
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {/* <Stack.Screen name="(tabs)" options={{}} /> */}
//       {/* <Stack.Screen name="home" options={{}} component={<Home/>} /> */}
//       {/* <Stack.Screen name="details" options={{}} /> */}
//     </Stack>
//   );
// }

// import * as SplashScreen from "expo-splash-screen";
// import React, { useCallback, useEffect, useState } from "react";
// import { Text, View } from "react-native";

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       // Keep the splash screen visible
//       await SplashScreen.preventAutoHideAsync();
//       // Do what you need before the splash screen gets hidden
//       console.log(
//         "I'm a task that gets executed before splash screen disappears"
//       );
//       // Then tell the application to render
//       setAppIsReady(true);
//     }
//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // Hide the splash screen
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View
//       onLayout={onLayoutRootView}
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     >
//       <Text>Hello Word!</Text>
//     </View>
//   );
// }

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       // Keep the splash screen visible
//       await SplashScreen.preventAutoHideAsync();
//       // Do what you need before the splash screen gets hidden
//       console.log("I'm a task that gets executed before splash screen disappears");
//       // Then tell the application to render
//       setAppIsReady(true);
//     }
//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // Hide the splash screen
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View onLayout={onLayoutRootView} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>Hello Word!</Text> </View>
//   );
// }
// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
