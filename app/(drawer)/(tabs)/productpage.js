import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native";
// import axios from 'axios';

const Tab = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const productDetails = {
    name: "Headset white s300",
    image: "../../../assets/images/head.jpeg",
    cost: 230,
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      Alert.alert("Warning", "Please select a size before adding to cart.");
      return;
    }

    if (quantity <= 0) {
      Alert.alert("Warning", "Please select a quantity before adding to cart.");
      return;
    }

    const cartItem = {
      product_name: productDetails.name,
      product_cost: productDetails.cost,
      quantity,
      product_image: productDetails.image,
      size: selectedSize,
    };

    try {
      const response = await fetch("http://10.0.2.2:3001/cart/create-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });
      console.log("data", response);
      if (response.ok) {
        Alert.alert("Success", "Item added to the cart successfully!");
      } else {
        Alert.alert("Error", "Failed to add item to the cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      Alert.alert("Error", "An error occurred while adding to the cart.");
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Product Image */}
        <View>
          <Image
            source={require("../../../assets/images/head.jpeg")}
            style={styles.productImage}
          />

          {/* Icons on Image */}
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              {/*<Icon name="glass" size={24} color="#fff" />*/}
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              {/*<Icon name="glass" size={24} color="#fff" />*/}
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.productDetailsFlex}>
            <View style={{ flex: 2 }}>
              <Text style={styles.price}>₹{productDetails.cost}</Text>
              <Text style={styles.productName}>{productDetails.name}</Text>
            </View>
            <LinearGradient
              colors={["#FB5353", "#C83737"]}
              style={[styles.stockContainer, { flex: 1 }]}
            >
              <Text style={styles.stockText}>234 Left Of 1000</Text>
            </LinearGradient>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu
            mauris, scelerisque eu mauris id, pretium pulvinar scelerisque.
          </Text>

          {/* Banner */}
          <TouchableOpacity style={styles.banner}>
            <LinearGradient
              colors={["#E23B01", "#F27706"]}
              style={[styles.banner1, { flex: 1 }]}
            >
              <Text style={styles.bannerText}>WIN IPHONE 15</Text>
            </LinearGradient>
            <TouchableOpacity style={styles.banner2} onPress={toggleDropdown}>
              <Text style={styles.bannerSubText}>
                Click here for more details
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Dropdown for more details */}
          {isDropdownVisible && (
            <View style={styles.dropdown}>
              <Text style={styles.dropdownItem}>1. Random Text A</Text>
              <Text style={styles.dropdownItem}>2. Random Text B</Text>
              <Text style={styles.dropdownItem}>3. Random Text C</Text>
            </View>
          )}

          {/* Size Options */}
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeContainer}>
            {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSizeButton,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu
            mauris, scelerisque eu mauris id, pretium pulvinar sapien
            scelerisque.
          </Text>

          {/* Quantity Selector */}
          <View style={styles.cartContainer}>
            <View style={styles.quantitySelector}>
              <LinearGradient
                colors={["#E23B01", "#F27706"]}
                style={[styles.quantityButton1]}
              >
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={handleDecreaseQuantity}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
              </LinearGradient>

              <Text style={styles.quantity}>{quantity}</Text>
              <LinearGradient
                colors={["#E23B01", "#F27706"]}
                style={[styles.quantityButton1]}
              >
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={handleIncreaseQuantity}
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* Add to Cart Button */}
            <LinearGradient
              colors={["#E23B01", "#F27706"]}
              style={styles.addToCartButtonContainer}
            >
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={handleAddToCart}
              >
                <Text style={styles.addToCartText}>Add To Cart</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectedSizeButton: {
    backgroundColor: "#E23B01",
    borderColor: "#E23B01",
  },
  selectedSizeText: {
    color: "#fff",
  },
  container: { flex: 1, backgroundColor: "#fff" },
  productImage: { width: "100%", height: 300, resizeMode: "cover" },
  iconContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 16,
    top: 10,
  },
  productDetailsFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    borderStyle: "solid",
    padding: 16,
  },
  iconButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 8,
  },
  detailsContainer: {
    backgroundColor: "#F5FBFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  price: { fontSize: 35, fontWeight: "bold", color: "#000" },
  productName: { fontSize: 18, color: "#777", marginVertical: 8 },
  stockContainer: {
    padding: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  stockText: { color: "#ffffff", fontWeight: "bold", fontSize: 16 },
  description: {
    fontSize: 15,
    color: "#000000",
    marginVertical: 8,
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
  banner: {
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  banner1: {
    backgroundColor: "#FF6F61",
    padding: 18,
    width: 180,
    textAlign: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 38,
  },
  banner2: {
    backgroundColor: "#ffffff",
    padding: 18,
    width: 220,
    textAlign: "center",
  },
  bannerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  bannerSubText: { color: "#000000", fontSize: 15 },
  dropdown: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  dropdownItem: {
    padding: 10,
    fontSize: 15,
    color: "#333",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  dropdownItemLast: { borderBottomWidth: 0 },
  cartContainer: { marginTop: 16, padding: 16, paddingTop: 0 },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#000000",
    marginVertical: 8,
    padding: 16,
    paddingTop: 0,
  },
  sizeContainer: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    padding: 16,
  },
  sizeText: { color: "#000000", fontWeight: "bold" },
  cartContainer: { marginTop: 16, padding: 16, paddingTop: 0 },
  addToCartButtonContainer: { borderRadius: 25 },
  addToCartButton: {
    padding: 12,
    borderRadius: 25,
  },
  addToCartText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    padding: 8,
    backgroundColor: "#EBF7FF",
    width: 130,
    textAlign: "center",
    borderRadius: 10,
  },
  quantityButton: {
    padding: 10,
    borderRadius: 4,
  },
  quantityButton1: {
    borderRadius: 4,
  },
  quantityText: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 16,
  },
});

