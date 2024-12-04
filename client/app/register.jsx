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
import { Button, Text, TextInput, useTheme } from "react-native-paper";
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
import { useRouter } from "expo-router";
import ArrowLeft from "../assets/images/arrow-left";
// const styles = {
//   app: {
//     flex: 4, // the number of columns you want to devide the screen into
//     marginHorizontal: "auto",
//     width: 400,
//     backgroundColor: "red",
//   },
//   row: {
//     flexDirection: "row",
//   },
//   "1col": {
//     backgroundColor: "lightblue",
//     borderColor: "#fff",
//     borderWidth: 1,
//     flex: 1,
//   },
//   "2col": {
//     backgroundColor: "green",
//     borderColor: "#fff",
//     borderWidth: 1,
//     flex: 2,
//   },
//   "3col": {
//     backgroundColor: "orange",
//     borderColor: "#fff",
//     borderWidth: 1,
//     flex: 3,
//   },
//   "4col": {
//     flex: 4,
//   },
// };

// RN Code

// function App() {
//   return (
//     <View style={styles.app}>
//       <Row>
//         <Col numRows={2}>
//           <Text>First column</Text>
//         </Col>
//         <Col numRows={2}>
//           <Text>Second column</Text>
//         </Col>
//       </Row>
//       <Row>
//         <Col numRows={1}>
//           <Text>First column</Text>
//         </Col>
//         <Col numRows={3}>
//           <Text>Second Column</Text>
//         </Col>
//       </Row>
//     </View>
//   );
// }
export default function Page() {
  const theme = useTheme();
  const router = useRouter();
  const Col = ({ numRows, children }) => {
    return <View style={styles[`${numRows}col`]}>{children}</View>;
  };

  const Row = ({ children }) => <View style={styles.row}>{children}</View>;

  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const styles = StyleSheet.create({
    app: {
      // flex: 1,
      flex: 4,
      marginHorizontal: "auto",
      paddingTop: 50,
      gap: 10,
    },
    row: {
      flexDirection: "row",
      gap: 10,
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
      margin: 30,
    },
    logoContainer: {
      width: width,
      height: height / 2,
      flexDirection: "column",
      justifyContent: "flex-start",
      //   alignItems: "flex-start",
      //   textAlign: "start",
    },
    textBlack: {
      fontSize: 28,
      textAlign: "center",
      alignItems: "center",
    },
    textHeading: {
      fontFamily: "urbanist",
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 36,
      textAlign: "left",
      // text-underline-position: from-font;
      // text-decoration-skip-ink: none;
    },
    textOrange: { color: theme.colors.primaryContainer, fontSize: 28 },
    bgOrange: {
      backgroundColor: theme.colors.primaryContainer,
      color: theme.colors.secondary,
    },
    desc: { fontSize: 16, textAlign: "center" },
    button: { textAlign: "center", alignSelf: "stretch" },
    input: { marginBottom: 20, width: "45%" },
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
  return (
    <View style={styles.app}>
      <Row>
        <ArrowLeft />
      </Row>
      <Row>
        <Text>Let’s create your account.</Text>
      </Row>
      <Row>
        <Col numRows={2}>
          <TextInput
            mode="outlined"
            label="First Name"
            outlineColor="#FFFFFF"
            value={emailPhone}
            onChangeText={(emailPhone) => setEmailPhone(emailPhone)}
          />
        </Col>
        <Col numRows={2}>
          <TextInput
            label="Last Name"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            outlineColor="#FFFFFF"
            onChangeText={(text) => setPassword(text)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <TextInput
            label="Email"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            outlineColor="#FFFFFF"
            onChangeText={(text) => setPassword(text)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <TextInput
            label="Password"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            outlineColor="#FFFFFF"
            onChangeText={(text) => setPassword(text)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <TextInput
            label="Phone Number"
            secureTextEntry={true}
            mode="outlined"
            value={password}
            outlineColor="#FFFFFF"
            onChangeText={(text) => setPassword(text)}
          />
        </Col>
      </Row>

      <Button
        mode="contained"
        labelStyle={{ color: "white", fontSize: 16 }}
        style={{ ...styles.bgOrange, ...styles.button }}
      >
        Login
      </Button>
      <Button
        onPress={() => {
          router.push("/register");
        }}
        labelStyle={{ color: "black", fontSize: 16 }}
      >
        Register
      </Button>
    </View>
  );
}
