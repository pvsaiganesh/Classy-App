import * as React from "react";
import { Dimensions, Text, View, Image, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { imageCarousalArray } from "../utils/constants";

function CarousalComp() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        autoPlayInterval={2000}
        // withAnimation
        pagingEnabled={true}
        enabled={true}
        mode="parallax"
        height={width / 2}
        autoPlay={true}
        data={imageCarousalArray}
        scrollAnimationDuration={3000}
        onSnapToItem={(index) => console.log("current index:", index)}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    width: "100%", // Set to match carousel width
                    height: "100%", // Set to match carousel height
                    resizeMode: "cover", // Ensure the image fits nicely
                  }}
                  source={item?.imageUrl}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

export default CarousalComp;
