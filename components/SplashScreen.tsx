import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  backgroundImage: {
    width: "100%", // Full width
  },
});

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="./onboarding">
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
