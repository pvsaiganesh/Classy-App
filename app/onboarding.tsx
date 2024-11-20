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
    app:{flex:1},
    row:{flexDirection:"row"},
  container: { flex: 1, width:'50%',justifyContent:"center",alignItems:"center" },
  backgroundImage: {
    flex:1
  },
  image:{
    flex:1,
  }
});

export default function Page() {
  return (
    <View style={styles.app}>
        <ImageBackground
          source={require("./../assets/images/onboarding-bg-1.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height/2 }]}
        ><View style={styles.row}>
            <View style={styles.container}><Image  source={require("./../assets/images/onboarding-1.png")}/></View>
<View style={styles.container}><Text style={styles.baseText}>hello</Text></View>
</View>
<View style={styles.row}>
<View style={styles.container}><Text style={styles.baseText}>hello</Text></View>

 <View style={styles.container}><Image  source={require("./../assets/images/onboarding-2.png")}/></View>
</View>
        </ImageBackground>

        <ImageBackground
          source={require("./../assets/images/onboarding-bg-2.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height/2 }]}
        >
         <View style={styles.row}>
            <View style={styles.container}><Image  source={require("./../assets/images/onboarding-3.png")}/></View>
<View style={styles.container}><Text style={styles.baseText}>hello</Text></View>
</View>
<View style={styles.row}>
<View style={styles.container}><Text style={styles.baseText}>hello</Text></View>

 <View style={styles.container}><Image  source={require("./../assets/images/onboarding-4.png")}/></View>
</View>    

        </ImageBackground>
    </View>
  );
}
