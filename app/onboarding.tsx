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
import { Link } from "expo-router";
import Logo from "../assets/logo";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1,  },
  backgroundImage: {
    flex:1
  },
  image:{
    flex:1,
  }
});

export default function Page() {
  return (
    <View style={styles.container}>
        <ImageBackground
          source={require("./../assets/images/onboarding-bg-1.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height/2 }]}
        >
            <Image style={styles.image} source={require("./../assets/images/onboarding-1.png")}/>
            <Image style={styles.image} source={require("./../assets/images/onboarding-2.png")}/>
<View style={styles.image}><Text style={styles.baseText}>hello</Text></View>
        </ImageBackground>
        <ImageBackground
          source={require("./../assets/images/onboarding-bg-2.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height/2 }]}
        >
            <Image style={styles.image} source={require("./../assets/images/onboarding-3.png")}/>
            <Image style={styles.image} source={require("./../assets/images/onboarding-4.png")}/>

        </ImageBackground>
    </View>
  );
}
