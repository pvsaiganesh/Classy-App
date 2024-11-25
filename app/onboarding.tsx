import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
  View,
  Text,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Logo from "../assets/logo";
import { Button, IconButton, MD3Colors, useTheme } from "react-native-paper";
import { OnboardingImage } from "../assets/images/onboarding-image.jsx";

const { width, height } = Dimensions.get("window");

export default function Page() {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    app: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    skip: {
      flexDirection: "row",
      justifyContent: "flex-end",
      textAlign: "right",
    },
    image: {
      flex: 1,
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    textBlack: {
      padding: 20,
      fontSize: 28,
      textAlign: "center",
      alignItems: "center",
    },
    textOrange: { padding: 20, color: theme.colors.primary, fontSize: 28 },
    bgOrange: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.secondary,
    },
    desc: { fontSize: 16, textAlign: "center" },
    button: { textAlign: "center" },
  });
  return (
    <View style={styles.app}>
      <StatusBar />
      <View style={styles.skip}>
        <Text>Skip</Text>
      </View>
      <View style={[styles.image, { width: width, height: height / 2 }]}>
        <OnboardingImage />
      </View>
      <View style={styles.container}>
        <Text style={styles.textBlack}>
          Shop <Text style={styles.textOrange}>Smart</Text>
          {"   "}
          Shop <Text style={styles.textOrange}>Exciting</Text>
        </Text>

        <Text style={styles.textBlack}>
          Shop
          <Image
            style={styles.bgOrange}
            source={require("../assets/images/orange-text.png")}
          />
        </Text>

        <Text style={styles.desc}>
          Find your daily necessities at Brand. The world's largest fashion
          e-commerce has arrived in a mobile version. Shop now!
        </Text>
        <Button style={styles.bgOrange}>Login</Button>
        <Button style={styles.bgOrange}>Register</Button>
      </View>
    </View>
  );
}
