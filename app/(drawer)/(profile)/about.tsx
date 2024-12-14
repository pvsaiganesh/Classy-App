import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons (e.g., back arrow, cart)

const AboutAppScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About App</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View> */}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>About Classy</Text>
          <Text style={styles.text}>
            With every product you buy, you don’t just shop—you enter an exciting campaign! With every product you buy, you don’t just shop—you enter an exciting campaign! 
            With every product you buy, you don’t just shop—you enter an exciting campaign! 
          </Text>
          <Text style={styles.text}>
            With every product you buy, you don’t just shop—you enter an exciting campaign! With every product you buy, you don’t just shop—you enter an exciting campaign! 
            With every product you buy, you don’t just shop—you enter an exciting campaign!
          </Text>
         
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cartButton: {
    padding: 5,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,

  },
});

export default AboutAppScreen;
