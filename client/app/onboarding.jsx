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
import { Link, useNavigation, useRouter } from "expo-router";
import Logo from "../assets/logo.jsx";
import { Button, IconButton, MD3Colors, useTheme } from "react-native-paper";
import { OnboardingImage } from "../assets/images/onboarding-image.jsx";
import theme from "./theme";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  app: {
    flex: 4,
    padding: 30,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  // skip: {
  //   flexDirection: "row",
  //   paddingEnd: 30,
  //   fontSize: 30,
  //   justifyContent: "flex-end",
  //   textAlign: "right",
  // },
  // image: {
  //   paddingTop: 50,
  //   paddingStart: 30,
  //   flex: 1,
  //   textAlign: "center",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: width,
  // },
  // container: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   textAlign: "center",
  // },
  textBlack: {
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
  },
  textOrange: { color: theme.colors.primaryContainer, fontSize: 16 },
  bgOrange: {
    backgroundColor: theme.colors.primaryContainer,
    color: theme.colors.secondary,
  },
  desc: { fontSize: 8, textAlign: "center" },
  button: { textAlign: "center", alignSelf: "stretch" },
  "1col": {
    flex: 1,
  },
  "2col": {
    flex: 2,
  },
  "3col": {
    flex: 3,
  },
  "4col": {
    flex: 4,
  },
});
const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children, style }) => (
  <View style={{ ...style, ...styles.row }}>{children}</View>
);
export default function Page() {
  // const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.app}>
      <StatusBar hidden animated={true} />
      <Row style={{ textAlign: "end" }}>
        <Text
          onPress={() => {
            router.push("/login");
          }}
        >
          Skip
        </Text>
      </Row>
      <Row>
        <View style={{ height: height / 2, width: width / 2, flex: 1 }}>
          <OnboardingImage />
        </View>
      </Row>
      <Row>
        <Col>
          <Text style={styles.textBlack}>
            Shop <Text style={styles.textOrange}>Smart</Text>
            {"   "}
            Shop <Text style={styles.textOrange}>Exciting</Text>
          </Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.textBlack}>Shop{"  "}</Text>
          <Image
            style={{ ...styles.bgOrange, paddingTop: 0 }}
            source={require("../assets/images/orange-text.png")}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text style={styles.desc}>
            Find your daily necessities at Brand. The world's largest fashion
            e-commerce has arrived in a mobile version. Shop now!
          </Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <Button
            mode="contained"
            onPress={() => {
              router.push("/login");
            }}
            labelStyle={{ color: "white", fontSize: 16 }}
            style={{ ...styles.bgOrange, ...styles.button }}
          >
            Login
          </Button>
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <Button
            onPress={() => {
              router.push("/register");
            }}
            labelStyle={{ color: "black", fontSize: 16 }}
          >
            Register
          </Button>
        </Col>
      </Row>
    </View>
  );
}
