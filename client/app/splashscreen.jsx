import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Link, useNavigation } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import Logo from "../assets/logo";
import { Button, IconButton, MD3Colors, useTheme } from "react-native-paper";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: "#fff" },
  appContainer: { flex: 1, padding: 10, paddingTop: 50 },
  appContainer2: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  row: { flexDirection: "row" },
  baseText: {
    fontFamily: "mont-serrat",
    fontSize: 18,
  },
  container: {
    flex: 1,
    padding: 10,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default function Page() {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View style={styles.app}>
      <ImageBackground
        source={require("./../assets/images/onboarding-bg-1.png")} // Replace with your image path
        style={[styles.backgroundImage, { width: width, height: height / 2 }]}
      >
        <View style={styles.appContainer}>
          <StatusBar />

          <View style={styles.row}>
            <View style={styles.container}>
              <Image source={require("./../assets/images/onboarding-1.png")} />
            </View>
            <View style={styles.container}>
              <Text style={styles.baseText}>Buy Product</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.container}>
              <Text style={styles.baseText}>Enter Campaign</Text>
            </View>

            <View style={styles.container}>
              <Image source={require("./../assets/images/onboarding-2.png")} />
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.appContainer2}>
        <ImageBackground
          source={require("./../assets/images/onboarding-bg-2.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height / 2 }]}
        >
          <View style={styles.row}>
            <View style={styles.container}>
              <Image source={require("./../assets/images/onboarding-3.png")} />
            </View>
            <View style={styles.container}>
              <Text style={styles.baseText}>Get unique code</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.container}>
              <Text style={styles.baseText}>Win Big!!</Text>
            </View>

            <View style={styles.container}>
              <Image source={require("./../assets/images/onboarding-4.png")} />
            </View>
          </View>
        </ImageBackground>
        <View style={{ paddingBottom: 30 }}>
          <Link href="/onboarding">
            <IconButton
              icon="arrow-right"
              iconColor="#ffffff"
              mode="contained"
              size={36}
              onPress={() => console.log("Pressed")}
            />
          </Link>
        </View>
      </View>
    </View>
  );
}
