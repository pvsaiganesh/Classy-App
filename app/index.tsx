import {
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/logo";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  backgroundImage: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
});

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="./onboarding">
        <ImageBackground
          source={require("./../assets/images/home-bg.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height }]}
        >
          <Logo />
        </ImageBackground>
      </Link>
    </View>
  );
}
