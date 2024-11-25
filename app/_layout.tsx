import { Stack } from "expo-router";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from "react-native-paper";
import "../global.css";
import { AppRegistry } from "react-native";
// import name from "../app";
const fontConfig = {
  web: {
    regular: {
      fontFamily: "urbanist",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "urbanist-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "urbanist-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "urbanist-thin",
      fontWeight: "normal",
    },
  },
  ios: {
    regular: {
      fontFamily: "urbanist",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "urbanist-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "urbanist-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "urbanist-thin",
      fontWeight: "normal",
    },
  },
  android: {
    regular: {
      fontFamily: "urbanist",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "urbanist-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "urbanist-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "urbanist-thin",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  // colors: {
  //   ...DefaultTheme.colors,
  //   primary: "#fd9829",
  //   secondary: "#fff",
  // },
  colors: {
    primary: "#FEAD54",
    onPrimary: "#FEAD54",
    primaryContainer: "#FEAD54",
    onPrimaryContainer: "#FEAD54",
    secondary: "#FFFFFF",
    onSecondary: "#FEAD54",
    secondaryContainer: "#FEAD54",
    onSecondaryContainer: "#FEAD54",
    tertiary: "rgb(0, 101, 140)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(197, 231, 255)",
    onTertiaryContainer: "rgb(0, 30, 45)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "#FEAD54",
    onBackground: "#FEAD54",
    surface: "#FEAD54",
    onSurface: "#FEAD54",
    surfaceVariant: "#FEAD54",
    onSurfaceVariant: "#FEAD54",
    outline: "rgb(131, 116, 105)",
    outlineVariant: "rgb(213, 195, 182)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(53, 47, 43)",
    inverseOnSurface: "rgb(250, 239, 232)",
    inversePrimary: "rgb(255, 184, 119)",
    elevation: {
      level0: "transparent",
      level1: "rgb(249, 242, 242)",
      level2: "rgb(246, 237, 235)",
      level3: "rgb(243, 232, 227)",
      level4: "rgb(241, 230, 224)",
      level5: "rgb(239, 227, 219)",
    },
    surfaceDisabled: "rgba(32, 27, 23, 0.12)",
    onSurfaceDisabled: "rgba(32, 27, 23, 0.38)",
    backdrop: "#FEAD54",
  },
  // fonts: configureFonts(fontConfig),
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="splashscreen" />
        <Stack.Screen name="details" />
      </Stack>
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
