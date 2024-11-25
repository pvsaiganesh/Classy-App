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
import { OnboardingImage } from "../assets/images/onboarding-image";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: "#fff", padding: 50 },
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
    fontSize: 24,
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
      <OnboardingImage />
    </View>
  );
}
