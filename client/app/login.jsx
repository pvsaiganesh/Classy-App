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
import {
  Button,
  TextInput,
  useTheme,
  Checkbox,
  Text,
} from "react-native-paper";
import { useState } from "react";
const { width, height } = Dimensions.get("window");
import { theme } from "./theme";
import { StatusBar } from "expo-status-bar";
// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
//   backgroundImage: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
import { useRouter } from "expo-router";
const Col = ({ numRows = 4, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children, style = {} }) => (
  <View style={{ ...styles.row, ...style }}>{children}</View>
);
const styles = StyleSheet.create({
  // app: {
  //   flex: 1,
  //   justifyContent: "flex-start",
  //   alignItems: "flex-end",
  //   textAlign: "center",
  //   paddingTop: 50,
  //   margin: 30,
  // },
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
    margin: 30,
  },
  logoContainer: {
    width: width,
    height: height / 2,
    flexDirection: "row",
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
  input: { marginBottom: 20 },
  app: {
    // flex: 1,
    flex: 4,
    padding: 30,
    gap: 10,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
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
export default function Page() {
  const theme = useTheme();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  return (
    <View style={styles.app}>
      <StatusBar
        style="dark"
        hidden={false}
        animated={true}
        backgroundColor={theme.colors.primary}
      />
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch", // Optional, remove if not needed
        }}
      >
        <Col numRows={2}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: height / 3,
            }}
          >
            <Link href="./splashscreen">
              <Logo />
            </Link>
          </View>
        </Col>
      </Row>

      <Row>
        <Col numRows={4}>
          <TextInput
            mode="outlined"
            label="Email/Phone Number"
            outlineColor="#FFFFFF"
            value={emailPhone}
            style={styles.input}
            onChangeText={(emailPhone) => setEmailPhone(emailPhone)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <TextInput
            label="Password"
            secureTextEntry={secureTextEntry}
            mode="outlined"
            style={styles.input}
            value={password}
            outlineColor="#FFFFFF"
            right={
              <TextInput.Icon
                icon={secureTextEntry ? "eye" : "eye-off"}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            }
            // keyboardShouldPersistTaps="handled"
            onChangeText={(password) => setPassword(password)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <Row>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{ alignSelf: "center" }}>
              I agree to Privacy Policy and Terms of Use
            </Text>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col numRows={4}>
          <Button
            mode="contained"
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