export default Tab;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you install react-native-vector-icons
// import LinearGradient from 'react-native-linear-gradient';
// import { ScrollView } from 'react-native';
//
//
// const ProductDetails = () => {
//   const [quantity, setQuantity] = useState(0); // Initial quantity is 0
//   const [selectedSize, setSelectedSize] = useState(null); // Track selected size
//   const [isDropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state
//
//   // Function to handle Add to Cart
//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       Alert.alert('Warning', 'Please select a size before adding to cart.');
//       return;
//     }
//
//     if (quantity > 0) {
//       Alert.alert('Success', 'Item added to the cart successfully!');
//     } else {
//       Alert.alert('Warning', 'Please select a quantity before adding to cart.');
//     }
//   };
//
//   // Function to handle Minus button
//   const handleDecreaseQuantity = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1); // Decrease quantity
//     }
//   };
//
//   // Function to handle Plus button
//   const handleIncreaseQuantity = () => {
//     setQuantity(quantity + 1); // Increase quantity
//   };
//
//   // Function to toggle dropdown
//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };
//
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         {/* Product Image */}
//         <View>
//           <Image
//             source={require('./assets/head.jpeg')}
//             style={styles.productImage}
//           />
//
//           {/* Icons on Image */}
//           <View style={styles.iconContainer}>
//             <TouchableOpacity style={styles.iconButton}>
//                {/*<Icon name="glass" size={24} color="#fff" />*/}
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//                {/*<Icon name="glass" size={24} color="#fff" />*/}
//             </TouchableOpacity>
//           </View>
//         </View>
//
//         {/* Product Details */}
//         <View style={styles.detailsContainer}>
//           <View style={styles.productDetailsFlex}>
//             <View style={{ flex: 2 }}>
//               <Text style={styles.price}>₹230</Text>
//               <Text style={styles.productName}>Headset white s300</Text>
//             </View>
//             <LinearGradient
//               colors={['#FB5353', '#C83737']}
//               style={[styles.stockContainer, { flex: 1 }]}
//             >
//               <Text style={styles.stockText}>234 Left Of 1000</Text>
//             </LinearGradient>
//           </View>
//
//           <Text style={styles.description}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu
//             mauris, scelerisque eu mauris id, pretium pulvinar scelerisque.
//           </Text>
//
//           {/* Banner */}
//           <TouchableOpacity style={styles.banner}>
//             <LinearGradient
//               colors={['#E23B01', '#F27706']}
//               style={[styles.banner1, { flex: 1 }]}
//             >
//               <Text style={styles.bannerText}>WIN IPHONE 15</Text>
//             </LinearGradient>
//             <TouchableOpacity style={styles.banner2} onPress={toggleDropdown}>
//               <Text style={styles.bannerSubText}>
//                 Click here for more details
//               </Text>
//             </TouchableOpacity>
//           </TouchableOpacity>
//
//           {/* Dropdown for more details */}
//           {isDropdownVisible && (
//             <View style={styles.dropdown}>
//               <Text style={styles.dropdownItem}>1. Random Text A</Text>
//               <Text style={styles.dropdownItem}>2. Random Text B</Text>
//               <Text style={styles.dropdownItem}>3. Random Text C</Text>
//             </View>
//           )}
//
//           {/* Size Options */}
//           <Text style={styles.sectionTitle}>Size</Text>
//           <View style={styles.sizeContainer}>
//             {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
//               <TouchableOpacity
//                 key={size}
//                 style={[
//                   styles.sizeButton,
//                   selectedSize === size && styles.selectedSizeButton,
//                 ]}
//                 onPress={() => setSelectedSize(size)}
//               >
//                 <Text
//                   style={[
//                     styles.sizeText,
//                     selectedSize === size && styles.selectedSizeText,
//                   ]}
//                 >
//                   {size}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//
//           <Text style={styles.description}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu
//             mauris, scelerisque eu mauris id, pretium pulvinar sapien
//             scelerisque.
//           </Text>
//
//           {/* Quantity Selector */}
//           <View style={styles.cartContainer}>
//             <View style={styles.quantitySelector}>
//             <LinearGradient
//                           colors={['#E23B01', '#F27706']}
//                           style={[styles.quantityButton1]}
//                         >
//               <TouchableOpacity
//                 style={styles.quantityButton}
//                 onPress={handleDecreaseQuantity}
//               >
//                 <Text style={styles.quantityText}>-</Text>
//               </TouchableOpacity>
//               </LinearGradient>
//
//               <Text style={styles.quantity}>{quantity}</Text>
// <LinearGradient
//               colors={['#E23B01', '#F27706']}
//               style={[styles.quantityButton1]}
//             >
//               <TouchableOpacity
//                 style={styles.quantityButton}
//                 onPress={handleIncreaseQuantity}
//               >
//                 <Text style={styles.quantityText}>+</Text>
//               </TouchableOpacity>
//               </LinearGradient>
//             </View>
//
//             {/* Add to Cart Button */}
//             <LinearGradient
//               colors={['#E23B01', '#F27706']}
//               style={styles.addToCartButtonContainer}
//             >
//               <TouchableOpacity
//                 style={styles.addToCartButton}
//                 onPress={handleAddToCart}
//               >
//                 <Text style={styles.addToCartText}>Add To Cart</Text>
//               </TouchableOpacity>
//             </LinearGradient>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
