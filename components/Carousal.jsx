import * as React from "react";
import { Dimensions, Text, View, Image, TouchableOpacity } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Dimensions, StyleSheet } from "react-native";
import { imageCarousalArray } from "../utils/constants";

function CarousalComp() {
  const width = Dimensions.get("window").width;

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.thumbnail }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <Carousel
      sliderWidth={screenWidth}
      sliderHeight={screenWidth}
      itemWidth={screenWidth - 60}
      data={imageCarousalArray}
      renderItem={this._renderItem}
      hasParallaxImages={true}
    />
  );
}
const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});

export default CarousalComp;
