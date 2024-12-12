import { View, Text, StyleSheet, Dimensions } from "react-native";
import theme from "../app/theme";
import { Avatar } from "react-native-paper";
const { width, height } = Dimensions.get("window");

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
    flex: 8,
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
  "5col": {
    flex: 5,
  },
  "6col": {
    flex: 6,
  },
  "7col": {
    flex: 7,
  },
  "8col": {
    flex: 8,
  },
});
const Menu = ({ navigation }) => {
  return (
    <View styles={styles.app}>
      <Row>
        <Col numRows={8}>
          <View
            style={{
              backgroundColor: theme.colors.primaryContainer,
              padding: 60,
              paddingStart: 20,
              paddingEnd: 20,
              textAlign: "start",
            }}
          >
            <Avatar.Image
              size={84}
              source={require("../assets/images/avatar.png")}
            />
            <Text
              style={{
                color: theme.colors.primary,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              Suresh Prabha
            </Text>
          </View>
        </Col>
      </Row>
    </View>
  );
};

export default Menu;
