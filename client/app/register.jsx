import {
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/logo";
import {
  Button,
  IconButton,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { useState } from "react";
const { width, height } = Dimensions.get("window");
// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
//   backgroundImage: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
import { useRouter } from "expo-router";
import ArrowLeft from "../assets/images/arrow-left";
import { Checkbox } from "react-native-paper";
import theme from "./theme";
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
const styles = StyleSheet.create({
  app: {
    flex: 4,
    padding: 30,
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
const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children }) => <View style={styles.row}>{children}</View>;
export default function Page() {
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  return (
    <View style={styles.app}>
      <Row>
        <Col numRows={4}>
          <IconButton
            onPress={() => {
              router.push("/login");
            }}
            icon="arrow-left"
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <Text style={{ fontSize: 50 }}>Let’s create your account.</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={2}>
          <TextInput
            mode="outlined"
            label="First Name"
            outlineColor="#FFFFFF"
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </Col>
        <Col numRows={2}>
          <TextInput
            label="Last Name"
            mode="outlined"
            value={lastName}
            outlineColor="#FFFFFF"
            onChangeText={(lastName) => setLastName(lastName)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            outlineColor="#FFFFFF"
            onChangeText={(email) => setEmail(email)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <TextInput
            label="Password"
            secureTextEntry={secureTextEntry}
            mode="outlined"
            // style={styles.input}
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
          <TextInput
            label="Phone Number"
            mode="outlined"
            value={phoneNumber}
            outlineColor="#FFFFFF"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => setChecked(!checked)}
          >
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
          </TouchableOpacity>
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
