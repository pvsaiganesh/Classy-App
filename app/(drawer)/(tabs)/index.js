import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
