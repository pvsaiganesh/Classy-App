import { SafeAreaView } from "react-native-safe-area-context";
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
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1,  marginHorizontal: "auto" },
  backgroundImage: {
    flex: 2, 
  },
  row:{
    flexDirection:"row",
  }
});

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)
const Col = ({ numRows, children }) => {
  return  (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

export default function Page() {
  return (
    <View style={styles.container}>
      
        <ImageBackground
          source={require("./../assets/images/onboarding-bg-1.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height }]}
        >
      <Row>
        <Col numRows={1}>
        <Image style={[styles.backgroundImage, { width: width/4, height: height/4 }]} source={require("./../assets/images/onboarding-1.png")}/>
            </Col>
            </Row>
            <Row>
            <Col numRows={1}><Text>hell</Text></Col>
        
        <Col numRows={1}>
            <Image style={[styles.backgroundImage, { width: width/4, height: height/4 }]} source={require("./../assets/images/onboarding-2.png")}/>
            </Col>
<Col numRows={1}></Col>
      </Row>
            
        </ImageBackground>
        <ImageBackground
          source={require("./../assets/images/onboarding-bg-2.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: width, height: height }]}
        >
            <Image style={[styles.backgroundImage, { width: width/4, height: height/4 }]} source={require("./../assets/images/onboarding-3.png")}/>
            <Image style={[styles.backgroundImage, { width: width/4, height: height/4 }]} source={require("./../assets/images/onboarding-4.png")}/>

        </ImageBackground>
    </View>
  );
}
