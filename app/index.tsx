import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Link, SplashScreen, useRootNavigationState } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  backgroundImage: {
    width: "100%", // Full width
  },
});
SplashScreen.preventAutoHideAsync();

export default function Page() {
  const rootNavigationState = useRootNavigationState();
  const [appIsReady, setAppIsReady] = useState(false);
  const onPress = () => {};
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!rootNavigationState?.key) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/onboarding">
        <ImageBackground
          source={require("./../assets/images/splash-screen.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height }]}
        >
          {/* Your other components go here */}
        </ImageBackground>
      </Link>
    </SafeAreaView>
  );
}
