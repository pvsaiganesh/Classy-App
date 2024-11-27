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
import { Button, TextInput, useTheme } from "react-native-paper";
import { useState } from "react";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Page() {
  const theme = useTheme();

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
      margin: 10,
    },
    logoContainer: {
      width: width,
      height: height / 2,
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
    input: { marginBottom: 20 },
  });
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Link href="./splashscreen">
          <Logo />
        </Link>
      </View>
      <TextInput
        mode="outlined"
        label="Email/Phone Number"
        value={text}
        style={styles.input}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        mode="contained"
        labelStyle={{ color: "white", fontSize: 16 }}
        style={{ ...styles.bgOrange, ...styles.button }}
      >
        Login
      </Button>
      <Button labelStyle={{ color: "black", fontSize: 16 }}>Register</Button>
    </View>
  );
}
