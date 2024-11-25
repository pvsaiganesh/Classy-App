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
import { OnboardingImage } from "../assets/images/onboarding-image.jsx";

const { width, height } = Dimensions.get("window");

export default function Page() {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    app: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    skip: { flex: 1, textAlign: "right" },
    image: { flex: 1, textAlign: "center" },
    heading: { flex: 1, textAlign: "center" },
    textBlack: { fontSize: 24, textAlign: "center", alignItems: "center" },
    textOrange: { color: theme.colors.primary, fontSize: 24 },
    bgOrange: { backgroundColor: theme.colors.primary },
    desc: { flex: 1, fontSize: 16, textAlign: "center" },
    button: { flex: 1, textAlign: "center" },
  });
  return (
    <View style={styles.app}>
      <View style={styles.skip}>
        <Text>Skip</Text>
      </View>
      <View style={styles.image}>
        <OnboardingImage />
      </View>
      <View style={styles.heading}>
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
      </View>
    </View>
  );
}
