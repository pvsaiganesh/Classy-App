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
      alignItems: "flex-end",
      textAlign: "center",
      paddingTop: 50,
    },
    skip: {
      flexDirection: "row",
      paddingEnd: 30,
      fontSize: 30,
      justifyContent: "flex-end",
      textAlign: "right",
    },
    image: {
      paddingTop: 50,
      paddingStart: 30,
      flex: 1,
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: width,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    textBlack: {
      fontSize: 28,
      textAlign: "center",
      alignItems: "center",
    },
    textOrange: { color: theme.colors.primaryContainer, fontSize: 28 },
    bgOrange: {
      backgroundColor: theme.colors.primaryContainer,
      color: theme.colors.secondary,
    },
    desc: { fontSize: 16, textAlign: "center" },
    button: { textAlign: "center", alignSelf: "stretch" },
  });
  return (
    <View style={styles.app}>
      <StatusBar />
      <View>
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

          <Text style={styles.textBlack}>Shop{"  "}</Text>
          <Image
            style={{ ...styles.bgOrange, paddingTop: 0 }}
            source={require("../assets/images/orange-text.png")}
          />
          <Text style={styles.desc}>
            Find your daily necessities at Brand. The world's largest fashion
            e-commerce has arrived in a mobile version. Shop now!
          </Text>
          <Link href="./login">
            <Button
              mode="contained"
              labelStyle={{ color: "white", fontSize: 16 }}
              style={{ ...styles.bgOrange, ...styles.button }}
            >
              Login
            </Button>
          </Link>
          <Button labelStyle={{ color: "black", fontSize: 16 }}>
            Register
          </Button>
        </View>
      </View>
    </View>
  );
}
